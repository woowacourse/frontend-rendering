import { getRunnerPostDetail } from '@/api/runnerPostDetail';

export default async function RunnerPostDetail(props: { params: { runnerPostId: string } }) {
  const runnerPostId = parseInt(props.params.runnerPostId, 10);
  const data = await getRunnerPostDetail(runnerPostId);

  return (
    <>
      <h2>{props.params.runnerPostId}번째 게시글 From SSR</h2>
      <h2>글 제목: {data.title}</h2>

      <p>{data.implementedContents}</p>
      <p>{data.postscriptContents}</p>
      <p>궁금 했던 질문이 있나요?: {data.curiousContents}</p>

      <p>
        깃허브 주소:{' '}
        <a href={data.pullRequestUrl} target="_blank">
          {data.pullRequestUrl}
        </a>
      </p>
      <p>글쓴이: {data.runnerProfile.name}</p>
    </>
  );
}
