export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const copy = { serialNumber: '12345' };
  const copy2 = {
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  return Object.assign(copy, source, copy2);
}
