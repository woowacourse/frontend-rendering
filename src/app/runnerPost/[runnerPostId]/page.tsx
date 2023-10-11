import RunnerPostPage from '@/pages/RunnerPostPage/RunnerPostPage';

export default function Page({ params }: { params: { runnerPostId: string } }) {
  if (isNaN(Number(params.runnerPostId)))
    throw new Error('잘못된 url이 입력되었어요');

  return (
    <main>
      <RunnerPostPage runnerPostId={Number(params.runnerPostId)} />;
    </main>
  );
}
