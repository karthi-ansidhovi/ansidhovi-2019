
$.ajax('data/services.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-md-6 col-lg-4">\
		<div class="item p-4 mb-5">\
		<h4 class="thm text-center mb-3">'+data[i].title+'</h4>\
		<div class="ico display-3 text-center '+data[i].color+'"><i class="icon-'+data[i].icon+'"></i></div>\
		<p class="content text-center">'+data[i].content+'</p>\
		<div class="w-100"><a href="'+data[i].link+'" class="btn-circle m-auto '+data[i].color+'_bg"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>\
		</div>\
		</div>';
		$('#services_list').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});
/*---------------------*/
$.ajax('data/projects.json').done(function( data ){

	for( var i = 0; i < 3; i++ ){
		var cont = '<div class="col-sm-6 col-lg-4 mt-4">\
		<div class="item">\
		<div class="screen" style="background-image: url(img/projects/web/system_mockup.png);">\
		<img src="img/projects/web/'+data[i].img+'" class="img-fluid">\
		</div>\
		<div class="d-flex box-shadow"><div id="oval" class="m-auto"></div></div>\
		<h5 class="text-center mt-4 thm"><a href="'+data[i].link+'" target="_blank">'+data[i].name+'</a></h5>\
		<p class="text-center">'+data[i].category+'</p>\
		</div>\
		</div>';
		$('#recent_projects').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});
/*---------------------*/
$.ajax('data/projects.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-lg-4 col-sm-6 mt-4 pro_wrap more_wrap" style="display:none;">\
		<a href="'+data[i].link+'" target="_blank">\
		<div class="item">\
		<div class="screen" style="background-image: url(img/projects/web/system_mockup.png);">\
		<img src="img/projects/web/'+data[i].img+'" class="img-fluid">\
		</div>\
		<div class="d-flex box-shadow"><div id="oval" class="m-auto"></div></div>\
		<h5 class="text-center mt-4 thm">'+data[i].name+'</h5>\
		</div>\
		</a>\
		</div>';
		$('#projects').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

$( document ).ready(function () {
		$(".more_wrap").slice(0, 12).show();
		if ($(".pro_wrap:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".more_wrap:hidden").slice(0, 12).slideDown();
			if ($(".more_wrap:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	});
/*-------------------------*/
$.ajax('data/pro_logo.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-lg-4 col-sm-6 mt-4 mb-4">\
		<div class="item">\
		<div class="screen" style="background-image: url(img/projects/logo/logo_mockup.png);">\
		<img src="img/projects/logo/'+data[i].img+'" class="img-fluid">\
		</div>\
		</div>\
		</div>';
		$('#project_logo').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

/*-------------------------*/

$.ajax('data/pro_print.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-lg-4 col-sm-6 mt-4">\
		<div class="item">\
		<a class="thumbnail" data-id="'+data[i].id+'" data-name="'+data[i].name+'" data-gall="'+data[i].gallery+'">\
		<img src="img/projects/print/'+data[i].img+'" class="img-fluid w-100"></a>\
		</div>\
		</div>';
		$('#projects_print').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

/*-------------------------*/
$.ajax('data/newsletter.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<a class="thumbnail" data-name="'+data[i].name+'" data-img1="'+data[i].img1+'"><div class="col-lg-4 col-sm-6 mt-4 nl_wrap nlmore_wrap" style="display:none;">\
		<div class="item">\
		<div class="screen" style="background-image: url(img/projects/newsletter/mail_mockupB.png);">\
		<img src="img/projects/newsletter/'+data[i].img+'" class="img-fluid">\
		<div class="screen1" style="background-image: url(img/projects/newsletter/mail_mockupF.png);">\
		</div>\
		</div>\
		</div></a>';
		$('#newsletter').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

$( document ).ready(function () {
		$(".nlmore_wrap").slice(0, 12).show();
		if ($(".nl_wrap:hidden").length != 0) {
			$("#NLloadMore").show();
		}		
		$("#NLloadMore").on('click', function (e) {
			e.preventDefault();
			$(".nlmore_wrap:hidden").slice(0, 12).slideDown();
			if ($(".nlmore_wrap:hidden").length == 0) {
				$("#NLloadMore").fadeOut('slow');
			}
		});
	});

/*_____________________________________*/
$.ajax('data/mob_apps.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-lg-4 col-sm-6">\
		<a href="'+data[i].link+'" target="_blank">\
		<div class="item m-auto">\
		<div class="screen" style="background-image: url(img/projects/apps/mobile_mockup1.png);">\
		<img src="img/projects/apps/'+data[i].img+'" class="img-fluid">\
		</div>\
		<h5 class="text-center mt-4 thm">'+data[i].name+'</h5>\
		</div>\
		</a>\
		</div>';
		$('#mob_apps').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

/*-------------------------*/
$.ajax('data/testimonials.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var active = i === 0 ? 'active' : '';
		var cont = '<div class="carousel-item '+active+'">\
		<div class="d-flex flex-column align-items-center w-100">\
		<div class="avatar mb-4"><img src="img/testimonials/'+data[i].avatar+'" alt="'+data[i].avatar+'" class="img-fluid rounded-circle"></div>\
		<h5 class="text-center thm font-weight-bold">'+data[i].name+'</h5>\
		<h5 class="">'+data[i].organization+'</h5>\
		<small><i>'+data[i].designation+'</i></small>\
		<p class="text-center mt-4">'+data[i].testimonial+'</p>\
		</div>\
		</div>';
		$('#testimonial_carousel .carousel-inner').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});

/*--------------------*/
$.ajax('data/testimonials.json').done(function( data ){

	for( var i = 0; i < data.length; i++ ){
		var cont = '<div class="col-md-10 offset-md-1 d-md-flex mb-3"><div class="row">\
		<div class="col-md-2 d-flex">\
		<div class="avatar mb-1 m-auto"><img src="img/testimonials/'+data[i].avatar+'" alt="'+data[i].avatar+'" class="img-fluid rounded-circle"></div></div>\
		<div class="col-md-10"><h5 class="text-center text-md-left thm font-weight-bold">'+data[i].name+'</h5>\
		<h5 class="text-center text-md-left">'+data[i].organization+'</h5>\
		<p class="text-center text-md-left mb-0"><small><i>'+data[i].designation+'</i></small></p>\
		<p class="mt-1 text-center text-md-left">'+data[i].testimonial+'</p><hr>\
		</div></div></div>';
		$('.testimonial_wrapper #testimonial').append(cont);
	}
}).fail(function(data){
	console.log(data);
	alert("Something went wrong website did'nt load well, please refresh the page.");
});
// ---------------------------

$("#toggle").click(function() {
	$(this).toggleClass("open");
	$("#menu").toggleClass("opened");
});

/*---------------------------*/
jQuery(document).ready(function(){
	jQuery(".titleWrapper").addClass("ready");

	jQuery(".titleWrapper h1").each(function(){
		var fullString;
		var characters = jQuery(this).text().split("");

		$this = jQuery(this);
		$this.empty();
		$.each(characters, function (i, el) {
			if(el == " "){el = "&nbsp;"};
			$this.append("<span>" + el + "</span");
		});

	});

});

// -------------------