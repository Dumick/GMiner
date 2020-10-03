let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');
let num = Math.floor(Math.random() * (100 + 1)) + 0;
console.log(num);

let k = 7;

if (k > 0){
	button.onclick = function() {
		if (inputIn.value > num ) 
			alert('Заданое число меньше! Количество попыток = ' + k);

		else if(inputIn.value < num)
			alert('Заданое число больше! Количество попыток = ' + k);

		else if (inputIn.value == num){
			alert('Угадали');
			window.location.reload(); 
		}

		if (k < 0){
			alert('Все попытки исчерпаны, вы проиграли!');
			window.location.reload(); 
		}

		k--;
	};
}
	

	
	


