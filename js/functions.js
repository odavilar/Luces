$(document).ready(
		function(){
			$("#status").hide();
			$("input").click(function(){
				var elemento = $(this).attr("id");
				if( elemento == "element_1_1" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "1", stat: "on"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_1"]').animate({ backgroundColor: "#9cffb3" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}else if( elemento == "element_1_2" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "1", stat: "off"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_1"]').animate({ backgroundColor: "#ff9494" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}else if( elemento == "element_2_1" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "2", stat: "on"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_2"]').animate({ backgroundColor: "#9cffb3" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}else if( elemento == "element_2_2" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "2", stat: "off"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_2"]').animate({ backgroundColor: "#ff9494" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}else if( elemento == "element_3_1" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "3", stat: "on"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_3"]').animate({ backgroundColor: "#9cffb3" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}else if( elemento == "element_3_2" ){
					var request = $.ajax({
						url: "submit.php",
						type: 'POST',
						data: { light: "3", stat: "off"},
						dataType: "json"
					});
					request.done(function(msg){
						$('div[id="in_3"]').animate({ backgroundColor: "#ff9494" },500);
						//$('#status').html(msg.test).fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
					request.fail(function(msg){
						$('#status').html("Error").fadeIn(1000,function(){$(this).delay(2000).fadeOut();});
					});
				}
			});
			window.setInterval("refreshCamera();", 1000);
		}
);

var url1 = 'http://o.0-0o.org/cgi-bin/grab.cgi?1&refresh=';
var forcerefresh = 0;

function refreshCamera()
{
	forcerefresh = forcerefresh + 1;
	$('#myImageId').attr('src',url1+forcerefresh);
}
