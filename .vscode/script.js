








let passwordGenerator = () => {
    // setting password length
    let length = 8;
    // creating character set
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    // returned values
    let retVal = "";


    // Looping over the character set and choosing pwd
    for(let i = 0; i < length; i++){
        n < charSet.length;

        retVal += charSet.charAt(Math.floor(Math.random() * n))

    }

    // returning the pwd generated
    return retVal
}













// //creating a password generator function
 
// function passwordGenerator  (length)  {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password = '';

// for (let i= 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random()* charset.length);
    
//     password += charset[randomIndex];
 
// }
// return password;

// }

// function updatePassword () {
//     const passwordLength = 8;
//     const password = generatePassword(passwordLength);
//     document.getElementById('password').textContent = password;
// }

// document.getElementById('password-btn').addEventlistener('click',updatePassword);


