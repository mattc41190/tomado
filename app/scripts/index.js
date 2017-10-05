console.log(__dirname);

const millisToMinutesAndSeconds = require('./api.js').millisToMinutesAndSeconds
const addMinutes = require('./api.js').addMinutes
const timer = document.getElementById('timer');
const pomoBtn = document.getElementById('pomoBtn');
const soundName = 'alarm'
const sound = new Audio(`${__dirname}/assets/sounds/${soundName}.mp3`);
let interval;

function createTimer(minutes) {
	let startTime = new Date();
	let endTime = addMinutes(startTime, minutes);
	interval = setInterval(() => {
		if (endTime - new Date() < 0) {
			clearInterval(interval);
			interval = null;
			sound.play();
			return;
		}
		timer.innerHTML = millisToMinutesAndSeconds(endTime - new Date());
	}, 1000)
}

pomoBtn.addEventListener('click', (e) => {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
	createTimer(25);
});
