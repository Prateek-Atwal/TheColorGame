	var numOfSquares=6;
	var colors=[];
	var pickedColor;
	var squares=document.querySelectorAll(".square");
	var colorDisplay=document.getElementById("colorDisplay");
	var messageDisplay=document.getElementById("message");
	var h1=document.querySelector("h1");
	var resetButton=document.getElementById("reset");
	var modeBtns=document.querySelectorAll(".mode");

	init();

	function init(){
	//adding event listeners to the mode buttons 
	setupModeButtons();
	// adding event listeners to the squares
	setupSquares();
	reset();   	
	}
	function setupModeButtons(){
	for(var i=0;i<modeBtns.length;i++){
	modeBtns[i].addEventListener("click",function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		//set the number of visible squares
		numOfSquares=this.textContent==="Easy"?3:6;
		//reset the game 
		reset();
	});
	}
	}
	function setupSquares(){
	for(var i=0;i<squares.length;i++){
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			changeColor(clickedColor);
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?"
		}
		else{
			messageDisplay.textContent="TRY AGAIN!";
			// var temp=document.querySelector("body"); not working
			this.style.backgroundColor="#232323";
		}
	});
	}
	}
	resetButton.addEventListener("click",function(){
	reset();
	});
	function changeColor(color){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
	}
	function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
	}
	function generateRandomColors(num){
	var ar=[];
	for(var i=0;i<num;i++){
	ar.push(randomColor());
	}
	return ar;
	}
	function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
	}
	function reset(){
	//fill the color array with random colors
	colors=generateRandomColors(numOfSquares);
	//pick a random color from array
	pickedColor=pickColor();
	// change the color display
	colorDisplay.textContent=pickedColor;
	//assign all the square the color
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
	}
	// reset label of reset button
	resetButton.textContent="New Color";
	// reset Message Display
	messageDisplay.textContent=null;
	// reset the h1 background color
	h1.style.backgroundColor="steelblue";
	}