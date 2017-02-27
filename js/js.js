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

		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
	}
	timer = setInterval(showRemaining, 1000);
}