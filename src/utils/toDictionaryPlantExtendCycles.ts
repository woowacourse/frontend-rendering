import type { DictionaryPlant, DictionaryPlantExtendCycles, Season } from 'types/dictionaryPlant';
import { SEASONS } from 'constants/index';

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

export default toDictionaryPlantExtendCycles;
