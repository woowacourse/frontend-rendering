export async function GET() {
  return Response.json({
    toDo: "모던 자바스크립트 15장 정독(let, const 키워드와 블록 레벨 스코프)",
    completionCondition:
      "블록 레벨 스코프가 무엇인지 한 줄로 설명할 수 있다. -> 예시를 통해 1분 이내로 설명할 수 있다.",
    expectedProbability: "80% 이미 학습한 내용이기 때문이다.",
    expectedDifficulty: "개념을 학습한 후, 나만의 언어로 정리하는 것",
    whatCanYouDo: "핵심적인 내용을 먼저 정리한다.",
  });
}
