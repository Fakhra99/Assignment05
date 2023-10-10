const output = document.querySelector(".output");
const _exp = document.querySelector(".exp");


const a = eval(2 + 2);
console.log(a);

console.log(Math.sqrt(49));

let exp = "";

function makeExp(i) {
    console.log(exp[exp.length - 1]);
    if(exp.length<10)

    if 
    ((exp[exp.length - 1] !== '.' || i !== ".") && 
    (exp[exp.length - 1] !== '+' || i !== "+")  &&
    (exp[exp.length - 1] !== '-' || i !== "-")  &&
    (exp[exp.length - 1] !== '*' || i !== "*")  &&
    (exp[exp.length - 1] !== '/' || i !== "/")
    // (exp[exp.length - 1] !== '' || i !== "+")
    ) {
        exp = exp + i;
        // console.log("exp", exp);
        _exp.textContent = exp;
    }
}

function calculate() {
    const result = eval(exp);
    output.textContent = result;
}

function clearAll() {
    output.textContent = "_";
    _exp.textContent = "0";
    exp = "";
}

function calculateSqRoot() {
    const result = Math.sqrt(exp);
    output.textContent = result;
}

function percentAge() {
    const result = (eval(exp) / 100);
    output.textContent = result;
}

function removeExp() {
    exp=exp.slice(0,-1);
    _exp.textContent=exp;

    if (exp === ""){
        _exp.textContent="0";
    }
}