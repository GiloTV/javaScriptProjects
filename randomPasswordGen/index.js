//Random Password Generator

function randomPassword(){
    const length = document.getElementById("passwordLength").value;
    const randomPwd = document.getElementById("passwordContainer");
    const includeUpper = document.getElementById("upperCase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowerCase = "abcdefghijklmnñopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!#$%&/(){}|°";

    let allowedChars = "";
    let password = "";

    allowedChars += lowerCase;
    includeUpper ? allowedChars += upperCase : "";
    includeNumbers ? allowedChars += numbers : "";
    includeSymbols ? allowedChars += symbols : "";
    

    console.log(allowedChars)

    for(let i = 0; i < length; i++){
        const value = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[value];
        
    }

    randomPwd.textContent = `Your Password is = ${password}`;
    
}


