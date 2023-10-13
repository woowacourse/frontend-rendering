import { MOCK_GUEST_POST_INFO } from '@mocks/post';

export async function GET() {
  return Response.json(MOCK_GUEST_POST_INFO);
}
