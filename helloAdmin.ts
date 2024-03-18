// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code that will print a greeting to each user 
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting,
//  such as Hello admin, would you like to see a status report?
let helloAdmin: string[] = ['admin','user1', 'user2','user3'];
for(let i = 0; i < helloAdmin.length; i++){

if(helloAdmin[i] === 'admin' ){
    console.log('Hello admin, would you like to see a status report?');
}
    else{
        console.log( 'Hello ${helloAdmin[i]}, thank you for logging in again.');
    }
    
}
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.