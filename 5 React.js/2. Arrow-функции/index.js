

let numbers = [13, 2345, 334, -60874, 4, 8257997];

numbers = numbers.filter((item,i)=>{
    return item % 2;
});

numbers = numbers.map((item, i)=>{
    return item*10;
});

// console.log(numbers);

//-----------------------------------------//

let girlClub = ["Марина", "Олег", "Диана", "Милена", "Денис"];
let boyNames = ["Александр", "Артём", "Василий", "Владимир", "Денис", "Максим", "Олег", "Степан", "Егор"]



girlClub = girlClub.filter((item, i)=>{
    //includes
    return !boyNames.includes(item);
    //indexOf
    return boyNames.indexOf(item) == -1;
});

// console.log(girlClub);
