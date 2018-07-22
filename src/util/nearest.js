export const toNearestFive = (n) => {
  const result = 5 * Math.ceil(n / 5);
  if (result === 0) { return 5; }

  return result;
};

export const toNearestTwo = (n) => {
  const result = 2 * Math.ceil(n / 2);
  if (result === 0) { return 2; }

  return result;
};

export const toNearestTen = (n) => {
  const result = 10 * Math.ceil(n / 10);
  if (result === 0) {
    return 10;
  }

  return result;
}
