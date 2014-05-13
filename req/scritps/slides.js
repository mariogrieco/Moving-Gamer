/*
  Slides v- 0.0.1 NON dinamic
  mobile --v
*/
var time    = 1,
    opacity = 0.005,
    slides  = $('.slides_1');
	
  $(function(){
  
   w = 1;
   P = 4;
ver = setInterval(function(){
    
    if( w >= 5 ){ 

        if ( P == 0) { 
          w = 1; 
          P = 4;
        }
        
        else if ( P <=4 && w >= 5) {
        var COME = "come_" + P
            window[COME]();
              P = P - 1;
        }
    }else if (w < 5) {
             var hidden = "hidde_" + w
              window[hidden]();
              w = w + 1; 
    }
    
  },3500);
})

	for (var i = slides.length-1; i > 0; --i) 
	{
		    a = slides[i].id
			c = $("#"+a)
			c.addClass("slides_animation" + i )
	}
	x = 1;

function hidde_1() {
	x = 1;
       timer = setInterval(function (){

       		x = x - opacity;
       			if (x < 0) { 
       				
       				clearInterval(timer);
       				$('.slides_animation4').css('opacity',0)
       			}
       	 $('.slides_animation4').css('opacity',x)
       	
       }, time );
}
   
function come_1(){
   	x = 0;
       timer2 = setInterval(function (){

       		x = x + opacity;
       			if (x > 1) { 
       				
       				clearInterval(timer2);
       				$('.slides_animation4').css('opacity',1)
       			}
       	 $('.slides_animation4').css('opacity',x)
       	
       }, time )
}
	
function hidde_2() {
 x = 1;
       timer_2 = setInterval(function (){

       		x = x - opacity;
       			if (x < 0) { 
       				
       				clearInterval(timer_2);
       				$('.slides_animation3').css('opacity',0)
       			}
       	 $('.slides_animation3').css('opacity',x)
       	
       }, time );
}
   
function come_2(){
   	x = 0;
       timer2_2 = setInterval(function (){

       		x = x + opacity;
       			if (x > 1) { 
       				
       				clearInterval(timer2_2);
       				$('.slides_animation3').css('opacity',1)
       			}
       	 $('.slides_animation3').css('opacity',x)
       	
       }, time )
}

function hidde_3() {
 x = 1;
       timer_3 = setInterval(function (){

       		x = x - opacity;
       			if (x < 0) { 
       				
       				clearInterval(timer_3);
       				$('.slides_animation2').css('opacity',0)
       			}
       	 $('.slides_animation2').css('opacity',x)
       	
       }, time );
}
   
function come_3(){
   	x = 0;
       timer2_3 = setInterval(function (){

       		x = x + opacity;
       			if (x > 1) { 
       				
       				clearInterval(timer2_3);
       				$('.slides_animation2').css('opacity',1)
       			}
       	 $('.slides_animation2').css('opacity',x)
       	
       }, time )
}

function hidde_4() {
 x = 1;
       timer_4 = setInterval(function (){

       		x = x - opacity;
       			if (x < 0) { 
       				
       				clearInterval(timer_4);
       				$('.slides_animation1').css('opacity',0)
       			}
       	 $('.slides_animation1').css('opacity',x)
       	
       }, time );
}
   
function come_4(){
   	x = 0;
       timer2_4 = setInterval(function (){

       		x = x + opacity;
       			if (x > 1) { 
       				
       				clearInterval(timer2_4);
       				$('.slides_animation1').css('opacity',1)
       			}
       	 $('.slides_animation1').css('opacity',x)
       	
       }, time )
}