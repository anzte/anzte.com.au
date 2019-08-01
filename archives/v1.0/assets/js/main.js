 jQuery(document).ready(function(){
  // preloader
  $('.preloader').fadeOut();
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,       
    });
  
    $(".section-one-slider-text").typed({
        strings:[
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red btn-light'>te</span><span> -</span><span> Technology People</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> A team</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> Born out of the BOX</span></span>",        
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Information Technology and Services Company</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Web Development</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Make people's lives SIMPLE</span></span>"
        // "<span class='anzte-black'> Make people's lives SIMPLE </span>,"
        "<span class='anzte-black'> We’re an agile, dynamic, full service web agency, offering </span>",
        "<span class='anzte-black'> a wide range of design and development services </span>",        
        "<span class='anzte-black'> <a href='/' class='anzte-slider-a anzte-black'>Information Technology &amp; Services </a></span>",
        "<span class='anzte-black'> Website Design &amp; Development </span>",
        "<span class='anzte-black'> Web Hosting &amp; Ongoing Support </span>",
        "<span class='anzte-black'> eCommerce Websites </span>",
        "<span class='anzte-black'> eMarketing Campaigns </span>",
        "<span class='anzte-black'> Professional in-house team who are passionate about </span>",
        "<span class='anzte-black'> delivering the highest quality work </span>",
        "<span class='anzte-black'> Website design and development are at the core of our </span>", 
        "<span class='anzte-black'> capabilities, with other services adding strength and </span>",
        "<span class='anzte-black'> depth to what we can offer </span>"
        
        ],
         typespeed:0,
         loop:true
         
    });

    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
          // console.log(top>=60);
        }
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
                // console.log('test message remove secondary');
            }
          // remove existing active  
    });    

    //collapse after clicking link
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
      }
    });

    // $("#navi a").on("click", function() {
    //   var id = $(this).attr('href');
    //   $('.anzte-padding-top').removeClass('anzte-padding-top'); // remove existing active
    //   $(id).addClass('anzte-padding-top'); // set current link as active
    // });

    $("a.footer_ref_link").on("click", function() {
      var id = $(this).attr('href');
      $('.anzte-padding-top').removeClass('anzte-padding-top'); // remove existing active
      $(id).addClass('anzte-padding-top'); // set current link as active
    });

    //magnific popup: Responsive jQuery Lightbox Plugin - Dmitry Semenov
    $('.works').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
        enabled:true
      }
    });

    //owl carousel
    $("#team-members").owlCarousel({
      items:3,
          autoplay:true,
          smartSpeed:700,
          // loop:true,
          autoplayHoverPause:true,
          responsive:{
            0:{ items:1 }, 
           480:{ items:2 },                                     
           768:{ items:3} 
          }
      });

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });

    new WOW().init();

});