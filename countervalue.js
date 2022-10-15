let countValueElement = document.getElementById("countValue");

function increaseButton() {
    let parseIntVale = countValueElement.textContent;
    let updated_value = parseInt(parseIntVale) + 1;
    if (updated_value > 0) {
        countValueElement.style.color = "green";
    } else if (updated_value < 0) {
        countValueElement.style.color = "red";
    } else {
        countValueElement.style.color = "black";
    }
    countValueElement.textContent = updated_value;
}

function decreaseButton() {
    let parseIntVale = countValueElement.textContent;
    let updated_value = parseInt(parseIntVale) - 1;
    if (updated_value > 0) {
        countValueElement.style.color = "green";
    } else if (updated_value < 0) {
        countValueElement.style.color = "red";
    } else {
        countValueElement.style.color = "black";
    }
    countValueElement.textContent = updated_value;
}

function resetButton() {
    let countValue = 0;
    countValueElement.textContent = countValue;
    countValueElement.style.color = "black";
}