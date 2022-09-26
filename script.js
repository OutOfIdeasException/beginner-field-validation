function returnValue() {
	var minlen = 1;
	var maxlen = 20;
	let txt =  document.getElementById('input').value;
	let len = txt.length;
	
	if (len >= minlen && len <= maxlen) {
		/* If the length of the input value is 1 or more characters 
		long AND less than 21 characters, display user input */
		
		let output = document.getElementById('input').value;

		document.getElementById('output').innerHTML = "Value: " + output;

		/* Set guideBox to reset any potential error messages 
		when an acceptable value is added */
		
		document.getElementById("guideBox").innerHTML = "Enter a Value Between 1 and 20 Characters";
		
		console.log("Validation Success (if)", minlen, maxlen, txt, len, output, input);
	}
	
	else if (len < minlen) {
		/* If the length of the value is less than 1, do not 
		display output and return error message */
		
		document.getElementById('guideBox').innerHTML = ("You have not entered a value".fontcolor("red"));
		
		console.log("Validation Failed (else if)", minlen, maxlen, txt, len, output, input);	
		
	}
	
	else {
		/* The only remaining scenario is that the length of the value 
		exceeds 20 characters. Do not display output and return error message */
		
		document.getElementById('guideBox').innerHTML = ("You have entered more than 20 characters".fontcolor("red"));
		
		console.log("Validation Failed (else)", minlen, maxlen, txt, len, output, input);
	}
		
}
		
function clearValue() {
	/* Clear input and output values, reset error message if fired */

	let output = document.getElementById('output').innerHTML = "Value: ";
	
	document.getElementById("guideBox").innerHTML = "Enter a Value Between 1 and 20 Characters";
	
	document.getElementById('input').value = "";
	
	console.log(output, input);

}

