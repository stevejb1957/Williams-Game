var answers = 
[
    { answer: "Horse", imagePath: "../Images/horse.jpg" }
];

var input;
var my_pic = new Image();
my_pic.src = "../Images/horse.jpg";
var h = 413; 
var ctx;
var canvas;

window.onload=title

function title()
{
    canvas = document.getElementById('my_canvas'); 
    ctx = canvas.getContext('2d'); 
    // fillText(text,x,y,maxWidth)
    // strokeText(text,x,y,maxWidth)
    ctx.fillStyle = "rgba(245, 60, 16, 0.72)";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.font = "bold 100px Ariel";
    ctx.fillText("Guess the Animal Game", 130,100);
    ctx.strokeText("Guess the Animal Game",130,100);

    var inputWidth = 300;
     
    input = new CanvasInput 
    ({ 
        canvas: canvas,
        placeHolder: "What is your name?",
        onsubmit: begin,
        x: canvas.width/2-inputWidth/2,
        y: 150,
        width: inputWidth,
        fontSize: 30,
        height: 30
        
    });
    input.focus();
}


function play()
{    
    var ctx = document.getElementById('my_canvas').getContext('2d');
    ctx.fillStyle = "rgba(16, 60, 245, 0.72)";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.font = "bold 50px Comic Sans MS";
    ctx.fillText("", 130,100);
    ctx.fillText("Hello " + input.value() + " let's play a game", 250,300);
    ctx.strokeText("Hello " + input.value() + " let's play a game",250,300);
    ctx.fillStyle = "rgba(77, 217, 59, 0.72)";
    ctx.fillText("What am I?",450,400)
}

function begin()
{
    var children = document.body.children;
    var hiddenInput = children[4];
    document.body.removeChild(hiddenInput);
    ctx.clearRect(475, 148, 350, 52);
    window.setTimeout(function(){
     play();
    }, 500);

    window.setTimeout(function(){
     animal();
    },1000);        
}
    
function animal()
{     
    var ctx = document.getElementById('my_canvas').getContext('2d');
    ctx.drawImage(my_pic,0,0,620,413,325,450,620,h);
} 

function checkAnswer(event,ui)
{
    var answer = ui.item.value;
    alert(answer);
}
    
  
$(function() 
{
    var availableTags = 
    [
        "Horse",
        "House",
        "Hello",
        "Cat",
        "Cow",
        "Cat",
        "Dog",
        "Doll",
        "Dam"
    ];
    $( "#tags" ).autocomplete
    ({
        source: availableTags,
        select: checkAnswer
    });
});