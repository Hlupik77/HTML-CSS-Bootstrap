$(function(){
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        startPosition:1,
        navText:['<img src="img/left.svg">', '<img src="img/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.contributor-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        startPosition:1,
        navText:['<img src="img/left.svg">', '<img src="img/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
          
    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
        $(this)
          .addClass('active').siblings().removeClass('active')
          
          .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

});