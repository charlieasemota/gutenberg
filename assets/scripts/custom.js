

/* ////////////////////
FUNCTIONS
/////////////////// */

function pg_categories (list) {
	var categories = new Array();
		categories = [
			"Agriculture",
			"Animal",
			"Children's",
			"Classic",
			"Countries",
			"Crime",
			"Education",
			"Fine arts",
			"General Works",
			"Geography",
			"Health",
			"History",
			"Language and Literature",
			"Law",
			"Library Science",
			"Music",
			"Periodicals",
			"Political Science",
			"Psychology and Philosophy",
			"Religion",
			"Science",
			"Social Science",
			"Technology",
			"Wars"
		];

	// options list
	if(list=="options") {
		for (i=0; i<categories.length; i++) {
			document.write(" \
				<option value='"+ categories[i] +"'>"+ categories[i] +"</option> \
			");
		}
	}
	// sidelist
	if(list=="side") {
		for (i=0; i<categories.length; i++) {
			document.write(" \
				<li class='grid3 padding'><a href='browse.php'>"+ categories[i] +"</a></li> \
			");
		}
	}
	// side responsive
	if(list=="responsive") {
		for (i=0; i<categories.length; i++) {
			document.write(" \
				<option value='browse-category.php'>"+ categories[i] +"</option> \
			");
		}
	}
}	
	
function changePage () {
	var goToPage = document.forms["resp_category"]["category"].value;
	if(goToPage == 'login') {
		document.getElementById('login').style.display='block';
		return false;
	}
	if (goToPage == 'logout') {
		setCookie('logged', '', 1);
		setCookie('loggedOut', 'yes', 1);
		window.location.replace("index.shtml");
		return false;
	}
	if(goToPage != 'login' || goToPage != 'logout') {
		window.location.replace(goToPage);
	}
}
	
/* ////////////////////
ON BROWSER EVENTS
//////////////////// */

/* ////////////////////
Document Ready
//////////////////// */

$(document).ready(function($) {

	$('ul.mobile a').click(function(event) {
		$('nav#responsive-menu').fadeIn();
		return false;
	});
	$('nav#responsive-menu a.close_menu').click(function(event) {
		$('nav#responsive-menu').fadeOut();
		return false;
	});

	$('.open-filters a').click(function(event) {
		$('.filter').slideDown('fast');
		$(this).parent().slideUp('fast');
	});

});

/* ////////////////////
On Window Load
//////////////////// */

$(window).load(function() {
	

	
});

/* ////////////////////
On Window Resize
//////////////////// */

$(window).resize(function () {
	
}).resize();

/* ////////////////////
On Window Scroll
//////////////////// */

$(window).scroll(function () {
	
});