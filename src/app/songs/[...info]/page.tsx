import { BASE_URL } from '@/env.constant';
import { SongDetail } from '@/songs/song.type';
import SongDetailItem from '@/songs/components/SongDetailItem';

interface SongDetailPageProps {
  params: {
    info: [string, string];
  };
}

const SongDetailPage = async ({ params }: SongDetailPageProps) => {
  const [songId, genre] = params.info;
  const response = await fetch(`${BASE_URL}/songs/high-liked/${songId}?genre=${genre}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error();
  }

  const songDetail = (await response.json()).currentSong as SongDetail;

  return (
    <div style={{ width: '100%' }}>
      <SongDetailItem detail={songDetail} />
    </div>
  );
};

export default SongDetailPage;
