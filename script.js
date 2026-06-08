const screen = document.querySelector(".screen");

const AC = document.querySelector("#AC");
const del = document.querySelector("#del");
const per = document.querySelector("#per");
const div = document.querySelector("#div");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#addition");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

one.onclick = () => display(1);
two.onclick = () => display(2);
three.onclick = () => display(3);
four.onclick = () => display(4);
five.onclick = () => display(5);
six.onclick = () => display(6);
seven.onclick = () => display(7);
eight.onclick = () => display(8);
nine.onclick = () => display(9);
zero.onclick = () => display(0);

per.onclick = () => display('%');
div.onclick = () => display('/');
multiply.onclick = () => display('*');
subtract.onclick = () => display('-');
add.onclick = () => display('+');
dot.onclick = () => display('.');
AC.onclick = () => display("AC");

equal.onclick = () => calculate();
del.onclick = () => deleteChar();

function display(character)
{
    if(character == "AC")
    {
        screen.innerText = "0000";
    }
    else if(screen.innerText === "0000")
    {
        screen.innerText = character;
    }
    else
    {
        screen.innerText += character;
    }
}

function calculate() 
{
    try 
    {
        let expression = screen.innerText;
        expression = expression.replace(/(\d+)%/g, "($1*0.01)");
        let result = eval(expression);
        screen.innerText = result;
    } 
    catch (error) 
    {
        screen.innerText = "Error";
    }
}


function deleteChar() 
{
    if (screen.innerText.length > 1) 
    {
        screen.innerText = screen.innerText.slice(0, -1);
    } 
    else 
    {
        screen.innerText = "0000";
    }
}