import type { CaArticle } from '../types';
import { NEWS_2026_11_09 } from './2026-11-09';
import { NEWS_2026_11_10 } from './2026-11-10';
import { NEWS_2026_11_11 } from './2026-11-11';

// Today first, then yesterday, then the day before.
export const NEWS_INDEX: CaArticle[] = [
  ...NEWS_2026_11_11,
  ...NEWS_2026_11_10,
  ...NEWS_2026_11_09,
];

export const CA_DATES = [
  { iso: '2026-11-11', label: 'Today', longLabel: 'Wednesday, 11 November 2026' },
  { iso: '2026-11-10', label: 'Yesterday', longLabel: 'Tuesday, 10 November 2026' },
  { iso: '2026-11-09', label: '9 Nov', longLabel: 'Monday, 9 November 2026' },
];

// Unique categories present in the current briefings, alphabetically sorted.
export const CA_CATEGORIES: string[] = Array.from(
  new Set(NEWS_INDEX.map((article) => article.category)),
).sort();
