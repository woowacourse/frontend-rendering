export const getCities = async () => {
  const res = await fetch('');
  console.log(res);
  if (!res.ok) {
    throw new Error('요청에 실패했습니다.');
  }

  return res.json();
};
