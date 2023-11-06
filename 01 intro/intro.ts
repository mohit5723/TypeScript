//  #1 introduction to variables and typesaftey
//  #2 any keyword



console.log("hello world")

let greetings: string = "hello";

console.log(greetings);

//! numbers

let userId: number = 344; // it is obv that we are writing a number under userid so we will not overuse ts insteaad we can just
let userNo = 233; // ts automatically detects it aas number and so we are no more worried about typesafety

// what is diff b/w ts and js now? we will use :number when it is req only, now ts dosnt lwt us use to store any other data type under same variable
// userNo="hi" error

//! boolean

let isLoggedIn: boolean = true;


// !any

let hero;

function getHero(){
    return "thor"
}

hero = getHero; // hover above hero and you can see :any meaning anything can be defined in it , now use the typesaftey here 

// ---------------------------------------------

let hero2:string;

function yesHero(){
    return "mohit"
}

hero2 = yesHero(); 


export {} // to temporary avoid the error 