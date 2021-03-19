function evenOnly(arr) {
    let result = arr.filter(arr => arr % 2 == 0);
    return result;
  }
  arr1=[1,2,3,4,5,6,7];
  console.log(evenOnly(arr1));