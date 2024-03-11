let people=require("./class")
class pet extends people
{
    get location()
    {
        return "RedCross"
    }

    constructor(firstname,lastname)
    {
        super(firstname,lastname)
    }
}
let Pet =new pet("sam","san") 
Pet.fullname() //we don't need fullname method here as we are extending the class
console.log(Pet.location) //it is example of overriding as same name is avilable in base class but it 
                        //will give preferences to child class

