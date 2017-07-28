
var firstNum = "";
var secondNum = "";
var className;
var equation = "";
var equSet = false;

var inputBox = document.querySelector('input');

// Add event listeners to the number 1-9
for (var i = 1; i <= 9; i++) {
	className = 'num' + i;
    document.getElementById(className).addEventListener('click', numClick, false);
}


// Add event listeners to symbols + - * /
for(var i = 0; i <= 3; i++) {
	var idNames = ["add", "sub", "mul", "div"];
	var idName = idNames[i];
	document.getElementById(idName).addEventListener('click', equClick, false); 
}

// Add event listener to the equals button and the C button

document.getElementById('equal').addEventListener('click', equalEvent, false);
document.getElementById('C').addEventListener('click', clearEvent, false);

function numClick() {
	if(equSet == false) {
		firstNum += this.value;
		inputBox.value = firstNum;
		test();
	} else {
			secondNum += this.value;
			inputBox.value = secondNum;
			test();
	}
}

function equClick() {

		if(equSet == false) {
			equation = this.value;
			equSet = true;
			test();
		} else {

			if(isNotValid()) {
				console.log(isNaN(parseInt(firstNum)) + " " + isNaN(parseInt(secondNum)));
				equation = this.value;
				test();

			} else {
				inputBox.value = calculate();
				equation = this.value;
				test();
			}
		}
	
}

function calculate() {
	var result;


			switch(equation) {
				case "+":
				result = parseInt(firstNum) + parseInt(secondNum);
				break;
				case "-":
				result = parseInt(firstNum) - parseInt(secondNum);
				break;
				case "*":
				result = parseInt(firstNum) * parseInt(secondNum);
				break;
				case "/":
				result = parseInt(firstNum) / parseInt(secondNum);
				break;
				default:
				console.log('you failed buddy');
			}

	firstNum = result;
	secondNum = "";
	
	return result;
}

function equalEvent() {

	if(firstNum == "") {
		secondNum = "";
		equation = "";
		equSet = false;
		inputBox.value = "";

	} else if (secondNum == "") {
		firstNum = "";
		equation = "";
		equSet = false;
	} else {
		inputBox.value = calculate();
	
	}
}

function clearEvent() {
	firstNum = "";
	secondNum = "";
	equation = "";
	equSet = "";
	inputBox.value = "";
}

function isNotValid() {
	var isValid = isNaN(parseInt(firstNum)) || isNaN(parseInt(secondNum));
	return isValid;
}


function test() {
	console.log("First Number: " + firstNum);
	console.log("Second Number: " + secondNum);
	console.log("Equation: " + equation);
	console.log("equSet: " + equSet);
	console.log("===================================");
}
