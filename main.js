$(document).ready(function(){
    $('.header').height($(window).height());
   })
var page = 1,
moving = false;
var animationIteration = "animationiteration webkitAnimationIteration mozAnimationIteration oAnimationIteration oanimationiteration",
transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
$(".load-more").on("click", function() {
 if ( moving == false ) {
   moving = true;
   $(".load-more").addClass("active");
   setTimeout(function() {
     $(".load-more").one(animationIteration, function() {
       $(".load-more").removeClass("active");
       $(".load-more").one(transitionEnd, function() {
         page++;
         moving = false;
       });
       $('.o_clube')[0].scrollIntoView();
     });
   }, 2000);
 }
});