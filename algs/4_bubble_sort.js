//сложность алгоритма — O(n²)
const arr = [
  0, 3, 2, 5, 6, 8, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2,
  1, 2, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,
];

function bubbleSort(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return console.log(`сортировка массива [${array}] за ${count} итераций`);
}

console.log('length', arr.length);
bubbleSort(arr);
