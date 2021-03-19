function doubleChar(str) {
    let x = str.split("");
    return x.map(x => x.repeat(2)).join("");
  }
  console.log(doubleChar("My name is Praneeth"));
  