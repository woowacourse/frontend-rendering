import { Suspense } from 'react';
import TripsHeader from '@/components/TripsHeader/TripsHeader';
import TripItemList from '@/components/TripItemList/TripItemList';
import TripItemListEmpty from '@/components/TripItemList/TripItemListEmpty';

export default function Home() {
  const sortedTrips = [
    {
      id: 1,
      title: '런던 여행',
      imageUrl:
        'https://res.klook.com/image/upload/Mobile/City/n9sn4fajwa1skldmdeex.jpg',
      cities: [
        {
          id: 1,
          name: '런던',
          latitude: 51.509865,
          longitude: -0.118092,
        },
        {
          id: 2,
          name: '애든버러',
          latitude: 55.953251,
          longitude: -3.188267,
        },
      ],
      startDate: '2023-06-13',
      endDate: '2023-06-20',
      description:
        '어쩌구 저쩌구 좌충우돌 라곤의 런던 여행기 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 하하하',
    },
  ];
  return (
    <>
      <TripsHeader />
      <Suspense fallback={<div>loading...</div>}>
        {sortedTrips.length > 0 ? (
          <TripItemList trips={sortedTrips} />
        ) : (
          <TripItemListEmpty />
        )}
      </Suspense>
    </>
  );
}
