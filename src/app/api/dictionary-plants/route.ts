// import type { NextRequest } from 'next/server';
import DICTIONARY_DATA from 'fixtures/dictionary';

export async function GET(request: Request) {
  // const searchParams = request.nextUrl.searchParams;
  console.log(request);
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('name') ?? '';
  const searchResult = DICTIONARY_DATA.filter(({ name }) => name.includes(target)).map(
    ({ id, name, image }) => ({ id, name, image })
  );

  return Response.json({ data: searchResult });
}
