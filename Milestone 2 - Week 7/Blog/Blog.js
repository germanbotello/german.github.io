$(document).ready(function(){
    //alert('Hello!');
    $("#main a").click(function(event){
        event.preventDefault();
    });

    $(".readless").ready(function(){
    	$(".readless").hide();
    });

    $(".readmore").click(function(){
        $("#show-this-on-click").slideDown();
        $(".readmore").hide();
        $(".readless").show();
    });

    $(".readless2").click(function(){
        $("#show-this-on-click2").slideUp();
        $(".readmore2").show();
        $(".readless2").hide();
    });

    $(".readless2").ready(function(){
    	$(".readless2").hide();
    });

    $(".readmore2").click(function(){
        $("#show-this-on-click2").slideDown();
        $(".readmore2").hide();
        $(".readless2").show();
    });

    $(".readless").click(function(){
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
        $(".readless").hide();
    });

    $(".learnmore").click(function(){
        $(".learnmore").hide();
        $("#learnmoretext").slideDown();

    });

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }