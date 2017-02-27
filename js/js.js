CountDownTimer('03/21/2017 00:1 AM', 'countdown'); //CountDownTimer(dt, id)

function CountDownTimer(dt, id)
{
	var end = new Date(dt); //new date = whatever stands in CountDownTimer

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {

			clearInterval(timer);
			document.getElementById("days").innerHTML = "GO";
			document.getElementById("hours").innerHTML = "PLAY";
			document.getElementById("minutes").innerHTML = "NOW";
			document.getElementById("seconds").innerHTML = "!";

			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
		
		if (days < 10) {
			document.getElementById("days").innerHTML = "0"+days;
		} else {
			document.getElementById("days").innerHTML = days;
		}
		
		if (hours < 10) {
			document.getElementById("hours").innerHTML = "0"+hours;
		} else {
			document.getElementById("hours").innerHTML = hours;
		}
		
		if (minutes < 10){
			document.getElementById("minutes").innerHTML = "0"+minutes;
		} else {
			document.getElementById("minutes").innerHTML = minutes;
		}
				
		if (seconds < 10){
			document.getElementById("seconds").innerHTML = "0"+seconds;
		} else {
			document.getElementById("seconds").innerHTML = seconds;
		}
	}
	timer = setInterval(showRemaining, 1000);
}
