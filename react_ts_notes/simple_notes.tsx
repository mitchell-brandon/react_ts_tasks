
///     Defining simple variable types     ///
let string: string;
let number: number;
let boolean: boolean;
let stringArray: string[]; // array of strings
let numbArray: number[]; // array of numbers
let tuple: [number, string];// tuple is an array of strings and numbers

//if we want a variable to be both a string and a number
// we have to define the variable using a Union
let stringNumber: string | number; // example of a Union

//sometimes we may use type "any" if we want to use any type of value
// "any" is highly not recommended to use as it is not secure
let any: any;

// if we do not know what the data type will be, we can use "unkown"
// "unkown is recommended over type "any"
let unknown: unknown;


///     Defining an Object    ///
// in order to define an object in TS, we should
// use a "Type" or an "Interface" //
// "Type" example
type Person = { // always name a Type with Cap letter
    name: string;
    age?: number; // ? means the type property is iptional-- it wont throw a type error if left blank in object
}
//now that our "Type" is defined lets instantiate an object as the " PersonType"
let person: Person ={
    name: "mitch",
    age:31, // be sure to see ? above in the defined "Type"
}; //BOOM! this is an object where the types were defined in the Person "Type"

// Interfaces //
// interfaces do the same jobs as "types". The difference is that Interfaces area more easily mutable than "types".
//most people just uses Interfaces
interface Individual{
    name: string;
    age?: number;
}
//we can also extend an interface to another interface. this is helpful when another interface takes the same values as
//aonther interface.
interface AnotherIndividual extends Individual{ //interface extended Individual
    profession: string;

}
//we can also exten "types" to other "types" and "types" to "interfaces" and vis versa
type Dog ={
    name: string;
    age?:number;
}

type NeighborsDog = Dog &{ //interface extended Dog
    adress: string;
    hasFence: boolean;
}
// we can alos mix match interface and type extensions

interface MomsDog extends Dog{ // interface extending a type
    goodBoy: boolean;
}
type DadsDog = MomsDog &{
    dogGetAlong: boolean;

}



///    Defining Functions in TS    ///
let exampleFunction: Function; // defining a function

// this is how you define a function argument in TS
function printName(name:string){ // notice the defined argument
    console.log("happy birthday", name)
}

// when a function does not return anything, we use the void syntax
let noReturnValue: (name: string, age:number) => void;
//if we don"t know whether or not a function will return anything; we use "never"
let unknownReturn: () => never;
// the difference between "void" and "never" is that void returns, "undefined"
// and "never" doesnt return anything
// when a function returns a value, we do this
let returnValueFunction: (name: string) => string;