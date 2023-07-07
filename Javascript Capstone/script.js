//A $(document).ready() block.
/* global $ */ 
$(document).ready(function(){
    $("#myCarousel").carousel({
        interval: 3000        
    });
 
 
 
 // Gallery
    $('ul li').click(function(){ 
        
    var clicked_href = $(this).children('a').attr('href');
    $("li").removeClass("active");
    $(this).addClass("active"); 
  

    $(clicked_href).show();
     
  });
    




 
 
});