document.addEventListener('DOMContentLoaded', e => {
   const comp = document.getElementById('s-page__transition18');
   if (!comp) return;
   
    document.addEventListener('click', e => {
        const source = e.target.closest('a');
        if (!source || source.dataset.transition !== 'true') return;
        
        e.preventDefault();
        
        comp.classList.add('s-fade-in');
        setTimeout(()=> {
            window.location.assign(source.href);
        }, 800);
    });
});

/*$(document).ready(function(){

  $("html").niceScroll({
      autohidemode: false, 
      zindex:9999
  });

});*/
document.addEventListener('DOMContentLoaded', e => {
    
    const cookieModal = new SM_CookiesModal({
        wrapperId: 's-cookie__modal20',
        closeMethods: [],
        designMode: false, showOnLoad: false, delay: 2000, enableAll: true, 
    });
    
});
$('body').css('overflow','hidden');
/*$('.loader17 .loader-inner').loaders();*/
$(window).load(function(){
  $('.loader17').delay(0).fadeOut(250) ;
   $('body').css('overflow','');
});
$(document).ready(function() {

	if ( $( "#nav-menu2" ).length ) {
		$('#nav-menu2').superfish({
				delay: 800, animation: {opacity:'show',height:'show'}, animationOut: {opacity:'hide',height:'hide'}, speed: 'Normal', speedOut: 'Slow', 
				disableHI:     true,
				cssArrows:     false 		
		});
	}
if($('.sf-menu .s-anchorlink')){
	if($(window).width() <= 768){
		$( ".sf-menu .s-anchorlink" ).click(function() {
			if ($('#nav-menu2').is(":visible")){
				$('#nav-menu2').slideUp("fast");
			}
			else{
				$('#nav-menu2').slideDown("fast");
			}
		});
	}
}
	$( "#mobile-menu-trigger2" ).click(function() {
	  
		if ($('#nav-menu2').is(":visible"))
		{
			$('#nav-menu2').slideUp("fast");
		} else {
			$('#nav-menu2').slideDown("fast");
		}
	  
	});
});
var s_scrollOffset = 50 ;
$(document).ready(function() {

  $('.s-headermenu9 .close-btn').click(function(){
      $('.s-headermenu9 #nav-menu9').removeClass($('.s-headermenu9 #nav-menu9').attr('data-openclass'));
      $('.s-headermenu9 #nav-menu9')
          .addClass($('.s-headermenu9 #nav-menu9').attr('data-closeclass')).delay(1000).queue(function() {
                    $('.s-headermenu9 #nav-menu9').removeClass($('.s-headermenu9 #nav-menu9').attr('data-closeclass')).addClass($('.s-headermenu9 #nav-menu9').attr('data-openclass'));
                              $('#nav-menu9').hide();
                              $(this).dequeue();
                            });

  });

  if ( $( "#nav-menu9" ).length ) {
    $('#nav-menu9').superclick({
        delay: 1000, animation: {opacity:'show',height:'show'}, animationOut: {opacity:'hide',height:'hide'}, speed: 'Normal', speedOut: 'Slow', 
        disableHI:     true,
        cssArrows:     false 
    });

	if($('.sf-menu .s-anchorlink')){
		if($(window).width() <= 768){
			$( ".sf-menu .s-anchorlink" ).click(function() {
				if ($('#nav-menu9').is(":visible")){
					$('#nav-menu9').slideUp("fast");
				}
				else{
					$('#nav-menu9').slideDown("fast");
				}
			});
		}
	}
        //get height menu-links to center it on screen
        var h1 = $('#nav-menu9 > li > a').height() - parseFloat($('#nav-menu9 > li > a').css('line-height'));
        var a = $('#nav-menu9 > li').length;
        h = h1 * a
    
        var window_height = $(window).height();
        var menu_height = $('#nav-menu9').height();
          
        if(window_height > -h){
          h = ($(window).height() / 2) + (h/2);
          $('#nav-menu9').css('padding-top', h +'px');
        }
    
  }

    $( "#mobile-menu-trigger9" ).click(function() {
      if ($('#nav-menu9').is(":visible"))
      {
          $('#nav-menu9').slideUp(0);
      } else {
          $('#nav-menu9').slideDown(0);
      }
    });


    if($('.s-headermenu9.navbar-fixed-top.s-sticky').html()){
        window.stickyOffset = $('.s-headermenu9.navbar-fixed-top').offset().top;
        var sticky = $('.s-headermenu9.navbar-fixed-top');
    }

    if($('.s-headermenu9.navbar-fixed-bottom.s-sticky').html()){
        window.stickyOffsetbottom = $('.s-headermenu9.navbar-fixed-bottom').offset().top;
        var scrollbottom = ($(window).scrollTop() + $(window).height()) - ($('.s-headermenu9.navbar-fixed-bottom').outerHeight() + 1);
    }

    var scroll = $(window).scrollTop() - 1;

    $(window).scroll(function(){   
      if($('.s-headermenu9.navbar-fixed-top.s-sticky').html()){
        var sticky = $('.s-headermenu9.navbar-fixed-top');
        var scroll = $(window).scrollTop() - 1;
        if (scroll >= stickyOffset){
          sticky.addClass('sticky-header');
        }
        else{
          sticky.removeClass('sticky-header');
        }
      }
      
      if($('.s-headermenu9.navbar-fixed-bottom.s-sticky').html()){
        var stickybottom = $('.s-headermenu9.navbar-fixed-bottom');
        var scrollbottom = ($(window).scrollTop() + $(window).height()) - ($('.s-headermenu9.navbar-fixed-bottom').outerHeight() + 1);
        if ((scrollbottom - ($('.s-headermenu9.navbar-fixed-bottom').outerHeight() + 1)) >= stickyOffsetbottom){
          stickybottom.addClass('sticky-header');
        }
        else{
          stickybottom.removeClass('sticky-header');
        }
      }
    });

});var s_scrollOffset = 50 ;
$(document).ready(function () {

  // make first element active when using anchor
  if ($(".s-navmenu ul.sf-menu > li:first-child > a").length) {
      if(($(".s-navmenu ul.sf-menu > li:first-child > a").attr('href')).substring(0,1) == "#"){
        $(".s-navmenu ul.sf-menu > li:first-child").addClass( 'active' );
      }
  }
    
  // user settings var scroll = 0; var beforeSpace = 100;  -> errors op dit script in design js
    var scroll = 0; var beforeSpace = 100; 

  if(scroll == 1){
    // mousewheel/touch on scroll active page

      // create variables
      var lastId,
          topMenu = $(".s-navmenu"),
          topMenuHeight = topMenu.outerHeight()+ beforeSpace,
          menuItems = topMenu.find("a[href*='#']"),

      // Anchors corresponding to menu items
          scrollItems = menuItems.map(function(){

          var href = $(this).attr("href"),
          id = href.substring(href.indexOf('#')),
          item = $(id);

          if (item.length) { return item; }

        });
  
    $(window).on('DOMMouseScroll mousewheel touchmove', function (){
      
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ( $(this).offset().top < fromTop )
           return this;
       });


       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
  
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });
  }
if($(".s-navmenu a[href*='#']").length){
    // on click active page
    $('.s-navmenu li').on( 'click', function() {  
      $( this ).parent().find( 'li.active' ).removeClass( 'active' );
      $( this ).addClass( 'active' ); 
    });
  }
  
    
});
