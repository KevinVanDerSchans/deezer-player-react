export const formatDuration = (time) => {
  if (isNaN(time)) {
    return "00:00";
  };

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const padNumber = (number) => String(number).padStart(2, 0);

  return minutes + ":" + padNumber(seconds);
}
