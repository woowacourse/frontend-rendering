import { SEARCH_DATA } from "../data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const target = searchParams.get("name") ?? "";
  const searchResult = SEARCH_DATA.filter(({ name }) => name.includes(target));

  return Response.json({ data: searchResult });
}
