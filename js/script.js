$(document).ready(function () {
    $("#taskList").scroll(function(){
        $(this).addClass("innerShadow");
        setTimeout(function(){
            $("#taskList").removeClass("innerShadow");
        },1000);
    });
});
// IDEA:
// Starting the timer with a big button. Activates different mode, starts going through the tasks. 
// Smaller button called "kill" or something brings up a menu where you have to type a long motivational 
// sentence about quitting or something. Only then will it kill the time.