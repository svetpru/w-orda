// --------------------------------------------------------------- //
// 1)
let users = {
    User1:{Group:"Admin", superuser:true, username:"Astatium", full_name:"Anna", registDate:"01.01.2016", loginDate:""},
    User2:{Group:"Moder", accessLevel:1, username:"Barium", full_name:"Boris", registDate:"03.06.2019", loginDate:""},
    User3:{Group:"Moder", accessLevel:3, username:"Cuprum", full_name:"Cink", registDate:"09.08.2017", loginDate:""},
    User4:{Group:"User", isBanned:true, username:"Dubinium", full_name:"Denis", registDate:"26.08.2020", loginDate:""},
    User5:{Group:"User", isBanned:false, username:"Erbium", full_name:"Egor", registDate:"14.12.2019", loginDate:""},
    User6:{Group:"User", isBanned:false, username:"Ferrum", full_name:"Fred", registDate:"08.11.2018", loginDate:""},
    User7:{Group:"User", isBanned:false, username:"Gadolinium", full_name:"Grey", registDate:"14.07.2021", loginDate:""},
};

// --------------------------------------------------------------- //
// 2)
animal={
    lion: {name:"Лев", quantity:"2"},
    Chimpanzees: {name:"Шимпанзе", quantity:"3"},
    Polar_bear: {name:"Белый медведь", quantity:"1"},
    Raccoon: {name:"Енот", quantity:"2"},
    Watchdog: {name:"Сторожевая собака", quantity:"1"},
    Parrot: {name:"Попугай", quantity:"1"},
};
console.log(`Животное: ${animal.lion.name}, в количестве: ${animal.lion.quantity};
Животное: ${animal.Chimpanzees.name}, в количестве: ${animal.Chimpanzees.quantity};
Животное: ${animal.Polar_bear.name}, в количестве: ${animal.Polar_bear.quantity};
Животное: ${animal.Raccoon.name}, в количестве: ${animal.Raccoon.quantity};
Животное: ${animal.Watchdog.name}, в количестве: ${animal.Watchdog.quantity};
Животное: ${animal.Parrot.name}, в количестве: ${animal.Parrot.quantity}.`)