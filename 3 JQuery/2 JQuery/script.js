
//Структура поля
let firstCard = null;
let secondCard = null;
let wait = false;


//Готовый алгоритм перебора карт(Рандом)
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
    
    //Шафл для массива карт
    backs = shuffle(backs);

    let cards = [];
    for(let i=0; i<(size*size); i++){
        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back").addClass(backs[i])

        $(flipper).append(back);
        $(flipper).prepend(front);
        $(card).append(flipper);

        cards.push(card);
    }

    //Обнуление поля
    $("#field").html("");

    
    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth - size*150+16)/2+"px"
    });

    $("#field").append(cards);


    //Клик + анимация
    $(".flipper").click(function(event){
        if(wait == false && firstCard != event.currentTarget){
            $(event.currentTarget).toggleClass("clicked");
            checkCard(event.currentTarget);
        }  
    });
}



function checkCard(card){
    //Выбор первой карты
    if(firstCard == null){
        firstCard = card;
    }
    //Выбор второй карты
    else if(secondCard == null){
        secondCard = card;
        wait = true;
        //Проверяем 1500мс; таймер
        setTimeout(function(){
            //Сравнение
            if($(firstCard).children(".back").attr("class") == $(secondCard).children(".back").attr("class")){
                //Найдены одинаковые карты
                $(firstCard).css("visibility", "hidden");
                $(secondCard).css("visibility", "hidden");
            }
            else{
                //Переворот карты назад
                $(".flipper").removeClass("clicked");
            }
        
        //Забываем карты и разрешаем переворачивать карты
        firstCard = null;
        secondCard = null;
        wait = false;
        },1000);
        

        
    }
};

$("#btn").click(function (event) { 
   size = $("#size").val();
    if(size%2 == 0){
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


