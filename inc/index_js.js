
	$.ajax('data/services.json').done(function( data ){
		
		for( var i = 0; i < data.length; i++ ){
			var cont = '<div class="col-md-4">\
			<div class="item p-4 mb-5 animated fadeIn">\
			<h4 class="thm text-center mb-3">'+data[i].title+'</h4>\
			<div class="ico">\
			<div class="ico_inner">\
			<div class="icof display-3 text-center '+data[i].color+'"><i class="icon-'+data[i].icon+'"></i></div>\
			<div class="icob display-3 text-center '+data[i].color+'"><i class="icon-'+data[i].icon+'"></i></div>\
			</div>\
			</div>\
			<p class="content">'+data[i].content+'</p>\
			<div class="text-center w-100"><a href="'+data[i].link+'" class="btn-circle '+data[i].color+'_bg"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>\
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

			for( var i = 0; i < data.length; i++ ){
				var cont = '<div class="col-md-4 mt-4">\
				<div class="item animated fadeIn">\
				<div class="screen" style="background-image: url(img/projects/system_mockup.png);">\
				<img src="img/projects/'+data[i].img+'" class="img-fluid">\
				</div>\
				<h5 class="text-center mt-4 thm"><a href="'+data[i].link+'" target="_blank">'+data[i].name+'</a></h5>\
				<p class="text-center">'+data[i].category+'</p>\
				</div>\
				</div>';
				$(i).append(cont);
			}
		}).fail(function(data){
			console.log(data);
			alert("Something went wrong website did'nt load well, please refresh the page.");
		});

	/*---------------------*/
	$.ajax('data/testimonials.json').done(function( data ){
		
		for( var i = 0; i < data.length; i++ ){
			var active = i === 0 ? 'active' : '';
			var cont = '<div class="carousel-item '+active+'">\
			<div class="d-flex flex-column align-items-center w-100">\
			<div class="avatar mb-4"><img src="img/testimonials/'+data[i].avatar+'" alt="'+data[i].avatar+'" class="img-fluid rounded-circle"></div>\
			<h5 class="thm font-weight-bold">'+data[i].name+'</h5>\
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