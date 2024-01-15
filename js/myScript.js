
$(document).ready(function(){
    $('#slider-1').owlCarousel({
        loop:true,
        nav:false,
        margin:0,
        items:1,
        center:true,
        mouseDrag:true,
        touchDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
        nav:true,
        navText:["A", "b"],
        animateIn: 'animate__backInRight',
    });

    $('#slider-2').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        items:3,
        center:false,
        mouseDrag:true,
        touchDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
    });


    $('#owl_carosel_box_').owlCarousel({
        loop:true,
        center:false,
        margin:30,
        mouseDrag:true,
        touchDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1,
                center:false,
            },
            600:{
                items:2,
                center:false,
            },
            1000:{
                items:3,
                center:false,
            }
        }
    });



    var owl = $('#owl_carosel_box_');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    $(".counter_num").counterUp({
        delay:10,
        time:1500
    });


    $('.sponsor').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })



    $('#case_owl_carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        
        
    })

        var owl = $('#case_owl_carousel');
        owl.owlCarousel();
        // Go to the next item
        $('.custom_owl-nav').click(function() {
            owl.trigger('next.owl.carousel');
        })



      
 //Tabs Box
 if ($('.tabs-box').length) {
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).is(':visible')) {
            return false;
        } else {
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        }
    });
}


$('.cta_carosel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1200:{
            items:3
        }
    }
})








  });
  

 
