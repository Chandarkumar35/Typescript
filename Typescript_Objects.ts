// write program to create objects containing items
//data type of person object 
interface person {
    age : number,
    name : string,
    Nationality : string,
    student : boolean
}

//person object
let person :person = {
    age: 26,
    name: 'chandar',
    Nationality : 'Pakistan',
    student : true

}
//print person
console.log(person);

// data type of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean
}
// car object
let car :car = {
maker : 'toyota',
color : 'black',
automatic : true


}
console.log(car);
