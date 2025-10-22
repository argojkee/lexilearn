export const getPercentage = (total, value) => {
  if (!total || !value) return 0;
  const result = Math.round((value / total) * 100);

  return result > 100 ? 100 : result;
};
