alert("Hello :)")
var result = confirm("Do you want to start the game?")
if (result == true){
	var name = prompt("Your name ?", '')
	var surname = prompt("Your surname ?", '')
	var age = prompt("Your age ?", '')
	var answer1 = "7"
	var answer2 = "50"
	var answer3 = "4"
	var answer4 = "1"
	var answer5 = "6"
	var question1 = prompt(" Сколько континентов на земле ? ", '')
	var question2 = prompt(" Сколько стран в Европе ?", '')
	var question3 = prompt(" Сколько пар ног имеет паук ?", '')
	var question4 = prompt(" Сколько спутников имеет Земля?", '')
	var question5 = prompt(" Сколько типов данных в JS?", '')
	var num = 1
	var trueAnswer = 0
	var points = 0
	if (question1 == answer1) {
		points += (num * 2) ** 2 // 4
		trueAnswer ++
	}
	num++;
	if (question2 == answer2) {
		points += (num * 2) ** 2 // 16
		trueAnswer ++
	}
	num++;
	if (question3 == answer3) {
		points += (num * 2) ** 2 // 36
		trueAnswer ++
	}
	num++;
	if (question4 == answer4) {
		points += (num * 2) ** 2 //64
		trueAnswer ++
	}
	num++;
	if (question5 == answer5) {
		points += (num * 2) ** 2 // 100
		trueAnswer ++
	}
	alert("Правельных ответов: " + trueAnswer )
	alert("Поздравляю , вы заработали " + points + " очков")
}else{
	alert("Game over :)")
}
