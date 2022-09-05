//сложность алгоритма — O(n)
const array = [1, 4, 5, 8, 7, 9, 2, 11];

function linearSearch(arr, item) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return console.log(`позиция ${i}, кол-во итераций ${count}`);
    }
  }
  return console.log(null);
}

linearSearch(array, 5);

linearSearch(array, 11);
