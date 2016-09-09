var count=0;
var str = '1 плюс 2 равно 3'.match(/\d+/g); 
//console.log(str);
var o={x:1};
o.x=2;
o.y=5;

var a=[1,2,3];
a[0]=0;
function timer()
{
    
var a=document.getElementById("rangep")
x=new Date();
///DATE OF TODAY AND TIME OF TOD
console.log(x.toLocaleDateString()+" "+x.toLocaleTimeString()+" "+x.getDay());
//ЧАСЫ ОБНОВЛЯЮТСЯ КАЖДУЮ СЕКУНДУ
var hours=x.getHours();
var minutes=x.getMinutes();
var seconds=x.getSeconds();

if(hours<10) hours="0"+hours;
if(minutes<10) minutes="0"+minutes;
if(seconds<10) seconds="0"+seconds;
a.innerHTML=hours+":"+minutes+":"+seconds;

setTimeout('timer()',1000);

count++;
    if(count==5)
        {
            console.clear();
            count=0;
        }

}

var v=document.getElementById("in").innerHTML.value;
a=v;
var x=1;

switch(typeof x)
    {
        case 'number':
            console.log("number");
            break;
        default:
            console.log("Else");    
    }
    
for(var b in o)
    {
        console.log(o[b]);
        if(b>2)
            {
                throw Error("NOOOO");
            }
    }

/*try {
	// Запросить число у пользователя
	var n = Number(prompt("Введите положительное число", "")); 
	
	// Вычислить факториал числа, предполагая, 
	// что входные данные корректны 
	var f = factorial(n); 
	
	// Вывести результат 
	alert(n + "! = " + f);
}
catch (ex) { 
	// Если данные некорректны, управление будет передано сюда 
	alert(ex); // Сообщить пользователю об ошибке
}*/