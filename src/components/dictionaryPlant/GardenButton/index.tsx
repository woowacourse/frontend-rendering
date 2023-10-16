'use client';

import type { DictionaryPlant } from 'types/dictionaryPlant';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import SvgFill from 'components/@common/SvgIcons/SvgFill';
import SvgStroke from 'components/@common/SvgIcons/SvgStroke';
import theme from 'style/theme.style';
import { Button } from './GardenButton.style';
import { selectedDictionaryPlantState } from 'store/atoms/garden';
import { URL_PATH } from 'constants/index';

type GardenButtonProps = Pick<DictionaryPlant, 'id' | 'name' | 'image'>;

const GardenButton = (props: GardenButtonProps) => {
  const { id, name, image } = props;

  const setSelectedDictionaryPlant = useSetRecoilState(selectedDictionaryPlantState);
  const router = useRouter();

  const goToFilteredGarden = () => {
    setSelectedDictionaryPlant({
      id,
      name,
      image,
    });
    router.push(URL_PATH.garden);
  };

  return (
    <Button type="button" onClick={goToFilteredGarden} aria-label="모두의 정원">
      <SvgStroke
        color={theme.color.fontPrimaryForBackground}
        size={16}
        icon="bulletin-board-line"
      />
      모두의 정원
      <SvgFill color={theme.color.sub} size={12} icon="line-arrow-right" />
    </Button>
  );
};

export default GardenButton;
