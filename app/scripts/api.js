function convertMinuteToSecond(minutes){
	return minutes * 60;
}

function getMinute(seconds){
	return Math.floor(seconds / 60);
}

function getSecond(seconds){
	return Math.floor(seconds % 60);
}

function minutesAndSecondsToDecimal(minutes, seconds){
	return parseFloat(minutes) + parseFloat(seconds / 60);
}

function formatTime(time){
	let minute = getMinute(time);
	let second = getSecond(time) >= 10 ? getSecond(time) : '0' + getSecond(time);
	return minute + ':' + second;
}

function unformatTime(minuteString){
	console.log('in unformatTime');
	let splitTime = minuteString.split(':');
	return minutesAndSecondsToDecimal(splitTime[0], splitTime[1]);

}

module.exports = {
	convertMinuteToSecond,
	getMinute,
	getSecond,
	formatTime,
	unformatTime
};
