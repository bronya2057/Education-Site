/*globals $:false */
/*globals document:false */
/*globals console:false */
/*globals setTimeout:false */
/*global $:false, jQuery:false */
    $(window).load(function() {
        /*$(".namelist").css({"display":"none"});
        $(".namelist").fadeIn(1000);*/
    });6
$(document).ready(function(){
    
                $("p").click(function(){
                    
                    $(this).hide();
                    });
                $(".namelist").mouseleave(function()
                                 {
                   /* var timeKeeper = setTimeout(function() {$('.namelist ul').hide();}, 10);
                    console.log("lostFocus");
                    $(".namelist").css("border","1px solid red");
                    */
                    $(".namelist").css("transition","0.5s");
                });
            $(".namelist").mouseenter(function()
                                     {
               /* $(".namelist").css("border","4px solid red");
                $(".namelist").css("transition","0.5s");*/
            });
    $(".namelist li").mouseleave(function(){
        $(".namelist li").css("transition","0.5s");
    });
    
    $(".namelist").on('click','li',function(){
        var name=$(this).text();
        console.log(name);
       /* $("#alex").hide(1000);
        $("#Shmalex").hide(1000);
       $("#Pfalex").show(1000);*/
        switch(name)
            {
                case 'Alex':
                    {
                       
                        $("#alex").show(500);
                        $("#alex").css
                        ({
                           
                        }   
                        );
                        console.log(name);
                        break; 
                    }
                   
                case "Shmalex":
                $("#Shmalex").show(500);
                    console.log(name);
                break;    
                case "Pfalex":
                $("#Pfalex").show(500);
                    console.log(name);
                break;   
            }
            
                    
    });
    $("#planeCrush").click(function(){
        $("#planeCrush").animate({
            height:"+=2px",
            width:"+=2px",
        });
        /*$("#planeCrush").rotate({bind:{
              click: function(){
                $(this).rotate({
                  duration:6000,
                  angle: 0,
                  animateTo:100
                  });
                }
              }
            });*/
    });
    
             });