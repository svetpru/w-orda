
//Готовый алгоритм перебора карт
function shuffle(array) {
    let copy = [], n = array.length, i;
  
    while (n) {
  
      i = Math.floor(Math.random() * array.length);
  
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

//Генерация поля
function generateField(size){

    let cls = ["c1", "c2", "c3", "c4"];
    let counter = 0;
    let backs = [];
    for(let i=0; i<(size*size); i+=2){
        backs[i] = cls[counter];
        backs[i+1] = cls[counter];

        if(counter < 3){
            counter++;
        }
        else counter = 0;
    }
    
    console.log(backs);

    let cards = [];
    for(let i=0; i<(size*size); i++){
        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back");

        $(flipper).append(back);
        $(flipper).prepend(front);
        $(card).append(flipper);

        cards.push(card);
    }

    $("#field").html("");

    
    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth - size*150+16)/2+"px"
    });

    $("#field").append(cards);

    console.log(cards);
}

$("#btn").click(function (event) { 
   size = $("#size").val();
    if(size%2 == 0){
        alert("Приянто!");
        generateField(size);
    }
    else{
        alert("Число должно быть чётным!");
    }
});

//Переворот картинки при нажатии
$(".flipper").click(function(event){
    $(event.currentTarget).toggleClass("clicked");
});
