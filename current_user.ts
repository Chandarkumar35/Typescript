let current_user: string[] = ['Om', 'Shanti', 'ekownkar', 'satguru', 'Parsad'];
let new_user: string[] = ['om', 'Shanti', 'Pirbhu', 'satguru', 'Prem'];
new_user.forEach(newuser = > {
    let lowerCase: string = newuser.toLowerCase();
    if(current_user.map(cuser = > cuser.toLowerCase().includes(lowerCase))){
        console.log('user name is availalbe');

    }
    else{
        console.log('user name is not a')
    }
})