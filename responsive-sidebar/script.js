$(document).ready(function(){
    $(".toggle").click(function(){
       $(".navigation").toggleClass("active");
       $(this).toggleClass("active");
       $(".para").toggleClass("active");
    });
});