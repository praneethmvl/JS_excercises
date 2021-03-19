function MultiplyByLength(arr) {
    let len = arr.length;
    for (i = 0; i < len; i++) {
      arr[i] = arr[i] * len;
    }
    return arr;
  }
  console.log(MultiplyByLength([1,2,3,4,5,6,7]));
  