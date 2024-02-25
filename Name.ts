let personName :string = '';
personName = prompt('What is your name?')||'';
let lowercase :string =personName.toLowerCase();
let UPPERCASE :string =personName.toUpperCase();

let Titlecase :string =personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(personName !== null && personName !!==''){
alert(`Hello ${personName}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${UPPERCASE}
TitleCase: ${Titlecase}`)


}
else{
    alert(`Please fill you name !`)
}