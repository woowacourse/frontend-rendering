import { GetPetFoodsRes } from '@/types/petFoods';
import { myFetcher } from './fetcher';

export const getPetFoods = async () => {
  try {
    const { petFoods } = await myFetcher<GetPetFoodsRes>('/pet-foods');

    return petFoods;
  } catch (e) {
    throw new Error('사료 목록을 받아오는 데에 실패했습니다.');
  }
};
