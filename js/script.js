$(document).ready(function () {
    loadTitle();
    
    $("#taskList").scroll(function(){
        $(this).addClass("innerShadow");
        setTimeout(function(){
            $("#taskList").removeClass("innerShadow");
        },1000);
    });
    
    $("#taskInput").keyup(function(){
        alert("asdf");
    });
    
});
// IDEA:
// Starting the timer with a big button. Activates different mode, starts going through the tasks. 
// Smaller button called "kill" or something brings up a menu where you have to type a long motivational 
// sentence about quitting or something. Only then will it kill the time.
////////////////////////////////////////////////////////////
function loadTitle(){
    var title = $("h1");
    title.css({"opacity":0,"bottom":-10,"position":"relative"});
    title.animate({
        "opacity":1,
        "bottom":"10"
    },1500);
}