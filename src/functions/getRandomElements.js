export function getRandomElements(array, count) {
  const sortedArray = [...array].sort(() => 0.5 - Math.random());
  return sortedArray.slice(0, count);
}
