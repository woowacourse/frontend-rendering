'use client';

import Button from './components/common/Button';
import TopicCard from './components/TopicCard';

export default function Page() {
  return (
    <div className="space-y-4">
      <ul>
        <TopicCard
          name="패트릭의 맛집"
          image="https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg"
          creator="패트릭"
          pinCount={6}
          bookmarkCount={2}
          updatedAt="2023-03-09"
        />
      </ul>
    </div>
  );
}
