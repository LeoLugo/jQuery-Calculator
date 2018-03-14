function Divide() {
	var numone = Number(document.getElementById("num_one").value)
	var numtwo = Number(document.getElementById("num_two").value)
	var answer = numone / numtwo
	document.getElementById("answer").innerHTML = answer
}

function Multiply() {
	var numone = Number(document.getElementById("num_one").value)
	var numtwo = Number(document.getElementById("num_two").value)
	var answer = numone * numtwo
	document.getElementById("answer").innerHTML = answer
}

function Add() {
	var numone = Number(document.getElementById("num_one").value)
	var numtwo = Number(document.getElementById("num_two").value)
	var answer = numone + numtwo
	document.getElementById("answer").innerHTML = answer
}

function Subtract() {
	var numone = Number(document.getElementById("num_one").value)
	var numtwo = Number(document.getElementById("num_two").value)
	var answer = numone - numtwo
	document.getElementById("answer").innerHTML = answer
}