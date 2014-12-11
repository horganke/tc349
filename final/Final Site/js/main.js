$(window).load(function(){
	$('#one').one('click', function() {
	    $('#one-rating').html(function(i, val) { return val*1+1 });
	});
	$('#zero').one('click', function() {
	    $('#zero-rating').html(function(i, val) { return val*1+1 });
	});
});