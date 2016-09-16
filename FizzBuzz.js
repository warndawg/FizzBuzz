var el;
for (var counter = 1; counter < 101; counter++ ){
	if (counter%3 === 0 && counter%5 === 0){
		el = document.createElement("div");
		el.innerHTML = '<h4>FizzBuzz!</h4>';
		el.className = 'fizzBuzz' + ' circle';
	} else if (counter%3 === 0){
		el = document.createElement("div");
		el.innerHTML = '<h4>Fizz!</h4>';
		el.className = 'fizz circle';
	} else if (counter%5 === 0) {
		el = document.createElement("div");
		el.innerHTML = '<h4>Buzz!</h4>';
		el.className = 'buzz' + ' circle';
	} else {
		el = document.createElement("div");
		el.innerHTML = '<h4>' + counter + '<h4>';
		el.className = 'none' + ' circle';
	}
	document.getElementById('content').appendChild(el);
}