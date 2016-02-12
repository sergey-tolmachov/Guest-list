// $(window).scroll(function() {
//     if ($(document).scrollTop() > 375) {
// 	   	$(".header-container").addClass("header1");
// 	   	$(".header-container2").addClass("header2");
// 	   	}
// 	   	else {
// 	    $(".header-container").addClass("header2");
// 	    $(".header-container2").addClass("header1");
//       }
// });


$(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
	   	$(".header-container2").fadeIn();
	   	}
	   	else {
	    $(".header-container2").fadeOut();
      }
});
