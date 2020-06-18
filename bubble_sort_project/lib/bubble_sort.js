function swap(array, idx1, idx2) {
  let temp = array[idx1]; // save a copy of the first ele
  array[idx1] = array[idx2]; // overwrite the first ele with the second ele
  array[idx2] = temp; // overwrite the second ele with the first ele copy
  return array; 
}

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }

  return array;
}

module.exports = {
  bubbleSort,
  swap,
};
