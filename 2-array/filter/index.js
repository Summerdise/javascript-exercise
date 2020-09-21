function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(num => {
    return num % 3 === 0;
  });
}

function chooseNoRepeatNumber(collection) {
  const temp = new Set();
  collection.forEach(element => {
    temp.add(element);
  });
  const result = [];
  temp.forEach(element => {
    result.push(element);
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
