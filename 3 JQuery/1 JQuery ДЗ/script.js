

console.log($(".segment").css("background-color"));

$(".segment").css("background-color")
document.getElementsByClassName("segment")[0].style.backgroundColor;


//Изменение CSS
$(".segment:nth-child(2n)").css(
    {
        "background-color": "black"
    }
);

$(".segment:nth-child(2n+1)").css(
    {
        "background-color": "coral"
    }
);

$(".segment:nth-child(3n+2)").css(
    {
        "background-color": "gold"
    }
);

$(".segment:nth-child(1)").css(
    {
        "background-color": "black",
        "border-radius": "25%"
    }
);

$(".segment:last-child").css(
    {
        "background-color": "black",
        "border-radius": "25%"
    }
);

// for (let i=0; i < document.getElementsByClassName("circle").length; i++) {
//     document.getElementsByClassName("circle")[i].style.backgoundColor = "orange";
// }

$(".segment:nth-child(2n)").click(function (event) { 
    $(event.target).toggleClass("clicked");
});


