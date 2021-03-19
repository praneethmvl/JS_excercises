function minmax(arr)
{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const len = arr.length;

    const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len; //??
    const average = ave(arr);

  //Return output
    return [min, max, len, average];
}
arr1=[1,2,3,4,5,6,7,8,9];
console.log(minmax(arr1));
