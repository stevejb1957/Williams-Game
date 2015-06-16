
var answers = 
[
    { answer: "Horse", imagePath: "../Images/horse.jpg" },
    { answer: "Cat", imagePath: "../Images/cat.jpg" },
    { answer: "Dog", imagePath: "../Images/dog.jpg" }
];

var input;
var my_pic = new Image();
my_pic.src = "../Images/cat.jpg";

for (var i = 0; i < answers.length; i++)
{
    var image = new Image();
    image.src = answers[i].imagePath;
    answers[i].image = image;
}

var ctx;
var canvas;
var expectedAnswer;
var currentAnswerIndex = 0;
window.onload=title



function points()
{
input = new CanvasInput 
    ({ 
        
      
        canvas: canvas,
        placeHolder: " Your Points",
        onsubmit: begin,
        x: 1000,
        y: 250,
        width: 180,
        fontSize: 30,
        height: 30        
    });
}


function updateAnswer()
{   
    //animal.slideDown()
    currentAnswerIndex = (currentAnswerIndex + 1) % answers.length;
    var answerObject = answers[currentAnswerIndex];
    expectedAnswer = answerObject.answer;
    ctx.clearRect(325,450,625,418);
    my_pic = answerObject.image;
    animal();
}

function title()
{
    canvas = document.getElementById('my_canvas'); 
    ctx = canvas.getContext('2d'); 
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
    points();
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
     updateAnswer();
    },1000);        
}
    
function animal()
{     
    var ctx = document.getElementById('my_canvas').getContext('2d');
    ctx.drawImage(my_pic,0,0,620,413,325,450,620,413);
} 

function checkAnswer(event,ui)
{
    var answer = ui.item.value;
    if(answer == expectedAnswer)
    {
        document.getElementById('cheer').play();
        updateAnswer();
        $(this).val('');
        return false;
    }
    else
    {
        document.getElementById('wrong').play();
        checkAnswer()
    }
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
        "Car",
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