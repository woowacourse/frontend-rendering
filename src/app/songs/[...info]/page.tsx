interface SongDetailPageProps {
  params: {
    info: [string, string];
  };
}

const SongDetailPage = ({ params }: SongDetailPageProps) => {
  const [songId, genre] = params.info;

  return (
    <div style={{ fontSize: '44px', height: '400px', color: 'white', margin: 'auto' }}>
      {songId} {genre}
    </div>
  );
};

export default SongDetailPage;
