'use client';

import { X, Trash2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useApp } from '@/lib/store';
import { COURSE_CATALOG, type CourseItem } from '@/data/types';
import { BRAND } from '@/data/site';
import { toast } from 'sonner';

/** Parse a catalog price into rupees, or null when quoted by the desk. */
function priceToNumber(price: string): number | null {
  if (!/^\u20b9[\d,]+$/.test(price)) return null;
  return Number(price.replace(/[^\d]/g, ''));
}

function formatRupees(n: number): string {
  return '\u20b9' + n.toLocaleString('en-IN');
}

export function CartDrawer() {
  const { cart, setCartOpen, removeFromCart } = useApp();
  const items = cart.items
    .map((id) => COURSE_CATALOG.find((c) => c.id === id))
    .filter(Boolean) as typeof COURSE_CATALOG;

  const numeric = items.map((i) => priceToNumber(i.price));
  const allQuoted = numeric.every((n) => n !== null);
  const total = allQuoted
    ? numeric.reduce<number>((sum, n) => sum + (n ?? 0), 0)
    : null;

  return (
    <Sheet open={cart.open} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="font-serif">Enrolment list</SheetTitle>
          <SheetDescription>
            Programme fees are shared on enquiry by the admissions desk.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <Info className="h-8 w-8 text-muted-foreground/60" aria-hidden />
            <p className="text-sm text-muted-foreground">
              Your list is empty. Add programmes from the Courses page.
            </p>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setCartOpen(false);
                useApp.getState().setView('path');
              }}
            >
              Browse programmes
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4 scroll-slim">
              {items.map((item: CourseItem) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug">{item.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      {item.mode ?? item.kind.replace('-', ' ')} · {item.period ?? 'one-time'}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-foreground/85">{item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from list`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="font-medium">
                  {total !== null ? formatRupees(total) : 'Fee on enquiry'}
                </span>
              </div>
              <p className="mb-3 font-mono text-[10.5px] leading-relaxed text-muted-foreground">
                Fee structures are programme-specific and confirmed at the
                admissions desk; a batch plan is mapped the same day.
              </p>
              <Button
                className="w-full"
                onClick={() =>
                  toast('Enrolment opens on confirmation', {
                    description:
                      `Call or WhatsApp ${BRAND.phone} (8 AM–9 PM, all days) or visit the Durgakund or Lanka campus to confirm your seat.`,
                  })
                }
              >
                Request enrolment
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function AddToListButton({ id, label = 'Add to list' }: { id: string; label?: string }) {
  const { addToCart, setCartOpen, cart } = useApp();
  const inList = cart.items.includes(id);
  return (
    <Button
      size="sm"
      variant={inList ? 'outline' : 'default'}
      className="h-9"
      onClick={() => {
        if (inList) {
          setCartOpen(true);
        } else {
          addToCart(id);
          toast('Added to your enrolment list');
        }
      }}
    >
      {inList ? 'In list · Review' : label}
    </Button>
  );
}

export function CloseCartButton() {
  const setCartOpen = useApp((s) => s.setCartOpen);
  return (
    <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)} aria-label="Close list">
      <X className="h-4 w-4" />
    </Button>
  );
}
