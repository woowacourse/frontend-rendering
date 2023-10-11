import { getPetFoodsFixture } from '@/mocks/petFoodsFixture';
import { GetPetFoodsRes } from '@/types/petFoods';

const { BASE_URL } = process.env;

export const getPetFoods = async (): Promise<GetPetFoodsRes> => {
  try {
    const res = await fetch(`${BASE_URL}/api/petFoods`);

    if (res.ok) {
      return await res.json();
    }

    throw res;
  } catch (e) {
    throw new Error('사료 목록을 받아오는 데에 실패했습니다.');
  }
};
