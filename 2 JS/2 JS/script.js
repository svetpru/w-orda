
function grow(element){
    let step = 10;
    let h = parseInt(   window.getComputedStyle(element)["height"].replace("px", "")  );
    console.log(h+step);
    element.style.height = h+step + "px";

    let finish = parseInt(   window.getComputedStyle(fin)["bottom"].replace("px", "")  );
    console.log(finish)
    fin.style.bottom = finish + "px";

    if(h>=finish){
        alert("Game over")
        alert(event.target.id)
    }
}


function game (event){
    console.log(event.keyCode);


    if(event.keyCode == 32){
        grow(p1);
    }

    else if(event.keyCode == 38){
        grow(p2);
    }

    else{
        console.log("Нажата неправильная клавиша")
    }

    

}




document.addEventListener("keyup", game);

