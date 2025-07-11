export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { q: searchValue } = searchParams as { [key: string]: string };

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          <span className="font-bold">"{searchValue}"</span>
        </p>
      ) : null}
    </>
  );
}
