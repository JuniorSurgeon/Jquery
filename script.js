$(document).ready(function() {
	var submitButton = $("#weatherSubmit");
	console.log(submitButton);
	$("#weatherSubmit").click(function (e) {
		e.preventDefault();
		var value = $("#weatherInput").val();
		console.log(value);
		var myurl = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=0490f4e046759d591441e06392307b0c";
		$.ajax({
			url: myurl,
			dataType: "json",
			success: function (json) {
				console.log(json);
			}
		});
	});
});