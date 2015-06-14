var input;

var my_pic = new Image();
     my_pic.src = "../Images/horse.jpg";
     var h = 413; 
var ctx;
var canvas;

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
}



//function slidePic(){
    
    //alert("help");
    //i=h
   //if(i;i>1;i--){
       //var ctx = document.getElementById('my_canvas').getContext('2d');
     //ctx.drawImage(my_pic,0,0,620,413,325,450,620,i);
   
   //}
    
          
//}

window.onload=title




//function prompt(){
 //alert("Hello");   
//name = prompt("What is your name");

//}

//window.setTimeout(function(){
//prompt();

//},1000);




    
 

function play ()
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
    //var otherCanvas = input.renderCanvas();
    //otherCanvas.getContext('2d').clearRect(0,0, otherCanvas.width, otherCanvas.height);
    window.setTimeout(function(){
     play();
    }, 1500);

    window.setTimeout(function(){
     animal();
    },2500);
        
}
    
function animal(){
    
       
     var ctx = document.getElementById('my_canvas').getContext('2d');
        // ctx.drawimage(my_pic,clipX,clipY,clipW,clipH,x,y,w,h);
        ctx.drawImage(my_pic,0,0,620,413,325,450,620,h);
        
    
    } 
    
//window.setTimeout(function(){
//slidePic();

//},2000);


    
  
 $(function() {
    var availableTags = [
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
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });

//var response = document.getElementById("tags").value;
//alert(response);

//if (response = ("Horse") {
    //alert("Well done");
    
    //}else {
    //alert("Try again");
    //}



//alert(response);






    