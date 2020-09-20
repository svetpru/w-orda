

console.log($(".circle").css("background-color"));

$(".circle").css("background-color")
document.getElementsByClassName("circle")[0].style.backgroundColor;


$(".circle").css(
    {
    "background-color": "orange",
    "border-radius": "15%"
    }
)

$(".circle:nth-child(5)").css(
    {
        "background-color": "gold"
    }
);

$(".circle:nth-child(2n)").css(
    {
        "background-color": "black"
    }
);

$(".circle:nth-child(2n+1)").css(
    {
        "background-color": "coral"
    }
);

$(".circle:nth-child(1)").css(
    {
        "background-color": "black",
        "border-radius": "25%"
    }
);

$(".circle:last-child").css(
    {
        "background-color": "black",
        "border-radius": "25%"
    }
);

//for (let i=0; i < document.getElementsByClassName("circle").length; i++) {
//    document.getElementsByClassName("circle")[i].style.backgoundColor = "orange";
//}

$(".circle:nth-child(2n)").click(function (event) { 
    $(event.target).toggleClass("clicked");
});

$(".circle:nth-child(2n+1)").click(function (event) { 
    $(event.target).toggleClass("odd");
});

