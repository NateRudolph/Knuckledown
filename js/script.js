$(document).ready(function () {
    loadTitle();
    
    $("#taskList").scroll(function(){
        $(this).addClass("innerShadow");
        setTimeout(function(){
            $("#taskList").removeClass("innerShadow");
        },1000);
    });
    
    $("#taskInput").keyup(function(e){
        if(e.which == 13){
            var value = $(this).val();
            $("#taskList").prepend("<li>"+value+"</li>");
            $(this).val(null);
        }
        if($("#taskInput").val().length > 6){
            loadTitle();
            $("h1").html("Give the task a time like this:<br><em>Write the intro   </em>   20"); 
        }
    });
    
    $("#taskInput").focus(function(){
        loadTitle();
        $("h1").html("What do you need to do first?");

    });
    
});
// IDEA:
// Starting the timer with a big button. Activates different mode, starts going through the tasks. 
// Smaller button called "kill" or something brings up a menu where you have to type a long motivational 
// sentence about quitting or something. Only then will it kill the time.
////////////////////////////////////////////////////////////
function loadTitle(){
    var title = $("h1");
    title.css({"opacity":0,"bottom":-5,"position":"relative"});
    title.animate({
        "opacity":1,
        "bottom":"0"
    },600);
}