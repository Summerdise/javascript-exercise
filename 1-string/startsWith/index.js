export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const afterFilter = collection.filter(str => str.startsWith('粤'));
  return afterFilter.length;
}
