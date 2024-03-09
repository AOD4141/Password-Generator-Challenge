



//creating a password generator function

var passwordresult = document.getElementById("passwordresult");

var passwordGenerator = () => {
    var passwordLength = 8;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";

    for (var i= 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random()* charset.length);
    password += charset.substring(randomNumber, randomNumber +1);
    }
   
    document.getElementById("passwordresult").value = password;
}

console.log(passwordGenerator())