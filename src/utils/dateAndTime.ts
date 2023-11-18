export const formatReadTime = (timeInMs: number | undefined): string => {
  if (!timeInMs) return '1 min';
  const timeInMinutes = Math.ceil(timeInMs / 60000);
  return `${timeInMinutes} min`;
};
