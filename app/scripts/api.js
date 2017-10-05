function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}

function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10
		? '0'
		: '') + seconds;
}

module.exports = {
    addMinutes,
    millisToMinutesAndSeconds
};
