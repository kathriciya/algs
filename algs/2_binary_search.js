//сложность алгоритма — O(log2n)
// работает только для отсортированных данных
//16 элементов - 4 максимальное кол-во итераций
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, item) {
  let count = 0;
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return console.log(`искомое ${position}, кол-во итераций ${count}`);
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

binarySearch(array, 8);

binarySearch(array, 4);

binarySearch(array, 5);

binarySearch(array, 11);
