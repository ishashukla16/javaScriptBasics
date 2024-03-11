const people=require('./class')   //to import the class 
let day='tuesday '
console.log(day.length)

let subDay=day.slice(0,4)
console.log(subDay)

console.log(day[2])

let spiltDay=day.split("s")
console.log(spiltDay[0])
console.log(spiltDay[1])

console.log(spiltDay[1].length)
console.log(spiltDay[1].trim().length)

let date="23"
let nextDate="27"
let diff=parseInt(nextDate)-parseInt(date)
console.log(diff)
diff.toString()

let newQuote=day+"is funday"
console.log(newQuote)
let val=newQuote.indexOf("day")
console.log(val)

let count=0
let value=newQuote.indexOf("day") 
while(value!==-1)
{
    count++
    value=newQuote.indexOf("day",value+1)
}
console.log(count)

//creating object of those which are avialble in exporting class
let People =new people("Isha","Shukla")
People.fullname()