import { RunnerPost } from '@/types/runnerPost';
import * as styles from './runnerPostItem.css';
import Avatar from '@/components/common/Avatar/Avatar';
import Image from 'next/image';

const RunnerPostItem = ({
  runnerPostData: { runnerPostId, title, deadline, tags, runnerProfile, watchedCount, applicantCount, reviewStatus },
}: {
  runnerPostData: RunnerPost;
}) => {
  return (
    <div className={styles.runnerPostItemContainer} onClick={() => {}}>
      <div className={styles.leftSideContainer}>
        <p className={styles.postTitle}>{title}</p>
        <div className={styles.deadLineContainer}>
          <p className={styles.deadLine}>{deadline.replace('T', ' ')} 까지</p>
          <p>라벨 자리</p>
        </div>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span className={styles.tag} key={index}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        {runnerProfile ? (
          <div className={styles.profileContainer}>
            <Avatar width={50} height={50} imageUrl={runnerProfile.imageUrl} />
            <p className={styles.profileName}>{runnerProfile.name}</p>
          </div>
        ) : null}
        <div className={styles.chatViewContainer}>
          <div className={styles.statisticsContainer}>
            <Image width={5} height={5} className={styles.statisticsImage} src="/eye-icon.svg" alt="조회수" />
            <p className={styles.statisticsText}>{watchedCount}</p>
            <Image width={5} height={5} className={styles.statisticsImage} src="/applicant-icon.svg" alt="리뷰요청수" />
            <p className={styles.statisticsText}>{applicantCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunnerPostItem;
