import { GetPetFoodsRes } from '@/types/petFoods';

const getPetFoodsFixture = (): GetPetFoodsRes => ({
  petFoods: [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1647616350787-6428e907a7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1585&q=80',
      brandName: '멍멍멍',
      foodName: '맛난 사료',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1608408891486-f5cade977d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '멍멍멍',
      foodName: '맛난 사료',
    },
    {
      id: 3,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661854817261-709ee570534a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1632236568054-12f36ecee2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1601758228006-964e41e5e8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 6,
      imageUrl:
        'https://images.unsplash.com/photo-1596491112146-f442e098810f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 7,
      imageUrl:
        'https://images.unsplash.com/photo-1596491123074-fd69f1b7c12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 8,
      imageUrl:
        'https://images.unsplash.com/photo-1596854675667-b1716ee49130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 9,
      imageUrl:
        'https://images.unsplash.com/photo-1555268588-d900f7c4f81f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1549297161-14f79605a74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 11,
      imageUrl:
        'https://images.unsplash.com/photo-1610140634959-9b6bf1bb4449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1611507929429-5dd6b895bf3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 13,
      imageUrl:
        'https://images.unsplash.com/photo-1536783006430-a4134d1c4748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 14,
      imageUrl:
        'https://images.unsplash.com/photo-1561297108-98ab65d92bd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 15,
      imageUrl:
        'https://images.unsplash.com/photo-1603898173303-28a6006fefd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 16,
      imageUrl:
        'https://images.unsplash.com/photo-1608096275263-1667980c4dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 17,
      imageUrl:
        'https://images.unsplash.com/photo-1534347772883-c3c228d654e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 18,
      imageUrl:
        'https://images.unsplash.com/photo-1511028897949-27b3f9f7924d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 19,
      imageUrl:
        'https://images.unsplash.com/photo-1587062893779-3baf370e4f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 20,
      imageUrl:
        'https://images.unsplash.com/photo-1616421382754-a08772dd3c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGRvZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 21,
      imageUrl:
        'https://images.unsplash.com/photo-1586450041414-fa23c23dd411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 22,
      imageUrl:
        'https://images.unsplash.com/photo-1616853107502-fdc7e65fc920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 23,
      imageUrl:
        'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 24,
      imageUrl:
        'https://images.unsplash.com/photo-1649923625228-3d2c89437a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 25,
      imageUrl:
        'https://images.unsplash.com/photo-1602374057897-44b0bba8c93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 26,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1692604333797-74c90b7e1d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 27,
      imageUrl:
        'https://images.unsplash.com/photo-1636402421959-0de69ea7e9d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 28,
      imageUrl:
        'https://images.unsplash.com/photo-1584281149695-5cc9d049c2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 29,
      imageUrl:
        'https://images.unsplash.com/photo-1650453208463-0f793aaf67a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc0fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
    {
      id: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1650454033314-3dfd69ec8f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA4fHxkb2clMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      brandName: '킁킁킁',
      foodName: '맛난 사료',
    },
  ],
});

export { getPetFoodsFixture };
