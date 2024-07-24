//1.Pinting Hello World
document.getElementById("helloworld").innerHTML="Hello World!";

//2.Adding two numbers
function addNumbers() {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const result = num1 + num2;
	document.getElementById("result1").innerHTML = `Result: ${result}`;
}

//3.Finding square root of a Number
function calculateSquareRoot() {
	const number = document.getElementById("number").value;
	const squareRoot = Math.sqrt(number);
	document.getElementById("result2").innerHTML = `Square Root: ${squareRoot}`;
}

//4.Checking a Number is Even or Odd
function checkOddEven() {
    let newone =document.getElementById("number1").value;
	if (newone % 2 == 0) {
		document.getElementById("result3").innerHTML = `The Number is Even`;
	} else {
		document.getElementById("result3").innerHTML = `The Number is Odd`;
	}
}

//5.Generating a random numbers
function generateRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100
	document.getElementById("result4").innerHTML = `Random Number: ${randomNumber}`;
}

//6.Finding a Largest of 3 numbers
function findLargest() {
	const num1 = document.getElementById("num1").value;
	const num2 = document.getElementById("num2").value;
	const num3 = document.getElementById("num3").value;
	const largest = Math.max(num1, num2, num3);
	document.getElementById("result5").innerHTML = "Largest Number:"+largest;
}

//7.Printing a Name 20 times
function printName(){
    var name=document.getElementById("name").value;
    var times=20;
    var result6="";
    for(var i=0;i<times;i++){
     result6 +=name +"<br>";
    document.getElementById("result6").innerHTML = result6;
    }
}

//8.Checking Last Digit
function checkLastDigit() {
	const numA = document.getElementById("numA").value;
	const numB = document.getElementById("numB").value;
	const lastDigitA = numA % 10;
	const lastDigitB = numB % 10;
	if (lastDigitA === lastDigitB) {
		document.getElementById("result7").innerHTML = "Numbers have same last digit";
	} else {
		document.getElementById("result7").innerHTML = "Numbers do not have same last digit";
	}
}

//Replacing a Characters of input string
function replaceCharacters() {
	const inputString = document.getElementById("inputString").value;
	const charToReplace = document.getElementById("charToReplace").value;
	const replacementChar = document.getElementById("replacementChar").value;
	const result = inputString.replace(new RegExp(charToReplace, 'g'), replacementChar);
	document.getElementById("result8").innerHTML = result;
}

//Appending Arrays
function appendArrays() {
    const arrayA = document.getElementById("arrayA").value.split(",");
    const arrayB = document.getElementById("arrayB").value.split(",");
    const arrayC = arrayA.concat(arrayB);
    document.getElementById("result9").innerHTML = arrayC.join(", ");
}










