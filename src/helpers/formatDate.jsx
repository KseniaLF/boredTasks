export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - date.getTime();
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);

  if (secondsDiff < 60) {
    return "recently";
  } else if (minutesDiff < 60) {
    return `${minutesDiff} minutes ago`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff} hours ago`;
  } else if (daysDiff === 1) {
    return "yesterday";
  } else if (daysDiff === 0) {
    return "today";
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
};
