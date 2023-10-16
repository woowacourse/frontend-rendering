import type { DictionaryPlant } from 'types/dictionaryPlant';
import Image from 'next/image';
import { Header } from './DictionaryPlantDetail.style';
import DictionaryPlantContent from 'components/dictionaryPlant/DictionaryPlantContent';
import { BottomSheet, Main } from './DictionaryPlantDetail.style';
import BackButton from 'components/@common/BackButton';
import RegisterButton from 'components/dictionaryPlant/RegisterButton';
import DictionaryPlantAPI from 'apis/dictionaryPlant';
import toDictionaryPlantExtendCycles from 'utils/toDictionaryPlantExtendCycles';
import { DICTIONARY_PLANT_COUNT } from 'constants/index';

interface DictionaryPlantDetailProps {
  params: {
    dictId: DictionaryPlant['id'];
  };
}

export function generateStaticParams() {
  return Array.from({ length: DICTIONARY_PLANT_COUNT }).map((_, index) => ({
    dictId: (index + 1).toString(),
  }));
}

const DictionaryPlantDetail = async (props: DictionaryPlantDetailProps) => {
  const {
    params: { dictId },
  } = props;
  if (!dictId) throw new Error('URL에 id가 없습니다.');

  const dictionaryPlantId = Number(dictId);
  const response = await DictionaryPlantAPI.getDetail(dictionaryPlantId);
  const dictionaryPlantDetail: DictionaryPlant = await response.json();
  const { image, name } = dictionaryPlantDetail;

  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <Main>
        <Image
          src={image}
          alt={name}
          width={768}
          height={300}
          priority
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <DictionaryPlantContent {...toDictionaryPlantExtendCycles(dictionaryPlantDetail)} />
      </Main>
      <BottomSheet>
        <RegisterButton dictionaryPlantId={dictionaryPlantId} />
      </BottomSheet>
    </>
  );
};

export default DictionaryPlantDetail;
