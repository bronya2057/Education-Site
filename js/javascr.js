/*jslint white: true */
"use strict";
/*document.getElementById("myButton").onclick = function()
{
    document.getElementById("test").innerHTML=
        document.getElementById("test").innerHTML+"JS";
    document.getElementById("div1").innerHTML="<ul><li>Cat</li><li>Dog</li></ul>";
    
};
document.getElementById("circle").onclick=function()
{
   var divId="circle"; document.getElementById(divId).style.display="none";
};

document.getElementById("myButton2").onclick=function()
{
    var p=document.getElementById("fNm").value;
    document.getElementById("test").innerHTML=p;
};

document.getElementById("clear").onclick=function()
{
    document.getElementById("test").innerHTML="";
};

var MyArray=[];
var MyArray2=[];
MyArray[0]="Pizza";
MyArray2=["Pizzas","ggege"];
MyArray2.push("Snow");
MyArray2.push("Snow");
MyArray2.push("Snow");
MyArray2.splice(1,2);
MyArray2.splice(2,0,"Happiness","Else");
console.log(MyArray.length);
console.log(MyArray2);



var clickedTime; var createdTime; var reactionTime;
var toprand;
//document.getElementById("box").style.display="none"

function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makebox()
{
toprand=Math.random()*1000;
 var b="box";
var time=Math.random();
time=time*5000;
setTimeout(function()
    {

   if(Math.random()>0.5)
      {
          document.getElementById(b).style.borderRadius="100px";
      } 
    document.getElementById(b).style.top=toprand+"px";
    document.getElementById(b).style.left=toprand+"px";
    document.getElementById(b).style.background=getRandomColor();
    document.getElementById(b).style.display="block";
    createdTime=Date.now();
},time);
}



document.getElementById("box").onclick=function()
{
    clickedTime=Date.now();
    reactionTime=(clickedTime-createdTime)/1000;
   document.getElementById("test").innerHTML="your time is "+reactionTime;
    this.style.display="none";
     makebox();
};

 makebox();*/
 
