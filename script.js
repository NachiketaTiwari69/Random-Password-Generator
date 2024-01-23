const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()<>?:/"

const copyField = document.querySelector(".copy-field");
const copyButton = document.querySelector(".copy-button");
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("totalchar")
const upperInput = document.getElementById("UpperCasechar")
const lowerInput = document.getElementById("LowerCasechar")
const numberInput = document.getElementById("Numberchar")
const symbolInput = document.getElementById("Symbolchar")

const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}


const getrandompassword = (password = "") => {
    if (upperInput.checked) {
        password += getrandomdata(upperCaseSet);
    }
    if (lowerInput.checked) {
        password += getrandomdata(lowerCaseSet);
    }
    if (numberInput.checked) {
        password += getrandomdata(numberSet);
    }
    if (symbolInput.checked) {
        password += getrandomdata(symbolSet);
    }
    if (password.length < totalChar.value) {
        return getrandompassword(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);
    passBox.style.color = "#181818";
    passBox.style.backgroundColor = "#dbffc2";
    passBox.style.fontSize = "20px";
}

document.getElementById("btn").addEventListener("click",
    function () {
        getrandompassword();
    }
)

document.getElementById("btn").addEventListener("click", function () {
    if (!upperInput.checked && !lowerInput.checked && !numberInput.checked && !symbolInput.checked) {
        alert("Please select at least one option.");
    } else {
        getrandompassword();
    }
});



function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

