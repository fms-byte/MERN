//export keyword exports the data to other files

export let a = 45;
export let str = "Bohubrihi";
export let obj = {
    name: "Farhan",
    age: 23
}

export let arr = [1,2,3,4];

export let hello = () => {
    console.log("Hello!");
}

export class Person {
    constructor(){
        this.name = "Farhan",
        this.age = 23
    }
}