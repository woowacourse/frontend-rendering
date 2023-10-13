import RankCard from "../rankCard/RankCard";

type CafeRankProps = {
  cafes: Cafe[];
};

const CafeRank = (props: CafeRankProps) => {
  const { cafes } = props;

  return (
    <section>
      {cafes.map((cafe) => (
        <RankCard
          key={cafe.id}
          name={cafe.name}
          address={cafe.address}
          image={cafe.image}
          rank={cafe.rank}
          likeCount={cafe.likeCount}
        />
      ))}
    </section>
  );
};

export default CafeRank;
