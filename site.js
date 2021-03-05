$(function(){
  
$("#portfolio img").click(function(){
  var src=$(this).attr("src");
  $("#frame img").attr("src",src);
  $("#frame").fadeIn();
  $("#overlay").fadeIn();  
});
$("#overlay").click(function(){
$(this).fadeOut();
$("#frame").fadeOut();

}) 

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 71)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

//function aftersubmit(data){
 // if(data.result =='success'){
  //  $('form#reused_form').hide();
  //  $('#success_message').show();
  //  $('#error_message').hise();
  //}
 // else{
  //  $('error_message').append('<ul></ul>');
 // }
//}

});