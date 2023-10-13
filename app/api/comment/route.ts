import { MOCK_COMMENT_LIST } from '@mocks/comment';

export async function GET() {
  return Response.json(MOCK_COMMENT_LIST);
}
