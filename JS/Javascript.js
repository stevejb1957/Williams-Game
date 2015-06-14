var input;

var my_pic = new Image();
     my_pic.src = "../Images/horse.jpg";
     var h = 413; 

function title()
{
    
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
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
        
      
     
    input = new CanvasInput 
    ({ 
        canvas: document.getElementById('my_canvas'),
        placeHolder: "What is your name?",
        onsubmit: begin
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




    
 

function play (){
    
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






    