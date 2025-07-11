import { Product } from 'lib/types';

// Mock data for products
const mockProducts: Product[] = [
  {
    id: 'prod1',
    handle: 'product-1',
    title: 'Product 1',
    description: 'This is the description for Product 1.',
    priceRange: {
      minVariantPrice: { amount: '10.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '10.00', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://via.placeholder.com/400x400?text=Product+1',
      width: 400,
      height: 400,
      altText: 'Product 1 Image'
    },
    images: [
      { url: 'https://via.placeholder.com/400x400?text=Product+1+Image+1', width: 400, height: 400, altText: 'Product 1 Image 1' },
      { url: 'https://via.placeholder.com/400x400?text=Product+1+Image+2', width: 400, height: 400, altText: 'Product 1 Image 2' }
    ],
    variants: [],
    options: []
  },
  {
    id: 'prod2',
    handle: 'product-2',
    title: 'Product 2',
    description: 'This is the description for Product 2.',
    priceRange: {
      minVariantPrice: { amount: '20.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '20.00', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://via.placeholder.com/400x400?text=Product+2',
      width: 400,
      height: 400,
      altText: 'Product 2 Image'
    },
    images: [
      { url: 'https://via.placeholder.com/400x400?text=Product+2+Image+1', width: 400, height: 400, altText: 'Product 2 Image 1' },
      { url: 'https://via.placeholder.com/400x400?text=Product+2+Image+2', width: 400, height: 400, altText: 'Product 2 Image 2' }
    ],
    variants: [],
    options: []
  },
  {
    id: 'prod3',
    handle: 'product-3',
    title: 'Product 3',
    description: 'This is the description for Product 3.',
    priceRange: {
      minVariantPrice: { amount: '30.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '30.00', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://via.placeholder.com/400x400?text=Product+3',
      width: 400,
      height: 400,
      altText: 'Product 3 Image'
    },
    images: [
      { url: 'https://via.placeholder.com/400x400?text=Product+3+Image+1', width: 400, height: 400, altText: 'Product 3 Image 1' },
      { url: 'https://via.placeholder.com/400x400?text=Product+3+Image+2', width: 400, height: 400, altText: 'Product 3 Image 2' }
    ],
    variants: [],
    options: []
  },
  {
    id: 'prod4',
    handle: 'product-4',
    title: 'Product 4',
    description: 'This is the description for Product 4.',
    priceRange: {
      minVariantPrice: { amount: '40.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '40.00', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://via.placeholder.com/400x400?text=Product+4',
      width: 400,
      height: 400,
      altText: 'Product 4 Image'
    },
    images: [
      { url: 'https://via.placeholder.com/400x400?text=Product+4+Image+1', width: 400, height: 400, altText: 'Product 4 Image 1' },
      { url: 'https://via.placeholder.com/400x400?text=Product+4+Image+2', width: 400, height: 400, altText: 'Product 4 Image 2' }
    ],
    variants: [],
    options: []
  },
  {
    id: 'prod5',
    handle: 'product-5',
    title: 'Product 5',
    description: 'This is the description for Product 5.',
    priceRange: {
      minVariantPrice: { amount: '50.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '50.00', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://via.placeholder.com/400x400?text=Product+5',
      width: 400,
      height: 400,
      altText: 'Product 5 Image'
    },
    images: [
      { url: 'https://via.placeholder.com/400x400?text=Product+5+Image+1', width: 400, height: 400, altText: 'Product 5 Image 1' },
      { url: 'https://via.placeholder.com/400x400?text=Product+5+Image+2', width: 400, height: 400, altText: 'Product 5 Image 2' }
    ],
    variants: [],
    options: []
  }
];

export async function getCollectionProducts({
  collection
}: {
  collection: string;
}): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (collection === 'hidden-homepage-carousel') {
    return mockProducts.slice(0, 3); // Return a subset for carousel
  }
  if (collection === 'hidden-homepage-featured-items') {
    return mockProducts.slice(0, 3); // Return a subset for featured items
  }
  return mockProducts;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts.find((product) => product.handle === handle);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  // For recommendations, return a few other products
  const recommended = mockProducts.filter((product) => product.id !== productId).slice(0, 3);
  return recommended.length > 0 ? recommended : mockProducts.slice(0, 3); // Fallback if no other products
}

export async function getCart(cartId: string): Promise<any> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    id: cartId,
    totalQuantity: 0,
    lines: [],
    cost: {
      totalAmount: { amount: '0.00', currencyCode: 'USD' }
    }
  };
}

export async function addToCart(cartId: string, lines: any[]): Promise<any> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log('Adding to cart:', lines);
  return { success: true };
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<any> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log('Removing from cart:', lineIds);
  return { success: true };
}

export async function updateCart(cartId: string, lines: any[]): Promise<any> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log('Updating cart:', lines);
  return { success: true };
}

export async function getCollections(): Promise<any[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { handle: 'all', title: 'All Products' },
    { handle: 'hidden-homepage-carousel', title: 'Homepage Carousel (Hidden)' },
    { handle: 'hidden-homepage-featured-items', title: 'Homepage Featured Items (Hidden)' }
  ];
}

export async function getMenu(): Promise<any[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { title: 'Shop All', path: '/search' },
    { title: 'Product 1', path: '/product/product-1' },
    { title: 'Product 2', path: '/product/product-2' }
  ];
}

export async function getPage(handle: string): Promise<any> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    title: 'About Us',
    body: 'This is a mock about us page content.',
    seo: {
      title: 'About Us',
      description: 'Learn more about our company.'
    }
  };
}

export async function getPages(): Promise<any[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [{ handle: 'about-us', title: 'About Us' }];
}
