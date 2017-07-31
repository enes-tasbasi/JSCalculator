
	var firstNum = "",
		 secondNum = "",
		 equation = "",
		 equSet = false,
		 inputBox = $('.container > input');

	$("button[id*='num'").on('click', numClick);

	$('#add, #sub, #mul, #div').on('click', equClick);

	$('#equal').on('click', equalEvent);

	$('#C').on('click', clearEvent);

	function numClick() {
		if(equSet == false) {
			firstNum += $(this).attr('value');
			inputBox.val(firstNum);
		} else {
			secondNum += $(this).attr('value');
			inputBox.val(secondNum);
		}
	}

	function equClick() {

			if(equSet == false) {
				equation = $(this).attr('value');
				equSet = true;
				
			} else {

				if(isNotValid()) {
					equation = $(this).attr('value');

				} else {
					inputBox.value = calculate();
					equation = $(this).attr('value');
					
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
			inputBox.val("");

		} else if (secondNum == "") {
			firstNum = "";
			equation = "";
			equSet = false;
		} else {
			inputBox.val(calculate);
		
		}
	}

	function clearEvent() {
		firstNum = "";
		secondNum = "";
		equation = "";
		equSet = "";
		inputBox.val("");
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
