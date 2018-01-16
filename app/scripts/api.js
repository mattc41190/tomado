function convertMinutesToSeconds(minutes){
	return minutes * 60;
}

function _getMinutes(seconds){
	return Math.floor(seconds / 60);
}

// Get remaining seconds
function _getSeconds(seconds){
	return Math.floor(seconds % 60);
}

function minutesAndSecondsToDecimal(minutes, seconds){
	return parseFloat(minutes) + parseFloat(seconds / 60);
}

function formatTime(seconds){
	const minute = _getMinutes(seconds);
	// if there are less than 10 seconds left prepend a "0" to the value
	const second = _getSeconds(seconds) >= 10 ? _getSeconds(seconds) : '0' + _getSeconds(seconds);
	return minute + ':' + second;
}

function unformatTime(formattedTime){
	let splitTime = formattedTime.split(':');
	return minutesAndSecondsToDecimal(splitTime[0], splitTime[1]);

}

module.exports = {
	convertMinutesToSeconds,
	_getMinutes,
	_getSeconds,
	formatTime,
	unformatTime
};
