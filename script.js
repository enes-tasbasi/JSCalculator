
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

function numClick() {
	if(equSet == false) {
		firstNum += this.value;
		inputBox.value = firstNum;
	} else {
			secondNum += this.value;
			inputBox.value = secondNum;
	}
}

function equClick() {
	if(equSet == false) {
		equation = this.value;
		equSet = true;
		inputBox.value = "";
	} else {
		inputBox.value = calculate();
		equation = this.value;
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



