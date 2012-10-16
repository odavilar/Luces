$(document).ready(function() {
	window.setInterval("refreshCamera();", 1000);
});

var url = 'http://o.0-0o.org/luces/cgi-bin/grab.cgi?1&refresh=';
var forcerefresh = 0;

function refreshCamera()
{
	forcerefresh = forcerefresh + 1;
	$('#myImageId').attr('src',url+forcerefresh);
}
