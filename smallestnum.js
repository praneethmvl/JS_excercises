function smallestnum(arr)
{
    
    return Math.min(...arr); //... is the spread function, It takes in an iterable (e.g an array) and expands it into individual elements.
}
arr1=[-10,2,78,-5,0];
console.log(smallestnum(arr1));