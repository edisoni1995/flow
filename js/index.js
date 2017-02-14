
$(document).scroll(function() {
   var scrollTop = $(window).scrollTop() ;
   var wHeight = $(window).height();

   $(".left").each(function(){
   		var el = $(this).offset().top+80;
   		var top = wHeight + scrollTop;
   		if(el < top){
   			$(this).addClass("fadeInLeft");
   		}
   });

      $(".right").each(function(){
   		var el = $(this).offset().top+80;
   		var top = wHeight+scrollTop;
   		if(el < top){
   			$(this).addClass("fadeInRight");
   		}
   });
   
});