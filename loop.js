const { truncate } = require("fs")

const a=true
if(!a) 
{
    console.log("condition true")
}
else
{
    console.log(a)
    console.log("condition false")
}
/* in above if condition we assign the value with true and datatype as const so after declaring as const 
we cannot change the value throughout program but we can use negetation operator that is ! as we used in 
second line to convert its value as false  but this will not change the value of boolean variable as 8 line
it will print true bcoz we assign with true only*/
let i=0
while(i>10)
{
i++
console.log(i)
}
let j=0
do
{
j++
}while(j>10);
console.log(i)

for(let k=0;k<=10;k++)
{
console.log(k)
}

let required=true
while(required)
{
console.log(required)
required=false
}

//2 and 5
//multiple of 2 and 5 from 1 to 100
console.log("*****************")
let n=0;
for(let e=1;e<=100;e++)
{
if(e%2==0 && e%5==0)  //or operator ||
 {
    n++
    console.log(e)
    if(n==3)
    break
 }
}