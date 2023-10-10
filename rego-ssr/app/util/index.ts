export const formatDate = (dateString: string) => {
  const dateArray = dateString.split(':');

  const year = parseInt(dateArray[0]);
  const month = parseInt(dateArray[1]);
  const day = parseInt(dateArray[2]);

  const date = new Date(year, month, day);

  const formattedDate = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;

  return formattedDate;
};
