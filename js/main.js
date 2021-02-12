const first = document.querySelector('#number1'); //reprend l'id de l'objet label "number 1"
const second = document.querySelector('#number2'); //reprend l'id de l'objet label "number 2"

const result = document.querySelector('.result'); //reprend la classe de l'objet p

if (window.Worker) {
	const myWorker = new Worker("./../../js/worker.js"); //création d'un nouveau worker

	first.onchange = function() { //quand on interragit avec le label via l'événement onchange, on y associt une fonction
	  myWorker.postMessage([first.value, second.value]); //envoie de msg au worker
	  console.log('Message posted to worker');
	}

	second.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	myWorker.onmessage = function(e) {
		result.textContent = e.data; //Maj le contenu du text
		console.log('Message received from worker');
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}