const passwordBox=document.getElementById("password");
const length=8;

const upperCase="ABCDEFGHIJKMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol = "!@#$%^&*()_+-{}[]~<>?";
const allChar = upperCase + lowerCase + number + symbol;

function create(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)]; 

    while(length > password.length){
    password += allChar[Math.floor(Math.random()*allChar.length)];  
    }
    passwordBox.value=password;
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}