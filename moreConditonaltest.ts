// equality  and inequality test
console.log('Equality test with string: ', 'Apple'=== 'Apple');


// equality  and inequality test
console.log('Equality test with string: ', ('Apple' as string)!= 'Orange');

//  test lower case funtion
console.log('Lower Case function test: ', 'HELLO'.toLowerCase() === 'hello');

// numerical tests involving equality and inequality 
console.log("Equality test with string: ", 26 ===26);

// greater than less then

console.log("Greater than test ", 10>5);
console.log("Less than test: ", 10<5);

// greater than and equal to 
console.log("Greater than and equal to test: ", 10<=10);

// less than and equal to 


console.log("Less than and equal to test: ", 10<=4);

// Numerical inequality test
console.log('Inquality numerical test: ', ( 10 as number) !=5);


// test using AND and OR operator 

console.log('And operator test ', 5 === 5 && 10 > 5);

// test using  OR operator 

console.log('OR operator test ', 5 === 5 || 10 > 15);

// test whether an array or not 
const fruits :string[] = ['apple', 'orange', 'banana'];
console.log('test Naspati is not in the array ', !fruits.includes('Naspati'));

// test whether an array or not 
//const fruits :string[] = ['apple', 'orange', 'banana'];
console.log('test apple is  in the array ', fruits.includes('apple'));
