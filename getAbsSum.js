function getAbsSum(arr) {
    const reducer = (acc, currVal) => {
      return acc + currVal;
    };
  
    return Math.abs(arr.reduce(reducer));
  }
  console.log(getAbsSum([-1,-2,-3,-4,-5,-6]));
  
  