
function onSubmit(event){

    event.preventDefault();

    let form = event.target;

    let name = form.userName.value;
    let age = form.userAge.value;
    let from = form.userFrom.value;
    let like = form.userLike.value;

    console.log("name: " + name);
    console.log("age: " + age);
    console.log("from: " + from);
    console.log(like);

    let sA = "Однажды на свете жил " + name + ".";
    let sB = " Ему было " + age + " лет.";
    let sC = " Он занимался веб-программированием. Группа называлась " + from + ". "; 
    

    let userlike = document.getElementsByClassName("userlike");
    let like1 = [];

    for(let i = 0; i<userlike.length; i++){

        if(userlike[i].checked == true){
            like1.push(userlike[i].value);
        }
    }
    console.log(like1);

    let sD = " Он любил" + like1 + " . КОНЕЦ.";

    story.innerHTML = sA + sB + sC + sD;
}


popitka.addEventListener("submit", onSubmit);