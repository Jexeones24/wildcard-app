export const range = (lo, hi) => {
  if (typeof lo !== 'number' || typeof hi !=='number') {
    throw new Error ('Arguments must be numbers!');
  }

  if (lo === 0 && hi === 0) { return 0; }

  const list = [];

  for (let i = lo; i <= hi; i++) {
    list.push(i);
  }

  return list;
};

export const getStepRange = (lo, hi, step) => {
  const range = [lo];

  while (range[range.length - 1] < hi) {
    const nextVal = range[range.length - 1] + step;
    range.push(nextVal);
  }

  return range;
};
