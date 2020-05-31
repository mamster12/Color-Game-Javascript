
//variables
//array of colors
var numOfSquares = 6;
var colors;
var pickedColor;



//selectors
var squares = document.querySelectorAll(".boxes");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var newColors = document.querySelector("#reset");
var mainDisplay = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".modeBtn");

colorDisplay.textContent = pickedColor;

init();

function init(){
	reset();
	initPlay();
	modeSelect();
}


//events Listeners
newColors.addEventListener("click", reset);

//functions

function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	mainDisplay.style.background = "steelblue";
	newColors.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	for(var i=0; i<squares.length; i++){
		//add colors to each boxes
		squares[i].style.background = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
}


function initPlay(){
	for(var i=0; i<squares.length; i++){

		//add colors to each boxes
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			//store clicked color
			var clickedColor = this.style.background;
			//compare to pickedColor
			if(pickedColor === clickedColor){
				message.textContent = "CORRECT!";
				changeColors(pickedColor);
				mainDisplay.style.background = pickedColor;
				newColors.textContent = "Play Again?"
			}
			else{
				message.textContent = "TRY AGAIN";
				this.style.background = "#232323";
			}
		});	
	}
}

function modeSelect(){
	for(var i=0; i<modeBtn.length;i++){

	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		if(this.textContent === "Easy"){
			this.classList.add("selected");
			numOfSquares = 3;
		}
		else{
			this.classList.add("selected");
			numOfSquares = 6;
		}
	reset();
	});
}
}

function changeColors(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.background = color;
	}
}


function pickColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i=0; i<num; i++){

	//generate random rgb colors
	arr.push(randomColors());
	//return arr
	}
	//initialize empty array
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}