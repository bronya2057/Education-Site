/* jshint browser: true */
var cons=window.console;

function contactme(val)
{
    switch (val)
        {
            case 1:      
                
                document.getElementById("greetingscontacts").style.display="none";
                //document.getElementById("alex").style.display="block"; 
                document.getElementById("Shmalex").style.display="none";
                document.getElementById("Pfalex").style.display="none"; 
                cons.log(1);
                break;
            case 2:
                document.getElementById("greetingscontacts").style.display="none";
                document.getElementById("alex").style.display="none"; 
                //document.getElementById("Shmalex").style.display="block";
                document.getElementById("Pfalex").style.display="none"; 
                cons.log(2);
                break;
            case 3:
                document.getElementById("greetingscontacts").style.display="none";
                document.getElementById("alex").style.display="none"; 
                document.getElementById("Shmalex").style.display="none";
                //document.getElementById("Pfalex").style.display="block"; 
                cons.log(3);
                break;
        }
       
}