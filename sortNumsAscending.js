function sortNumsAscending(arr = []) {

  if(arr.length<=0)
    console.log("invalid");
    let sorter = (a, b) => {
      return a - b;
    };
  
    if (arr == []) {
      return [];
    } else if (arr == null) {
      return [];
    } else {
      return arr.sort(sorter);
    }
  }
  arr1=[3,5,12,1,0,9,-1];
  console.log(sortNumsAscending(arr1));