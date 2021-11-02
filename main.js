const errMsg = "Error";

function appendNum(Num) {
    let onScreen = document.getElementById("result").innerHTML;
    if (onScreen == 0 || onScreen == errMsg) {
        document.getElementById("result").innerHTML = Num;
    }
    else {
        document.getElementById("result").innerHTML += Num;
    }
}

function removeLast() {
    let result = document.getElementById("result").innerHTML;
    newResult = result.slice(0, -1)
    if (newResult.length == 0) {
        document.getElementById("result").innerHTML = 0;
    }
    else {
        document.getElementById("result").innerHTML = newResult;
    }
}

function equal() {
    let operation = document.getElementById("result").innerHTML;

    try {
        document.getElementById("result").innerHTML = eval(operation);
        console.log(operation);
    }
    catch (err) {
        document.getElementById("result").innerHTML = errMsg;
    }

}