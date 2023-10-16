export interface PetFood {
  id: number;
  brandName: string;
  foodName: string;
  imageUrl: string;
}

export interface GetPetFoodsRes {
  petFoods: PetFood[];
}
