function numbersOnly(arr) {
    return arr.filter(arr => typeof arr == "number");
  }
  arr1=[23,"hello",67,"abcd"];
 console.log(numbersOnly(arr1));