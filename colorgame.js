var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected"); 
  easyBtn.classList.add("selected"); 
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  colorPicked = pickColor();
  colorDisplay.textContent = colorPicked;
 
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected"); 
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  colorPicked = pickColor();
  colorDisplay.textContent = colorPicked;
 
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});



resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    
    for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
        
    }
    
    h1.style.backgroundColor = "steelBlue";
                          
})

colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++){
    
    //add initial colors to sqares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        
        //grab color of clicked square
        //compare color to pickedColor
        
        var clickedColor = this.style.backgroundColor;
        
        if (clickedColor === colorPicked){
            messageDisplay.textContent = ("Correct!");
            resetButton.textContent = ("Play Again?");
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = ("Try again!");
                
            }
    });
}

function changeColors(color){
    //loop through all colors
    //change each color to match given color
    
    for (var i = 0; i < squares.length; i++){
    
    squares[i].style.backgroundColor = color;

    }
}

function pickColor (){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}


function generateRandomColors(num){
    
    var arr = []
    
    
    for(var i = 0; i < num; i++){
        arr.push(randomColor())    
        
    }
    
    return arr;
    
}

function randomColor (){
    
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}