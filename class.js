module.exports=class people  //to export class into another class or file
{
    age =25
    get location()
    {
        return "canada"
    }
    //constructor is method which by default executes when you create object of the class
    constructor(firstname,lastname)
    {
        //instance variable define inside constructor
        this.firstname=firstname
        this.lastname=lastname
    }
    //method
    fullname()
    {
        console.log(this.firstname+this.lastname)
    }

    
}
// let People =new people("Isha","Shukla")
// let People1 =new people("Siya","Raichand")
// console.log(People.age)
// console.log(People.location)
// People.fullname()
// People1.fullname()