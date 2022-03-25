
function insert(num){
 var numeros = document.getElementById("resposta").innerHTML;
 document.getElementById("resposta").innerHTML = numeros + num;

}

function apagar(){
  document.getElementById("resposta").innerHTML="";
}
function back(){
  var string = document.getElementById('resposta').innerHTML;
  document.getElementById('resposta').innerHTML = string.substring(0,string.length -1);
}
function calcular(){
  var calculo = document.getElementById('resposta').innerHTML;
  if(calculo){
    document.getElementById('resposta').innerHTML = eval(calculo);
  }
}