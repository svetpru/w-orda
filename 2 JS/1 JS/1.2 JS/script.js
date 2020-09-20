

function setResult(event){
    result.innerHTML = event.target.value;
}

btn1.addEventListener("click", setResult);
btn2.addEventListener("click", setResult);
btn3.addEventListener("click", setResult);
btn4.addEventListener("click", setResult);

function setResultB(event){
    resultB.innerHTML = txtB.value;
}

btnB.addEventListener("click", setResultB);

function setResultC(event){
    resultC.innerHTML = txtD.value;
}

btnD.addEventListener("click", setResultC);

function setResultD(event){
    resultD.innerHTML = txtC.value;
}

btnC.addEventListener("click", setResultD);


