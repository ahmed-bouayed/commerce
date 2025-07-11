import OpengraphImage from 'components/opengraph-image';
import { getCollections } from 'lib/local';

// Mock getCollection function
async function getCollection(handle: string): Promise<any> {
  const collections = await getCollections();
  return collections.find((collection) => collection.handle === handle);
}

export default async function Image({
  params
}: {
  params: { collection: string };
}) {
  const collection = await getCollection(params.collection);
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
