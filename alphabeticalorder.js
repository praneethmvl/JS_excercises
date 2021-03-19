function alphabeticalorder(str)
{
    return str.split("").sort().join("");
}
 str1="My name is Praneeth";
str1=str1.toLowerCase();
console.log(alphabeticalorder(str1));
