import { NextResponse } from 'next/server';

const petFoodDetailFixture = {
  id: 39,
  name: '프로플랜 독 슈레드 노령견 2.72kg',
  imageUrl: 'https://image.zipgo.pet/prod/pet-food/39.jpeg',
  purchaseUrl:
    'https://www.purinapetcare.co.kr/shop/product_view.php?c1_idx=1&c2_idx=3&order_by=md&this_tab=34&pd_idx=791',
  rating: 4.7,
  reviewCount: 15,
  primaryIngredients: ['닭고기', '쌀', '천연글루코사민'],
  hasStandard: {
    us: true,
    eu: true,
  },
  functionality: ['소화 건강'],
  brand: {
    state: '미국',
    name: '퓨리나',
    imageUrl: 'https://image.zipgo.pet/prod/brand-logo/purina.png',
    foundedYear: 1926,
    hasResearchCenter: true,
    hasResidentVet: true,
  },
};

export async function GET() {
  return NextResponse.json(petFoodDetailFixture);
}
