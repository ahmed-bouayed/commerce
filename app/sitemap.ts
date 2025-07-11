import { getCollectionProducts, getCollections, getPages } from 'lib/local';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

// Mock baseUrl since it's not exported from lib/utils
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

// Mock getProducts function using getCollectionProducts
async function getProducts(): Promise<any[]> {
  return getCollectionProducts({ collection: 'all' });
}

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection: any) => ({
      url: `${baseUrl}/search/${collection.handle}`,
      lastModified: new Date().toISOString() // Using current date as updatedAt is not in mock
    }))
  );

  const productsPromise = getProducts().then((products) =>
    products.map((product: any) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: new Date().toISOString() // Using current date as updatedAt is not in mock
    }))
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page: any) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: new Date().toISOString() // Using current date as updatedAt is not in mock
    }))
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, pagesPromise])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
