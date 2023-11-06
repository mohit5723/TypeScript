function addTwo (value: number){
    return value+2;
}

addTwo(2)

//! passing default values

function user(name:string, email:string, isPaid:boolean = false){
}

user("mohit","mohit@gamil")

//! arrow fun

const arr = (name:string,email:string):string =>{
    return ""
}
arr("mohit","mohit@gam")

//! return typesafety

function addOne (value: number):number
{
    return value+1;
}
addOne(1)


//! mapping

const heros = ["thor",'spiderman',"ironman"]
// const heros = [1,2,3]

heros.map((hero :string) => {
    return `hero is ${heros}`
})

//! consoling error void,never

function consoleError(errMsg: string):void //explicity void best practise
{
    console.log(errMsg)
}

function handleError(msg: string):never{
    throw new Error(msg); 
}



export {}