$(document).ready(function(){
    //alert('Hello!');

    $(".readless").ready(function(){
        $(".readless").hide();
        $(".readmore2").hide();
        $(".readmore3").hide();
    });

    $(".readmore").click(function(){
        $("#show-this-on-click").slideDown();
        $(".readmore").hide();
        $(".readmore2").show();
    });

    $(".readmore2").click(function(){
        $("#show-this-on-click").hide();
        $("#show-this-on-click2").slideDown();
        $(".readmore2").hide();
        $(".readmore3").show();
    });

    $(".readmore3").click(function(){
        $("#show-this-on-click2").hide();
        $("#show-this-on-click3").slideDown();
        $(".readmore3").hide();
        $(".readless").show();
    });

    $(".readless").click(function(){
        $("#show-this-on-click3").slideUp();
        $("#show-this-on-click2").slideUp();
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
        $(".readless").hide();
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