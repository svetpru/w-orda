
let img = $("<img>");



$(img).attr("src", "img/03.png");

$("body").append(img);

let rubashka = "img/01.png";

let size = $("#size").attr("value");
//Генерация поля
function generateField(size){
    //Размер 175х175px
    //Ширина = size * ширину картинки + 16
    //Местоположение поля = (ширина экрана - ширина поля)/2

    // 1) Создать массив картинок размерности size*size
    // 2) Задать параметры для картинок [размер, класс, id]
    let cards = new Array(size*size);
    cards.fill($("<img>").attr({
        "src": rubashka,
        "width": "150",
        "class": "card",
        "id": "rub"
    }));

    //Расчитать размер и местоположение #field и установить css()
    
    $("#field").css({
        "width": size * "175" + "16",
        "position": ("screenWidth" - "widht")/"2"
    });
    
    //Добавляем картинки в НАЧАЛО #field
    
    $(img).attr("src", rubashka);

    $("#field").prepend(img);
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