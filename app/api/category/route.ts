import { MOCK_GUEST_CATEGORY_LIST } from '@mocks/categoryList';

export async function GET() {
  return Response.json(MOCK_GUEST_CATEGORY_LIST);
}
