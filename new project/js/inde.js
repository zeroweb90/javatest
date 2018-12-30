$("#btno").click(function(){
    
    $("body").animate({scrollTop:'0'},1000);
    
})

// go to href with all a with one function with animate

$("a").click(function(){
    
    var aHREF = $(this).attr("href");
    
     $("body").animate({scrollTop:$(aHREF).offset().top},1000);
    
})  

new WOW().init();

//menu
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})


//search btn

 $(".btn").on("click",function() {
    $(".input").toggleClass("inclicked");
    $(".btn").toggleClass("close");
     this.blur();
  });


$(document).ready(function () {
     // Handler for .ready() called.
     $("a").click(function(){
         $('html, body').animate({
             scrollTop: $('#about').offset().top}, 'slow');
    });
});
