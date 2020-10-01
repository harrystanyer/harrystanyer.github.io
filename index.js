$(document).ready(function () {
    $("#navHide").click(function () {
        navHide();
    });
});

var navOpen = true;

function navHide(){
    if(navOpen){
        navOpen = false;
        $(".navbar").css("width","50px");
        $("#home").html("+");
        $("#about").html("+");
        $("#githubButton").html("+");
        $(".content").css("margin-left","50px");
    }else{
        navOpen = true;
        $(".navbar").css("width","200px");
        $("#home").html("Home");
        $("#about").html("About");
        $("#githubButton").html("Github");
        $(".content").css("margin-left","150px");
    }
}

function firstWord(paragraph){
    var a = paragraph.Split(' ');
}