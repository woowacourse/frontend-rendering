import type { DictionaryPlant, Season } from 'types/dictionaryPlant';
import type { DictionaryPlantExtendCycles } from 'types/dictionaryPlant';
import Image from 'next/image';
import { Header } from './DictionaryPlantDetail.style';
import DictionaryPlantContent from 'components/dictionaryPlant/DictionaryPlantContent';
import { BottomSheet, Main } from './DictionaryPlantDetail.style';
import BackButton from 'components/@common/BackButton';
import RegisterButton from 'components/dictionaryPlant/RegisterButton';
import DictionaryPlantAPI from 'apis/dictionaryPlant';
import { SEASONS } from 'constants/index';

interface DictionaryPlantDetailProps {
  params: {
    dictId: DictionaryPlant['id'];
  };
}

const initialWaterOptions: DictionaryPlantExtendCycles['waterOptions'] = {
  봄: '',
  여름: '',
  가을: '',
  겨울: '',
};

const toDictionaryPlantExtendCycles = (data: DictionaryPlant): DictionaryPlantExtendCycles => {
  const { waterCycle } = data;

  const waterOptions = [...Object.entries(waterCycle)].reduce((prev, cur) => {
    const [season, data] = cur as [Season, string];
    const key = SEASONS[season];
    return { ...prev, [key]: data };
  }, initialWaterOptions);

  return { ...data, waterOptions };
};

export function generateStaticParams() {
  return [{ dictId: '1' }, { dictId: '2' }, { dictId: '3' }, { dictId: '4' }, { dictId: '5' }];
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
