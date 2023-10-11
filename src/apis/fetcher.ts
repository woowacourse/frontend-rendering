const { BASE_URL } = process.env;
// const END_POINT = BASE_URL + "/api";

// const fetcher = (endpoint: string) => {
//   return <T>(url: string, options?: RequestInit): Promise<T> => {
//     return fetch(endpoint + url, { ...options })
//       .then((res) => {
//         if (res.ok) return res.json();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

// export const getRoadmapInfo = async () => {
//     try {
//       const { roadmapInfo } = await ckFetcher<any>('roadmapInfo.json');

//       return roadmapInfo;
//     } catch (e) {
//       throw new Error('사료 목록을 받아오는 데에 실패했습니다.');
//     }
//   };

// export const ckFetcher = fetcher(END_POINT);

export const fetchData = (url: string, options?: RequestInit) => {
  const data = fetch(`${BASE_URL}/${url}`)
    .then((response) => {
      //   if (!response.ok) {
      //     throw Error("fail to load");
      //   }
      console.log(response);

      return response.json;
    })
    .catch((err) => console.log(err));

  return data;
};

export const getRoadmapInfo = () => {
  fetchData("roadmapInfo.json");
};
