export type SortFilterItem = {
  title: string;
  slug: string | null;
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', reverse: true }
];

export const DEFAULT_OPTION = 'Default Title';
