export const getRandomXToY = (x, y) => {
  if (x < 0 || y < 0) {
    throw new Error ('Arguments must not be negative!');
  }

  return Math.floor(Math.random() * (y - x + 1) + x);
};

export const getRandom = (arr) => {
  if (Array.isArray(arr) === false) {
    throw new Error ('Argument must be an array!');
  }

  if (arr.length === 0) { return; }
  if (arr.length === 1) { return arr[0]; }

    return arr[Math.floor(Math.random() * arr.length)];
};

export const shuffleArray = (arr) => {
  if (Array.isArray(arr) === false) {
    throw new Error ('Argument must be an array!');
  }

  if (arr.length === 0) {
    throw new Error ('Array must not be empty!');
  }

  if (arr.length === 1) { return arr; }

  let currentIdx = arr.length, temp, randomIdx;

  while (0 !== currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    temp = arr[currentIdx];
    arr[currentIdx] = arr[randomIdx];
    arr[randomIdx] = temp;
  }

  return arr;
};

export const getNRandom = (n, arr) => shuffleArray(arr).slice(0, n);
