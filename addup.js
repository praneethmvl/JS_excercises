function addup(num)
{
    if(num<=1)
        return num;
    else
        {
            return num+addup(num-1);
        }
}

console.log(addup(8));
