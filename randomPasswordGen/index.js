const pwd = "";

function randomPassword(){
    const length = document.getElementById("numberOfDice").value;
    const randomPwd = document.getElementById("passwordContainer");

    let password = "";
    for(let i = 0; i < length; i++){
        const value = Math.floor(Math.random() * 26) + 97;
        const text = String.fromCharCode(value);
        password += text;
        
    }
    randomPwd.textContent = `Your Password is = ${password}`
}