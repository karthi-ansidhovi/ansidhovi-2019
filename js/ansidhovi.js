'use strict';
var i = 0;
var wh = $(window).innerHeight();

// setInterval(function(){
// 	$('.home_banner').css('background-position', i + 'px');
// 	i++;
// }, 50);
// setInterval(function(){
// 	$('.footer').css('background-position', i + 'px');
// 	i++;
// }, 50);

var time = 20;

var triangleAnim = ['#triangle1', '#triangle2', '#triangle3', '#triangle4'];

for( var tri = 0; tri < triangleAnim.length; tri++ ){
	$(triangleAnim[tri] + ' .anim').each(function(){
		var d = $(this);
		setTimeout(function() {
			d.addClass('go');
		}, time);
		time += 20;
	});
}

getHeights();

$(window).resize(function(){
	getHeights();
})

function getHeights(){
	var wh = $(window).innerHeight();
	$('#banner_wrapper').css('width', wh - 100);
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//==========================
