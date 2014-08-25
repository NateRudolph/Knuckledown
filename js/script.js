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
            var number = value.match(/\d+/);
            value = value.replace(/\d+/g,'');
            $("#taskList").prepend("<li>"+value+"<span class='timeAmount'>"+number+" min</span>"+"</li>");
            $(this).val(null);
            updateList();
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

////////////////////////////////////////////////////////////
function updateList(){
    $("#taskList > li").click(function(){
        $(this).remove();
    });

}