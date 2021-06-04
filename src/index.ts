function sum(a:number, b:number):number{
    return a + b
}


console.log(sum(3, 5))

// The code bellow will not work due to type errors:
// console.log(sum("3", 5))

interface IPerson{
    firstName: string
    lastName: string
    age: number
    height?: number
    weight?: number
}

function sayHi(person:IPerson){
    console.log(`Hi there, my name is ${person.firstName} and I am ${person.age} years old!`)
}

// TODO: fix the code bellow
sayHi({
    firstName: "John",
    age: 23
})