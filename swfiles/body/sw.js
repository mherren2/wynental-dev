var s_scrollOffset = 100;

function s_moveTo(contentArea){

    var goPosition = $(contentArea).offset().top - s_scrollOffset;
    $('html,body').animate({ scrollTop: goPosition}, 'slow');

}

swvar_socialtools = false; //set in template properties on/off

if (swvar_socialtools == true)
{
	swvar_socialtools = '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>';
}


$(document).ready(function(){

	$("a[rel^='prettyPhoto']").prettyPhoto({

        show_title: false,
        hideflash: true,
        deeplinking: false,
        social_tools: swvar_socialtools,
        changepicturecallback: function(){
            $('div.pp_default .pp_close').text('');
            if($('.pp_description').text() == "undefined"){
                $('.pp_description').text("");
            }
        }

    });
  
    // anchorlinks
    $( ".sw_alink, .s-btn, .s-btn-alt, .s-navmenu ul li a, .s-navmenu ul li ul li a" ).each(function( index ) {
  
      var hreflink = $(this).attr('href');
      
      if (hreflink != undefined)
      {
      
        if ((hreflink[0] == "#") && (hreflink.length > 1))
        {
          $(this).addClass("s-anchorlink");
        }
      }
      
    }); 
  
    $(".s-anchorlink").click(function( event ) {
        
        event.preventDefault();
        var hreflink = $(this).attr('href');
        s_moveTo(hreflink);

    });	  
	
	//hover animation links
	
	$( ".hover_animated" ).hover(
	  
	  function() {
		
		//check animation function
		anim_hovereffect = "";
		anim_hoverouteffect = "";

		s_animate_hover(this);
		s_animate_hoverout(this);
		
		if ($( this ).hasClass( "animated" ))
		{
			$( this ).removeClass( "animated" );
		} 
		// console.log("hover over");
		$( this ).addClass( "animated " + anim_hovereffect );
			
			
	  }, function() {
		
		// console.log("hover out");
		$( this ).removeClass( "animated " + anim_hovereffect );
		
		if (anim_hoverouteffect != "")
		{
			$( this ).addClass( "animated " + anim_hoverouteffect );
		}
		
	  }
	  
	);
	
});

//--- ANIMATION FUNCTION
function s_animate_hover(el) {

	if ($( el ).hasClass( "hover_bounce" ))
	{
		anim_hovereffect = "bounce";
	} else if ($( el ).hasClass( "hover_flash" )) {	
		anim_hovereffect = "flash";
	} else if ($( el ).hasClass( "hover_pulse" )) {	
		anim_hovereffect = "pulse";
	} else if ($( el ).hasClass( "hover_rubberBand" )) {	
		anim_hovereffect = "rubberBand";
	} else if ($( el ).hasClass( "hover_shake" )) {	
		anim_hovereffect = "shake";
	} else if ($( el ).hasClass( "hover_swing" )) {	
		anim_hovereffect = "swing";
	} else if ($( el ).hasClass( "hover_tada" )) {	
		anim_hovereffect = "tada";
	} else if ($( el ).hasClass( "hover_wobble" )) {	
		anim_hovereffect = "wobble";
	} else if ($( el ).hasClass( "hover_jello" )) {	
		anim_hovereffect = "jello";
	} else if ($( el ).hasClass( "hover_bounceIn" )) {	
		anim_hovereffect = "bounceIn";
	} else if ($( el ).hasClass( "hover_bounceInDown" )) {	
		anim_hovereffect = "bounceInDown";
	} else if ($( el ).hasClass( "hover_bounceInLeft" )) {	
		anim_hovereffect = "bounceInLeft";
	} else if ($( el ).hasClass( "hover_bounceInRight" )) {	
		anim_hovereffect = "bounceInRight";
	} else if ($( el ).hasClass( "hover_bounceInUp" )) {	
		anim_hovereffect = "bounceInUp";
	} else if ($( el ).hasClass( "hover_bounceOut" )) {	
		anim_hovereffect = "bounceOut";
	} else if ($( el ).hasClass( "hover_bounceOutDown" )) {	
		anim_hovereffect = "bounceOutDown";
	} else if ($( el ).hasClass( "hover_bounceOutLeft" )) {	
		anim_hovereffect = "bounceOutLeft";
	} else if ($( el ).hasClass( "hover_bounceOutRight" )) {	
		anim_hovereffect = "bounceOutRight";
	} else if ($( el ).hasClass( "hover_bounceOutUp" )) {	
		anim_hovereffect = "bounceOutUp";
	} else if ($( el ).hasClass( "hover_fadeIn" )) {	
		anim_hovereffect = "fadeIn";
	} else if ($( el ).hasClass( "hover_fadeInDown" )) {	
		anim_hovereffect = "fadeInDown";
	} else if ($( el ).hasClass( "hover_fadeInDownBig" )) {	
		anim_hovereffect = "fadeInDownBig";
	} else if ($( el ).hasClass( "hover_fadeInLeft" )) {	
		anim_hovereffect = "fadeInLeft";
	} else if ($( el ).hasClass( "hover_fadeInLeftBig" )) {	
		anim_hovereffect = "fadeInLeftBig";
	} else if ($( el ).hasClass( "hover_fadeInRight" )) {	
		anim_hovereffect = "fadeInRightBig";
	} else if ($( el ).hasClass( "hover_fadeInUp" )) {	
		anim_hovereffect = "fadeInUpBig";
	} else if ($( el ).hasClass( "hover_fadeOut" )) {	
		anim_hovereffect = "fadeOut";
	} else if ($( el ).hasClass( "hover_fadeOutDown" )) {	
		anim_hovereffect = "fadeOutDown";
	} else if ($( el ).hasClass( "hover_fadeOutDownBig" )) {	
		anim_hovereffect = "fadeOutLeft";
	} else if ($( el ).hasClass( "hover_fadeOutLeftBig" )) {	
		anim_hovereffect = "fadeOutLeftBig";
	} else if ($( el ).hasClass( "hover_fadeOutRight" )) {	
		anim_hovereffect = "fadeOutRight";
	} else if ($( el ).hasClass( "hover_fadeOutRightBig" )) {	
		anim_hovereffect = "fadeOutRightBig";	
	} else if ($( el ).hasClass( "hover_fadeOutUp" )) {	
		anim_hovereffect = "fadeOutUp";	
	} else if ($( el ).hasClass( "hover_fadeOutUpBig" )) {	
		anim_hovereffect = "fadeOutUpBig";	
	} else if ($( el ).hasClass( "hover_flipInX" )) {	
		anim_hovereffect = "flipInX";	
	} else if ($( el ).hasClass( "hover_flipInY" )) {	
		anim_hovereffect = "flipInY";	
	} else if ($( el ).hasClass( "hover_flipOutX" )) {	
		anim_hovereffect = "flipOutX";	
	} else if ($( el ).hasClass( "hover_flipOutY" )) {	
		anim_hovereffect = "flipOutY";	
	} else if ($( el ).hasClass( "hover_lightSpeedIn" )) {	
		anim_hovereffect = "lightSpeedIn";	
	} else if ($( el ).hasClass( "hover_lightSpeedOut" )) {	
		anim_hovereffect = "lightSpeedOut";	
	} else if ($( el ).hasClass( "hover_rotateIn" )) {	
		anim_hovereffect = "rotateIn";	
	} else if ($( el ).hasClass( "hover_rotateInDownLeft" )) {	
		anim_hovereffect = "rotateInDownLeft";	
	} else if ($( el ).hasClass( "hover_rotateInDownRight" )) {	
		anim_hovereffect = "rotateInDownRight";	
	} else if ($( el ).hasClass( "hover_rotateInUpLeft" )) {	
		anim_hovereffect = "rotateInUpLeft";	
	} else if ($( el ).hasClass( "hover_rotateInUpRight" )) {	
		anim_hovereffect = "rotateInUpRight";			
	} else if ($( el ).hasClass( "hover_rotateOut" )) {	
		anim_hovereffect = "rotateOut";			
	} else if ($( el ).hasClass( "hover_rotateOutDownLeft" )) {	
		anim_hovereffect = "rotateOutDownLeft";			
	} else if ($( el ).hasClass( "hover_rotateOutDownRight" )) {	
		anim_hovereffect = "rotateOutDownRight";			
	} else if ($( el ).hasClass( "hover_rotateOutUpLeft" )) {	
		anim_hovereffect = "rotateOutUpLeft";			
	} else if ($( el ).hasClass( "hover_rotateOutUpRight" )) {	
		anim_hovereffect = "rotateOutUpRight";			
	} else if ($( el ).hasClass( "hover_hinge" )) {	
		anim_hovereffect = "hinge";			
	} else if ($( el ).hasClass( "hover_rollIn" )) {	
		anim_hovereffect = "rollIn";			
	} else if ($( el ).hasClass( "hover_rollOut" )) {	
		anim_hovereffect = "rollOut";			
	} else if ($( el ).hasClass( "hover_zoomIn" )) {	
		anim_hovereffect = "zoomIn";			
	} else if ($( el ).hasClass( "hover_zoomInDown" )) {	
		anim_hovereffect = "zoomInDown";			
	} else if ($( el ).hasClass( "hover_zoomInLeft" )) {	
		anim_hovereffect = "zoomInLeft";			
	} else if ($( el ).hasClass( "hover_zoomInRight" )) {	
		anim_hovereffect = "zoomInRight";			
	} else if ($( el ).hasClass( "hover_zoomInUp" )) {	
		anim_hovereffect = "zoomInUp";			
	} else if ($( el ).hasClass( "hover_zoomOut" )) {	
		anim_hovereffect = "zoomOut";			
	} else if ($( el ).hasClass( "hover_zoomOutDown" )) {	
		anim_hovereffect = "zoomOutDown";	
	} else if ($( el ).hasClass( "hover_zoomOutLeft" )) {	
		anim_hovereffect = "zoomOutLeft";			
	} else if ($( el ).hasClass( "hover_zoomOutRight" )) {	
		anim_hovereffect = "zoomOutRight";			
	} else if ($( el ).hasClass( "hover_zoomOutUp" )) {	
		anim_hovereffect = "zoomOutUp";			
	} else if ($( el ).hasClass( "hover_slideInDown" )) {	
		anim_hovereffect = "slideInDown";		
	} else if ($( el ).hasClass( "hover_slideInLeft" )) {	
		anim_hovereffect = "slideInLeft";			
	} else if ($( el ).hasClass( "hover_slideInRight" )) {	
		anim_hovereffect = "slideInRight";			
	} else if ($( el ).hasClass( "hover_slideInUp" )) {	
		anim_hovereffect = "slideInUp";			
	} else if ($( el ).hasClass( "hover_slideOutDown" )) {	
		anim_hovereffect = "slideOutDown";		
	} else if ($( el ).hasClass( "hover_slideOutLeft" )) {	
		anim_hovereffect = "slideOutLeft";			
	} else if ($( el ).hasClass( "hover_slideOutRight" )) {	
		anim_hovereffect = "slideOutRight";			
	} else if ($( el ).hasClass( "hover_slideOutUp" )) {	
		anim_hovereffect = "slideOutUp";			
	}		

		
	$( this ).removeClass( anim_hovereffect );

}

function s_animate_hoverout(el) {

	if ($( el ).hasClass( "hout_bounce" ))
	{
		anim_hoverouteffect = "bounce";
	} else if ($( el ).hasClass( "hout_flash" )) {	
		anim_hoverouteffect = "flash";
	} else if ($( el ).hasClass( "hout_pulse" )) {	
		anim_hoverouteffect = "pulse";
	} else if ($( el ).hasClass( "hout_rubberBand" )) {	
		anim_hoverouteffect = "rubberBand";
	} else if ($( el ).hasClass( "hout_shake" )) {	
		anim_hoverouteffect = "shake";
	} else if ($( el ).hasClass( "hout_swing" )) {	
		anim_hoverouteffect = "swing";
	} else if ($( el ).hasClass( "hout_tada" )) {	
		anim_hoverouteffect = "tada";
	} else if ($( el ).hasClass( "hout_wobble" )) {	
		anim_hoverouteffect = "wobble";
	} else if ($( el ).hasClass( "hout_jello" )) {	
		anim_hoverouteffect = "jello";
	} else if ($( el ).hasClass( "hout_bounceIn" )) {	
		anim_hoverouteffect = "bounceIn";
	} else if ($( el ).hasClass( "hout_bounceInDown" )) {	
		anim_hoverouteffect = "bounceInDown";
	} else if ($( el ).hasClass( "hout_bounceInLeft" )) {	
		anim_hoverouteffect = "bounceInLeft";
	} else if ($( el ).hasClass( "hout_bounceInRight" )) {	
		anim_hoverouteffect = "bounceInRight";
	} else if ($( el ).hasClass( "hout_bounceInUp" )) {	
		anim_hoverouteffect = "bounceInUp";
	} else if ($( el ).hasClass( "hout_bounceOut" )) {	
		anim_hoverouteffect = "bounceOut";
	} else if ($( el ).hasClass( "hout_bounceOutDown" )) {	
		anim_hoverouteffect = "bounceOutDown";
	} else if ($( el ).hasClass( "hout_bounceOutLeft" )) {	
		anim_hoverouteffect = "bounceOutLeft";
	} else if ($( el ).hasClass( "hout_bounceOutRight" )) {	
		anim_hoverouteffect = "bounceOutRight";
	} else if ($( el ).hasClass( "hout_bounceOutUp" )) {	
		anim_hoverouteffect = "bounceOutUp";
	} else if ($( el ).hasClass( "hout_fadeIn" )) {	
		anim_hoverouteffect = "fadeIn";
	} else if ($( el ).hasClass( "hout_fadeInDown" )) {	
		anim_hoverouteffect = "fadeInDown";
	} else if ($( el ).hasClass( "hout_fadeInDownBig" )) {	
		anim_hoverouteffect = "fadeInDownBig";
	} else if ($( el ).hasClass( "hout_fadeInLeft" )) {	
		anim_hoverouteffect = "fadeInLeft";
	} else if ($( el ).hasClass( "hout_fadeInLeftBig" )) {	
		anim_hoverouteffect = "fadeInLeftBig";
	} else if ($( el ).hasClass( "hout_fadeInRight" )) {	
		anim_hoverouteffect = "fadeInRightBig";
	} else if ($( el ).hasClass( "hout_fadeInUp" )) {	
		anim_hoverouteffect = "fadeInUpBig";
	} else if ($( el ).hasClass( "hout_fadeOut" )) {	
		anim_hoverouteffect = "fadeOut";
	} else if ($( el ).hasClass( "hout_fadeOutDown" )) {	
		anim_hoverouteffect = "fadeOutDown";
	} else if ($( el ).hasClass( "hout_fadeOutDownBig" )) {	
		anim_hoverouteffect = "fadeOutLeft";
	} else if ($( el ).hasClass( "hout_fadeOutLeftBig" )) {	
		anim_hoverouteffect = "fadeOutLeftBig";
	} else if ($( el ).hasClass( "hout_fadeOutRight" )) {	
		anim_hoverouteffect = "fadeOutRight";
	} else if ($( el ).hasClass( "hout_fadeOutRightBig" )) {	
		anim_hoverouteffect = "fadeOutRightBig";	
	} else if ($( el ).hasClass( "hout_fadeOutUp" )) {	
		anim_hoverouteffect = "fadeOutUp";	
	} else if ($( el ).hasClass( "hout_fadeOutUpBig" )) {	
		anim_hoverouteffect = "fadeOutUpBig";	
	} else if ($( el ).hasClass( "hout_flipInX" )) {	
		anim_hoverouteffect = "flipInX";	
	} else if ($( el ).hasClass( "hout_flipInY" )) {	
		anim_hoverouteffect = "flipInY";	
	} else if ($( el ).hasClass( "hout_flipOutX" )) {	
		anim_hoverouteffect = "flipOutX";	
	} else if ($( el ).hasClass( "hout_flipOutY" )) {	
		anim_hoverouteffect = "flipOutY";	
	} else if ($( el ).hasClass( "hout_lightSpeedIn" )) {	
		anim_hoverouteffect = "lightSpeedIn";	
	} else if ($( el ).hasClass( "hout_lightSpeedOut" )) {	
		anim_hoverouteffect = "lightSpeedOut";	
	} else if ($( el ).hasClass( "hout_rotateIn" )) {	
		anim_hoverouteffect = "rotateIn";	
	} else if ($( el ).hasClass( "hout_rotateInDownLeft" )) {	
		anim_hoverouteffect = "rotateInDownLeft";	
	} else if ($( el ).hasClass( "hout_rotateInDownRight" )) {	
		anim_hoverouteffect = "rotateInDownRight";	
	} else if ($( el ).hasClass( "hout_rotateInUpLeft" )) {	
		anim_hoverouteffect = "rotateInUpLeft";	
	} else if ($( el ).hasClass( "hout_rotateInUpRight" )) {	
		anim_hoverouteffect = "rotateInUpRight";			
	} else if ($( el ).hasClass( "hout_rotateOut" )) {	
		anim_hoverouteffect = "rotateOut";			
	} else if ($( el ).hasClass( "hout_rotateOutDownLeft" )) {	
		anim_hoverouteffect = "rotateOutDownLeft";			
	} else if ($( el ).hasClass( "hout_rotateOutDownRight" )) {	
		anim_hoverouteffect = "rotateOutDownRight";			
	} else if ($( el ).hasClass( "hout_rotateOutUpLeft" )) {	
		anim_hoverouteffect = "rotateOutUpLeft";			
	} else if ($( el ).hasClass( "hout_rotateOutUpRight" )) {	
		anim_hoverouteffect = "rotateOutUpRight";			
	} else if ($( el ).hasClass( "hout_hinge" )) {	
		anim_hoverouteffect = "hinge";			
	} else if ($( el ).hasClass( "hout_rollIn" )) {	
		anim_hoverouteffect = "rollIn";			
	} else if ($( el ).hasClass( "hout_rollOut" )) {	
		anim_hoverouteffect = "rollOut";			
	} else if ($( el ).hasClass( "hout_zoomIn" )) {	
		anim_hoverouteffect = "zoomIn";			
	} else if ($( el ).hasClass( "hout_zoomInDown" )) {	
		anim_hoverouteffect = "zoomInDown";			
	} else if ($( el ).hasClass( "hout_zoomInLeft" )) {	
		anim_hoverouteffect = "zoomInLeft";			
	} else if ($( el ).hasClass( "hout_zoomInRight" )) {	
		anim_hoverouteffect = "zoomInRight";			
	} else if ($( el ).hasClass( "hout_zoomInUp" )) {	
		anim_hoverouteffect = "zoomInUp";			
	} else if ($( el ).hasClass( "hout_zoomOut" )) {	
		anim_hoverouteffect = "zoomOut";			
	} else if ($( el ).hasClass( "hout_zoomOutDown" )) {	
		anim_hoverouteffect = "zoomOutDown";	
	} else if ($( el ).hasClass( "hout_zoomOutLeft" )) {	
		anim_hoverouteffect = "zoomOutLeft";			
	} else if ($( el ).hasClass( "hout_zoomOutRight" )) {	
		anim_hoverouteffect = "zoomOutRight";			
	} else if ($( el ).hasClass( "hout_zoomOutUp" )) {	
		anim_hoverouteffect = "zoomOutUp";			
	} else if ($( el ).hasClass( "hout_slideInDown" )) {	
		anim_hoverouteffect = "slideInDown";		
	} else if ($( el ).hasClass( "hout_slideInLeft" )) {	
		anim_hoverouteffect = "slideInLeft";			
	} else if ($( el ).hasClass( "hout_slideInRight" )) {	
		anim_hoverouteffect = "slideInRight";			
	} else if ($( el ).hasClass( "hout_slideInUp" )) {	
		anim_hoverouteffect = "slideInUp";			
	} else if ($( el ).hasClass( "hout_slideOutDown" )) {	
		anim_hoverouteffect = "slideOutDown";		
	} else if ($( el ).hasClass( "hout_slideOutLeft" )) {	
		anim_hoverouteffect = "slideOutLeft";			
	} else if ($( el ).hasClass( "hout_slideOutRight" )) {	
		anim_hoverouteffect = "slideOutRight";			
	} else if ($( el ).hasClass( "hout_slideOutUp" )) {	
		anim_hoverouteffect = "slideOutUp";			
	}		

		
	$( this ).removeClass( anim_hoverouteffect );

}


//--- PICTURE SLIDESHOW FUNCTION


/*! http://responsiveslides.com v1.53 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:function(){},after:function(){}},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",
j=d+"_on",w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before();F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after()},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after();n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);



// Avoid `console` errors in browsers that lack a console. //boilerplate 
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());