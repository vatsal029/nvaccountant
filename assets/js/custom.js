$(document).ready(function () {
	
    $('[data-toggle="tooltip"]').tooltip();

	// $('.latest_game_slider').owlCarousel({       
 //        margin:20,
 //        responsiveClass:true,
 //        nav: false,
 //        loop: false,
 //        autoplay: false,
 //        dots: true,
 //        responsive:{
 //            0:{
 //                items:1,               
 //            },
 //            481:{
 //                items:2,               
 //            },
 //            768:{
 //                items:3,               
 //            },
 //            1200:{

 //                items:4,
 //            }
 //        }
 //    }) 

 //    $('.payment_slider').owlCarousel({       
 //        margin:20,
 //        responsiveClass:true,
 //        nav: true,
 //        loop: true,
 //        autoplay: false,
 //        autoplayTimeout: 2000,
 //        smartSpeed: 2000,
 //        animateIn: 'linear',
 //        animateOut: 'linear',
 //        dots: false,
 //        responsive:{
 //            0:{

 //                items:1,
 //            },
 //            481:{

 //                items:2,
 //            },
 //            768:{

 //                items:3,
 //            },
 //            1200:{

 //                items:4,
 //            },
 //            1400:{

 //                items:5,              
 //           }
 //        }
 //    }) 

    // $( '.top_header .nav-link' ).on( 'click', function(e){   
    //     var href = $(this).attr( 'href' );
    //     $( 'html, body' ).animate({
    //         scrollTop: $( href ).offset().top - 140
    //     }, '500' );
    //     e.preventDefault();  
    // });

    // $('.top_header .nav-link, .banner_btns .theme_btn').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $( $(this).attr('href') ).offset().top - 75
    //     }, 500);
    //     return false;
    // });

    
});


$(window).on('scroll', function () {
    stickyHeader()
});

// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function(i) {
//     // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll + 140) {
//                 $('.top_header .nav-link.active').removeClass('active');
//                 $('.top_header .nav-link').eq(i).addClass('active');
//             }
//         });

//     } else {

//         $('.top_header .nav-link.active').removeClass('active');
//         $('.top_header .nav-link:first').addClass('active');
//     }
// }).scroll();

function stickyHeader() {
    var sticky = $('.top_header');
    var scrollFromtop = $(window).scrollTop();
    var scrollLimit = $('.top_header').height() + 10;

    if (scrollFromtop < scrollLimit) {
        sticky.removeClass('sticky_header');
    } else {
        sticky.addClass('sticky_header');
    }
}



