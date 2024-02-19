const { reverse } = require("dns")

var marks = Array(6) //declaration of array
var marks = new Array(10,20,30,40,50,60) //intilization of array

var marks=[10,20,30,40,50,60] //another way of declaring and iintilizing array

subMarks=marks.slice(2,5) //this will divide the array in giving index order as index 2 will be starting 
console.log(subMarks) // and index 5 the process will stop before index 4
console.log(marks[2]) // it will give number which is in second position

marks[3]=70 // it will add number 70 in 3 position & it will increase the size of array also
console.log(marks) 

console.log(marks.length) // it will give length of the arrays

marks.push(80)  //to add number in array and it will always be added at last in array
console.log(marks)

marks.pop() //it will delete the last number from array
console.log(marks)

marks.unshift(90) //it will add number in starting of the array
console.log(marks)

console.log(marks.indexOf(30)) //it will give indexof number 30

console.log(marks.includes(55)) //it will let us know if the number is present or not will give boolean output

var sum=0;
for(let i=0;i<marks.length;i++)
{
   // console.log(i)
   sum=sum + marks[i] // getting the sum of numbers in array

}
console.log(sum)

//reduce the code using this filter map
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
var Scores=[12,13,14,16]
//make new array from this Scores
var evenScore=[]
for(let i=0;i<Scores.length;i++)
{
    if(Scores[i]%2==0)
    {
        evenScore.push(Scores[i]) 
    }

}
console.log(evenScore)
let newFilterEvenScore=Scores.filter(Scores=>Scores%2==0) //easiset way for resolving the above situation
console.log(newFilterEvenScore)

//map
let mappedArray=newFilterEvenScore.map(newFilterEvenScore=>newFilterEvenScore*3)
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

var secondScore=[12,13,14,16]
let sumValues=secondScore.filter(secondScore=>secondScore%2==0).map(secondScore=>secondScore*3).reduce((sum,val)=>sum+val,0)
console.log(sumValues)

let fruits=["banana","mango","pomogrnate","apple"]
console.log(fruits.sort())  //sorting alphabetical order
//console.log(fruits)
console.log(fruits.reverse()) //arranging in reverse order

var numerical=[12,9,34,66,11,4]
console.log(numerical.sort())
numerical.sort(function(a,b)
{
    return a-b
})
console.log(numerical.sort((a,b)=>a-b))
