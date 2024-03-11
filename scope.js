//var=global level/funstion level  , redeclare allowed , reinitialize allowed
//let=global level/block level({}), redeclare not allowed , reinitialize allowed
//const=global level/block level({}) , redeclare not allowed , reinitialize not allowed


const greet ="morning"
//greet="night"  //it will not change as name suggest it is constant
if(1==1)
{
    let greet ="hi" // it will not print because it's scope is only till braces
}

function scope(a,b)
{
    let greet="hola" 
    return a+b
}

let sum=scope(2,3)
console.log(greet)