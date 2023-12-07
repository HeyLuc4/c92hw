p1Name = localStorage.getItem("p1Name");
p2Name = localStorage.getItem("p2Name");

p1Score = 0;
p2Score = 0;

document.getElementById("p1Name").innerHTML = p1Name + " : ";
document.getElementById("p2Name").innerHTML = p2Name + " : ";

document.getElementById("p1Score").innerHTML = p1Score ;
document.getElementById("p2Score").innerHTML = p2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + p1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + p2Name ;

/*função para mandar os valores da conta*/
function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);
questionNumber = "<h4>" + number1 + " X "+ number2 +"</h4>";
inputInbox = "<br>Resposta : <input type='text' id='inputBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
row =  questionNumber + inputInbox + checkButton ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

/*Função para indicar acerto e incrementar pontos*/
function check()
{
get_answer = document.getElementById("inputBox").value;
if(get_answer == actual_answer)	
{
    if(answer_turn == "player1")
    {
        p1Score = p1Score +1;
        document.getElementById("p1Score").innerHTML = p1Score;
    }
    else 
    {
        p2Score = p2Score +1;
        document.getElementById("p2Score").innerHTML = p2Score;
    }
}
/*Codigo para indicar turnos*/
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + p2Name ;
}
else 
{
    question_turn = "player1"
    document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + p1Name ;
}
if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + p2Name ;
}
else 
{
    answer_turn = "player1"
    document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + p1Name ;
}
    document.getElementById("output").innerHTML = "";
}