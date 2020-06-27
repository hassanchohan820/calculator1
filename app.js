function getNumber(num){
    var x =  document.getElementById("Result");
    x.value += num;
}

function clearfunction(){
    var x =  document.getElementById("Result");
    x.value = "";
}

function getResult(){
    var x =  document.getElementById("Result");
    x.value = eval(x.value);
}
