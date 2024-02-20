const createProgression = (start, step, length) => {
  const array = [start];
  for (let i = 1; i < length; i += 1) {
    const nextNumb = array[i - 1] + step;
    array.push(nextNumb);
  }
  return array.join(' ');
};

export default createProgression;
