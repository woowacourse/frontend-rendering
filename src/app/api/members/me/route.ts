export async function GET() {
  return new Response('만료된 세션입니다.', { status: 401 });
}
