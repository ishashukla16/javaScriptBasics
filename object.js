let person=
{
    firstName : 'Isha',
    lastName : 'Shukla',
    age : 23 ,
    fullName:function()
    {
        console.log(this.firstName+this.lastName)

    }
}

console.log(person.firstName)
console.log(person['lastName'])

person.firstName='Rajesh'
console.log(person.firstName)
person.gender='female'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)
for(let key in person)
{
    console.log(person[key])

}