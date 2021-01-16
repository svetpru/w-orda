
let girlClub = ["Марина", "Олег", "Диана", "Милена", "Денис"]

let amongUs = girlClub.map(function(item, i){
    if(item == "Олег"){
        console.log(item + " - это не наш traitor");
        item = "Ксения";
        return item;
    };
    if(item == "Денис"){
        console.log(item + " - это не наш traitor");
        item = "Алиса";
        return item;
    };
});
console.log(girlClub);