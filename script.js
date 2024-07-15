function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useLetters = document.getElementById("letters").checked;
    const useDigits = document.getElementById("digits").checked;
    const useSymbols = document.getElementById("symbols").checked;
    
    if (!useLetters && !useDigits && !useSymbols) {
        alert("Please select at least one character type");
        return;
    }
    
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()";
    
    let charset = "";
    if (useLetters) charset += letters;
    if (useDigits) charset += digits;
    if (useSymbols) charset += symbols;
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    document.getElementById("passwordDisplay").innerText = password;
}

function copyToClipboard() {
    const password = document.getElementById("passwordDisplay").innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard");
    }, (err) => {
        console.error("Could not copy text: ", err);
    });
}
