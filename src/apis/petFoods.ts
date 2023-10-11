import { getPetFoodsFixture } from '@/mocks/petFoodsFixture';
import { GetPetFoodsRes } from '@/types/petFoods';

export const getPetFoods = async (): Promise<GetPetFoodsRes> => {
  try {
    const res = await fetch('http://localhost:3000/api/petFoods', {
      method: 'get',
    });

    return res.json();
  } catch (e) {
    throw new Error('사료 목록을 받아오는 데에 실패했습니다.');
  }
};
