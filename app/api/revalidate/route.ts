import { NextRequest, NextResponse } from 'next/server';

// Mock revalidate function
async function revalidate(req: NextRequest): Promise<NextResponse> {
  const collection = req.nextUrl.searchParams.get('collection');
  const product = req.nextUrl.searchParams.get('product');

  if (collection) {
    console.log(`Revalidating collection: ${collection}`);
  }
  if (product) {
    console.log(`Revalidating product: ${product}`);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidate(req);
}
