function factorize(num)
{
    if (num <= 1) {
    return 1;
  } else {
    return num * factorize(num - 1);
  }
}
console.log(factorize(5));