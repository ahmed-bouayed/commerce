export type Maybe<T> = T | null | undefined;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: CartItem[];
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: ProductOption[];
    product: Product;
  };
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Product = {
  id: string;
  handle: string;
  availableForSale?: boolean;
  title: string;
  description: string;
  descriptionHtml?: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: ProductVariant[];
  featuredImage: Image;
  images: Image[];
  seo?: SEO;
  tags?: string[];
  updatedAt?: string;
};

export type ProductOption = {
  displayName: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: ProductOption[];
  price: Money;
};

export type SEO = {
  title?: string;
  description?: string;
};

export type Collection = {
  handle: string;
  title: string;
  description?: string;
  seo?: SEO;
  path: string;
  updatedAt?: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt?: string;
  updatedAt?: string;
};

export type Menu = {
  title: string;
  path: string;
};
