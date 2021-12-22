/*screenSize = 992;
currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;*/
(function () {
let transitionDone = true;
let slickInit = false;
$(document).ready(function(){
   
    if ($('.s-comp3 .s-mfp').length) {
        $('.s-mfp').magnificPopup({
            mainClass: 's-mfp3',
            closeBtnInside: false
        });
    }
    
    const comp = document.getElementsByClassName('s-comp3')[0];
    
    if (!comp) return;
    
    document.documentElement.classList.add('s-has__intro');
    
  if(document.getElementsByClassName('cases-slider')[0] !== null  && document.getElementsByClassName('cases-slider')[0] !== undefined){
      const screenSize = 992;
      const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const currentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
       let creditBar = document.getElementById('s-credit-bar8');
        let creditBtn = creditBar.getElementsByClassName('sw_alink')[0];
        let menu = document.getElementsByClassName('s-header-granito')[0];
        let main = document.getElementById('sw_content');
        let content = document.getElementsByClassName('s-comp3')[0];
        let topBar = document.getElementById('s-logo-full7');
        let iframe = document.getElementsByClassName('s-intro-vid')[0];
        
        copyContent();
        if(currentWidth > screenSize){
            trackMouse();
            addNavigation();
        }
        
        let referrer = document.referrer;
        if(referrer !== ''){
            let introVid = document.getElementsByClassName('s-intro-vid')[0];
            let introVidVideo = introVid.getElementsByTagName('video')[0];
            introVidVideo.pause();
            /*let cases = document.getElementsByClassName('case-slide');
            for(let i = 0; i < cases.length; i++){
                cases[i].getElementsByClassName('content')[0].classList.remove('container');
            }*/
      
            //content.style.display = 'block';
            topBar.style.display = 'none';
            creditBar.style.display = 'none';
            iframe.style.display = 'none';
            main.classList.remove('no-padding');
            content.classList.remove('no-opacity');
            document.documentElement.classList.add('s-modal__transition');
        }else{
            console.log(screenSize);
        /*if (screenSize < 992) {
            let introVid = document.getElementsByClassName('s-intro-vid')[0];
            let introVidVideo = introVid.getElementsByTagName('video')[0];
            introVidVideo.pause();
            let cases = document.getElementsByClassName('case-slide');
            for(let i = 0; i < cases.length; i++){
                cases[i].getElementsByClassName('content')[0].classList.remove('container');
            }
      
            //content.style.display = 'block';
            topBar.style.display = 'none';
            creditBar.style.display = 'none';
            iframe.style.display = 'none';
            main.classList.remove('no-padding');
            content.classList.remove('no-opacity');
            //copyContent();
            
            // tap to explore
            let swContent = document.getElementById('sw_content');
            var node = document.createElement("div");
            node.classList.add('tap-to-explore');
            var text = 'Tap to explore';
            node.innerHTML = text;                            
            swContent.appendChild(node); 
            
            console.log(swContent);
            console.log(node);
            
             setTimeout(function(){
                swContent.removeChild(swContent.getElementsByClassName('tap-to-explore')[0]);
            }, 5000);
        }*/
        console.log(currentWidth);
        if(currentWidth < screenSize){
            let introVid = document.getElementsByClassName('s-intro-vid')[0];
            let introVidVideo = introVid.getElementsByTagName('video')[0];
            introVidVideo.pause();
            let cases = document.getElementsByClassName('case-slide');
            for(let i = 0; i < cases.length; i++){
                cases[i].getElementsByClassName('content')[0].classList.remove('container');
            }
      
            //content.style.display = 'block';
            topBar.style.display = 'none';
            creditBar.style.display = 'none';
            iframe.style.display = 'none';
            main.classList.remove('no-padding');
            content.classList.remove('no-opacity');
            //copyContent();
            
            // tap to explore
            let swContent = document.getElementById('sw_content');
            var node = document.createElement("div");
            node.classList.add('tap-to-explore');
            var text = 'Tap to explore';
            node.innerHTML = text;                            
            swContent.appendChild(node); 
            
             setTimeout(function(){
                swContent.removeChild(swContent.getElementsByClassName('tap-to-explore')[0]);
            }, 5000);
            
            document.documentElement.classList.add('s-modal__transition');
        }else{
            main.classList.add('no-padding');
            menu.classList.add('no-opacity');
            
            creditBtn.addEventListener('click', function(e){
                e.preventDefault();
/*                var leg=$('.swembed-container iframe').attr("src");
                leg = leg.replace(/autoplay=1/g,'');
                $('.swembed-container iframe').attr("src",leg);*/
                if(currentWidth > screenSize){
                    
                    /*if(!slickInit){
                        copyContent();
                        trackMouse();
                        addNavigation();
                    }*/
                    
                    // hide second slide content 
                    let slides = $('.content-slide');
                    for(let i = 1; i < slides.length; i++){
                        slides[i].classList.add('hidden');
                    }
                    
                    
                    // get size of first video element
                    
                    let video = document.querySelectorAll('.video .highlight-image')[0];
                    let size = video.getBoundingClientRect();
                    
                    console.log(size);
                    
                    let width = size.width;
                    let height = size.height;
                    
                    let topLeft = size.top;
                    let bottomLeft = size.bottom;
                    let topRight = topLeft + width;
                    let bottomRight = bottomLeft + width;
                    
                    let introVid = document.getElementsByClassName('s-intro-vid')[0];
                    let introVidVideo = introVid.getElementsByTagName('video')[0];
                    introVidVideo.pause();
                    /*introVid.style.height = height + 'px';
                    introVid.style.width = width + 'px';*/
                    introVid.style.top = size.top + 10 + 'px';
                    introVid.style.left = size.left + 'px';
                    introVid.style.right =  currentWidth - (size.left + size.width) + 'px';
                    introVid.style.bottom = currentHeight - (size.top + size.height) -10 + 'px';

                    introVid.classList.remove('no-opacity');
                    
                     
                    let content = document.getElementsByClassName('s-comp3')[0];
                    let topBar = document.getElementById('s-logo-full7');
                    let iframe = document.getElementsByClassName('s-intro-vid')[0];
                    
                    // content.style.display = 'block';
                    /*topBar.style.display = 'none';
                    creditBar.style.display = 'none';*/
                    // iframe.style.display = 'none';
                    
                    topBar.classList.remove('no-opacity');
                    creditBar.classList.remove('no-opacity');
                    
                    
                    /*menu.style.display = 'block';*/
                    
                    topBar.classList.add('fade-outOp-5');
                    creditBar.classList.add('fade-outOp-5');
                    topBar.classList.remove('fade-outIn-5');
                    creditBar.classList.remove('fade-outIn-5');
                    main.classList.remove('no-padding');
                    
                    setTimeout(function(){
                        menu.classList.add('fade-inOp');
                        content.classList.add('fade-inOp');
                        menu.classList.remove('fade-outOp');
                        content.classList.remove('fade-outOp');
                    }, 700);
                    setTimeout(function(){
                        topBar.style.display = 'none';
                        creditBar.style.display = 'none';
                    }, 500);
                    setTimeout(function(){
                        iframe.style.display = 'none';
                        document.documentElement.classList.add('s-modal__transition');
                    }, 1000);
                }
            });
        }
            
        }

  }
  
  
  
  
  /*$('.cases-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      let name = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.name;
      let description = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.description;
      let detail = document.getElementsByClassName('slide-info')[0];
      let html = '';
      
      if(jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.classList.contains('object')){
          let artist = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.artist;
          let collection = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.collection;
          html = `<div>
                        <h3>${artist}</h3>
                        <h5>${collection}</h5>
                      </div>
                      <p>${description}</p>`;
            detail.classList.add('object-style');
      }
      else{
          html = `<h3>${name}</h3>
                 <p>${description}</p>`;
                 detail.classList.remove('object-style');
      }
      
      
      detail.innerHTML = html;
});*/
  
});

function copyContent(){
    let ogSlider = document.getElementsByClassName('cases-slider')[0];
    let contentSlider = document.getElementsByClassName('content-slider')[0];
    let html = "";
    let screenSize = 992;
    let currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    for(let i = 0; i < ogSlider.children.length; i++){
        if (ogSlider.children[i].classList.contains('object')){
            if(currentWidth <= screenSize){

            }else{
                html +=  `<div class="content-slide object-content">
                            <div class="object-style container">
                                <div>
                                    <h5>${ogSlider.children[i].dataset.artist}</h5>
                                    <h6>${ogSlider.children[i].dataset.collection}</h6>
                                </div>
                                <div class="object-description-wrapper">
                                    <p class="object-description">${ogSlider.children[i].dataset.description}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
            
        }
        else if(ogSlider.children[i].classList.contains('interior')){
            if(currentWidth <= screenSize){

            }else{
                 html += `<div class="content-slide interior">
                            <div class="container content-wrapper">
                                <div class="interior-style">
                                    <h3>${ogSlider.children[i].dataset.name}</h3>
                                    <p>${ogSlider.children[i].dataset.description}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
           
        }
        else if(ogSlider.children[i].classList.contains('video')){
            if(currentWidth <= screenSize){

            }else{
                 html +=  `<div class="video-content content-slide object-content">
                            <div class="object-style container">
                                <div class="video-description">
                                    <p>${ogSlider.children[i].dataset.description}</p>
                                </div>
                                <div class="video-info-wrapper">
                                    <p class="video-info">${ogSlider.children[i].dataset.info}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
            
            let secondImg = ogSlider.children[i].getElementsByClassName('highlight-image')[1];
            if(secondImg != null && secondImg != undefined){
                secondImg.parentNode.removeChild(secondImg);
            }
        }
    }
    slickInit = true;
    contentSlider.innerHTML = html;
    $('.cases-slider').slick({
      variableWidth: true,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      draggable: false,
      speed: 1000,
      responsive: [
        {
          breakpoint: screenSize,
          settings: {
            variableWidth: false,
            fade: true,
            cssEase: 'linear',
            speed: 500,
            centerPadding: '0',
            centerMode: false
          }
        }]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      if(currentWidth <= screenSize){
        showMobileContent(nextSlide);
      }
      let cases = $('.case-slide');
      console.log(cases.eq(nextSlide));
      if(cases.eq(nextSlide)[0].classList.contains('interior')){
          if(cases.eq(nextSlide + 1)[0] !== undefined){
              cases.eq(nextSlide + 1)[0].classList.add('slide-invisbile');
              cases.eq(nextSlide + 1)[0].classList.remove('fade-inOp');
              cases.eq(nextSlide + 1)[0].classList.add('fade-outOp');
          }
      }
      if(cases.eq(currentSlide)[0].classList.contains('interior')){
          if(cases.eq(nextSlide)[0] !== undefined){
              cases.eq(nextSlide)[0].classList.remove('slide-invisbile');
              cases.eq(nextSlide)[0].classList.remove('fade-outOp');
              cases.eq(nextSlide)[0].classList.add('fade-inOp');
          }
      }
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
      transitionDone = true;
  });
  let slides = $('.content-slide');
  $('.content-slider').slick({
      variableWidth: true,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      draggable: false,
      speed: 0
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        
    	  slides.removeClass('fade-outOp fade-inOp');
    	  slides.addClass('hidden');
    	  
    	  /*slides.eq(currentSlide).removeClass('hidden');*/
          slides.eq(nextSlide).addClass('fade-inOp');
          slides.eq(nextSlide).removeClass('hidden');
          
    });
    
    slides.eq(1).addClass('hidden');
    if(currentWidth <= screenSize){
        showMobileContent();
    }
}

function showMobileContent(currentSlide = 0){
    let slides = $('.case-slide');
    let curHtmlSlide = slides.eq(currentSlide)[0];

    let mobileContent = document.getElementsByClassName('mobile-content')[0];
    let mobileTitle = mobileContent.getElementsByClassName('mobileTitle')[0];
    let mobileInfo = mobileContent.getElementsByClassName('mobileInfo')[0];

    if(curHtmlSlide.classList.contains('interior')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.name;
        mobileInfo.innerHTML = 'Interior';
    }else if(curHtmlSlide.classList.contains('object')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.artist;
        mobileInfo.innerHTML = 'Objects';
    }else if(curHtmlSlide.classList.contains('video')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.name;
        mobileInfo.innerHTML = curHtmlSlide.dataset.mobileinfo;
    }
    
    if(currentSlide === 0){
        mobileContent.getElementsByClassName('mobilePrevArrow')[0].classList.add('hidden');
    }else if(currentSlide === slides.length -1){
        mobileContent.getElementsByClassName('mobileNextArrow')[0].classList.add('hidden');
    }
    else{
        mobileContent.getElementsByClassName('mobileNextArrow')[0].classList.remove('hidden');
        mobileContent.getElementsByClassName('mobilePrevArrow')[0].classList.remove('hidden');
    }
    
}

function checkCurrentSlide(direction){
    let currentSlide = $('.content-slider').slick('slickCurrentSlide');
    let slides = $('.content-slide');
    if (((slides.length-1 != currentSlide) || direction == 'left') && (currentSlide != 0 || direction == 'right')) {
        slides.eq(currentSlide).addClass('fade-outOp');
      }
}

function addNavigation(){
    let cases = document.getElementById('cases-container');
    cases.addEventListener('click', function(){
        if(this.classList.contains('cursor-left')){
            if(transitionDone){
                transitionDone = false;
                checkCurrentSlide('left');
                $('.cases-slider').slick('slickPrev');
                setTimeout(prevSlide, 500);
            }
        }else if(this.classList.contains('cursor-right')){
            if(transitionDone){
                transitionDone = false;
                checkCurrentSlide('right');
                $('.cases-slider').slick('slickNext');
                setTimeout(nextSlide, 500);
            }
        }
        else if(this.classList.contains('cursor-crosshair')){
            let currentSlide = $('.cases-slider').slick('slickCurrentSlide');
            let slide = $('.case-slide');
            console.log(currentSlide);
            if(slide.eq(currentSlide)[0].classList.contains('video')){
                /*slide.eq(currentSlide)[0].getElementsByClassName('s-playbtn')[0].click();*/
                
                let creditBar = document.getElementById('s-credit-bar8');
                let main = document.getElementById('sw_content');
                
                let content = document.getElementsByClassName('s-comp3')[0];
                let topBar = document.getElementById('s-logo-full7');
                let iframe = document.getElementsByClassName('s-intro-vid')[0];
                let menu = document.getElementsByClassName('s-header-granito')[0];
                
                //content.style.display = 'none';
                /*topBar.style.display = 'flex';
                creditBar.style.display = 'flex';
                iframe.style.display = 'block';
                menu.style.display = 'none';
                main.classList.add('no-padding');*/
                
                let introVid = document.getElementsByClassName('s-intro-vid')[0];
                introVid.classList.add('no-opacity');
                introVid.style.display = 'block';
                introVid.classList.add('fade-inOp');
                /*introVid.style.height = 'calc(100vh - 150px)';
                introVid.style.width = '100vw';*/
                introVid.style.top = '75px';
                introVid.style.left = '0';
                introVid.style.bottom = '75px';
                introVid.style.right = '0';
                
                introVid.style.display = 'block';
                introVid.classList.add('no-opacity');
                
                topBar.style.display = 'flex';
                topBar.classList.add('no-opacity');
                
                creditBar.style.display = 'flex';
                creditBar.classList.add('no-opacity');
                
                topBar.classList.remove('fade-outOp-5');
                creditBar.classList.remove('fade-outOp-5');
                topBar.classList.add('fade-inOp-5');
                creditBar.classList.add('fade-inOp-5');
                
                setTimeout(function(){
                    menu.classList.remove('fade-inOp');
                    content.classList.remove('fade-inOp');
                    menu.classList.add('fade-ouOp');
                    content.classList.add('fade-outOp');
                }, 700);
                setTimeout(function(){
                    topBar.style.display = 'flex';
                    creditBar.style.display = 'flex';
                }, 500);
                setTimeout(function(){
                    main.classList.add('no-padding');
                }, 1000);
            }
            else{
                // go to detailpage
                let detailpage = slide.eq(currentSlide)[0].getElementsByClassName('highlight-image')[0].getElementsByTagName('a')[0].href;
                let transition = document.getElementsByClassName('s-page__transition')[0];
                transition.classList.add('s-fade-in');
                setTimeout(()=> {
                    window.location.href = detailpage;
                }, 800);
            }
        }
    });
}

function nextSlide() {
   $('.content-slider').slick('slickNext');
   //transitionDone = true;
}

function prevSlide() {
   $('.content-slider').slick('slickPrev');
   //transitionDone = true;
}

function trackMouse(){
    let cases = document.getElementById('cases-container');
    cases.onmousemove = handleMouseMove;
    
    
    
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        

        
    
        let images = document.getElementsByClassName('highlight-image');

        

        // Use event.pageX / event.pageY here
        let currentSlide = $('.content-slider').slick('slickCurrentSlide');
        let slides = $('.content-slide');
        if (slides.length-1 == currentSlide){
            cases.classList.add('cursor-left');
            cases.classList.remove('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        else if(currentSlide == 0){
            cases.classList.remove('cursor-left');
            cases.classList.add('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        else if(event.pageX < cases.offsetWidth / 2){
            // cursor left
            cases.classList.add('cursor-left');
            cases.classList.remove('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }else{
            // cursor right
            cases.classList.remove('cursor-left');
            cases.classList.add('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        
        for(let i = 0; i < images.length; i++){
            let pos = images[i].getBoundingClientRect();
            let x = pos.left;
            let y = pos.top;
            let width = pos.width;
            let height = pos.height;
            if((event.pageX >= x && event.pageX <= width + x)&&(event.pageY >= y && event.pageY <= height + y)){
                let slider = images[i].parentElement.parentElement.parentElement.parentElement;
                let curSlide = slider.childNodes[currentSlide];
                // if(curSlide.classList.contains('video')) return;
                let imgs = curSlide.getElementsByClassName('highlight-image');
                for(let j = 0; j < imgs.length; j++){
                    if(imgs[j] === images[i]){
                        cases.classList.remove('cursor-left');
                        cases.classList.remove('cursor-right');
                        cases.classList.add('cursor-crosshair');
                    }
                }
            }
        }
    }
    
   
}
 function disableArrow(event){
        console.log('test');
    }
})();

function nextSlideMobile(){
    $('.content-slider').slick('slickNext');
    $('.cases-slider').slick('slickNext');
}

function prevSlideMobile(){
    $('.content-slider').slick('slickPrev');
    $('.cases-slider').slick('slickPrev');
}


document.addEventListener('DOMContentLoaded', function(event){
    const screenSize = 992
    const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(currentWidth > screenSize){
         let caseImages = document.getElementsByClassName('case-image-overview');
         let dimensions = [];
        for(let index = 0; index < caseImages.length; index++){
            dimensions.push(caseImages[index].getBoundingClientRect());

        }
         for(let index2 = 0; index2 < caseImages.length; index2++){
            caseImages[index2].style.position = 'absolute';
            caseImages[index2].style.left = dimensions[index2].left + 'px';
            caseImages[index2].style.top = dimensions[index2].top + 'px';
            caseImages[index2].style.right = currentWidth - (dimensions[index2].left + dimensions[index2].width) + 'px';
            caseImages[index2].style.bottom = currentHeight - (dimensions[index2].top + dimensions[index2].height) + 'px';
         }
        
        let isAnimating = false;
        $('.case-image-overview > a').on('click', function(event){
            event.preventDefault();
            var newPage = $(this).attr('href');
            let parent = $(this).parent()[0];
            if( !isAnimating ) changePage(newPage, true, parent);
        });
    }
   
    
    
    if(document.getElementById("swup") !== null && document.getElementById("swup") !== undefined){
      /*  let options = {
            debugMode: true
        };*/
      //const swup = new Swup(options); 
    }
    
    function changePage(url, bool, parent) {
        isAnimating = true;
        // trigger page animation
        
        parent.classList.add('moved');
        
        jQuery(parent).detach().appendTo('#sw_content');
        
        parent = document.getElementsByClassName('moved')[0];
        
        console.log(parent);
        
        var config = { attributes: true, childList: true, subtree: true };
        
        var mutationObserver = function(mutationsList, observer) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'attributes') {
                    if(parent.classList.contains('doTransition')){
                        parent.classList.remove('doTransition');
                        doTransition(parent, bool, url);
                    }
                }
            }
        };
        
        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(mutationObserver);
        
        // Start observing the target node for configured mutations
        observer.observe(parent, config);
        
        let dimensions = parent.getBoundingClientRect();
        parent.style.position = 'fixed';
        parent.style.left = dimensions.left + 15 + 'px';
        parent.style.top = dimensions.top + 15 + 'px';
        parent.style.right = currentWidth - (dimensions.left + dimensions.width) -15 + 'px';
        parent.style.bottom = currentHeight - (dimensions.top + dimensions.height) -15 + 'px';
        parent.style.width = 'auto';
        parent.style.height = 'auto';
        parent.style.backgroundSize = 'cover';
        
        parent.classList.add('doTransition');
        

	}
	
	function doTransition(parent, bool, url){
        parent.classList.add('move-trans');
        
        let imageSrc = parent.dataset.src;
        let image = new Image();
        image.src = imageSrc;

        let imgWidth = image.width,
        imgHeight = image.height;
        
        let newImgHeight = currentHeight - 150;
        let newImgWidth = (newImgHeight / imgHeight) * imgWidth;
        let newImgRight = currentWidth - (currentWidth / 2 + newImgWidth);
        
        
        parent.style.transition = 'all 1s ease-in-out';
        /*parent.style.position = 'fixed';*/
        parent.style.left = currentWidth / 2 + 'px';
        //parent.style.right = '300px';
        parent.style.top = '75px';
        parent.style.bottom = '75px';
        //parent.style.right = 'calc(100vw - (100vw / 2 + 100%))';
        parent.style.right = newImgRight+'px';
        /*parent.style.width = newImgWidth + 'px';*/
        parent.style.height = 'auto';
        parent.style.backgroundSize = 'cover';
        
/*        parent.style.width = 'auto';
*/        setTimeout(function(){
   
            loadNewContent(url, bool);
        }, 1000);
	}
	
	$(window).on('popstate', function() {
	    var newPageArray = location.pathname.split('/'),
	    newPage = newPageArray[newPageArray.length - 1];
	    window.location.href = newPage;
	});
    
    function loadNewContent(url, bool) {
        url = ('' == url) ? 'index.php' : url;
        let newSection = '<div class="s-comp-wrapper case-detail-page"></div>';
        let section = $('<div id="swup" tabindex="0" style="overflow: hidden; outline: none;"></div>');
        
/*         $.ajax({url: url +' .case-detail-page > *', success: function(result){
            console.log(result);
        }});*/
        console.log(section);
        $( "#swup" ).load(url+' .case-detail-page > *', function(event){
           
            /*$(this)[0].innerHTML = newSection;*/
            let delay = 1000;
            setTimeout(function(){
            
    
          }, delay);
          
          if(url!=window.location && bool){
            //add the new page to the window.history
            //if the new page was triggered by a 'popstate' event, don't add it
            window.history.pushState(null,null,url);

            JSDetailPage();
            document.getElementsByClassName('mobile-image')[0].addEventListener('load', function(){
                let images = document.getElementsByClassName('moved');
                console.log(images);
                images[0].remove();
            });
          }
          
        });
    }


    
    // Mobile -> show details
    if(currentWidth <= screenSize){
        let images = document.getElementsByClassName('case-image');
        if(images !== null && images !== undefined){
            for(let i = 0; i < images.length; i++){
                images[i].addEventListener('click', function(e){
                    images[i].getElementsByClassName('case-image-overlay')[0].classList.add('fade-out');
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    let curDetail = document.getElementsByClassName('mobile-detail')[0];
                    if(curDetail !== null && curDetail !== undefined){
                        curDetail.parentNode.removeChild(curDetail);
                    }
                    if(this.dataset.url === undefined || this.dataset.url === null){
                        this.dataset.url = images[i].getElementsByTagName('a')[0].href;
                    }
                    
                    images[i].getElementsByTagName('a')[0].removeAttribute("href");
                    showDetails(this);
                });
            }
        }
    }

   
});

function showDetails(el){
    let images = document.getElementsByClassName('case-image');
    for(let i = 0; i < images.length; i++){
        if(images[i].isSameNode(el)) continue;
        images[i].getElementsByClassName('case-image-overlay')[0].classList.add('fade-in');
        images[i].getElementsByClassName('case-image-overlay')[0].classList.remove('fade-out');
    }
    
    let name = el.dataset.name;
    let description = el.dataset.description;
    let info = el.dataset.info;
    let link = el.dataset.url;
    
    let comp = document.getElementsByClassName('s-comp4')[0];
    let html = `<div class="mobile-detail slide-top">
            <h2>${name}</h2>
            <p>${description}</p>
            <h5>${info}</h5>
            <div class="s-button-list">
                <a href="${link}">View project</a>
                <a href="#">Share</a>
            </div></div>
            `;
    
    var div = document.createElement("div");
    div.innerHTML = html;
    comp.appendChild(div);
}

function addOverlay(el){
    if(!el.classList.contains('moved')){
         const screenSize = 992;
        const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(currentWidth >= screenSize){
            // add overlay (remove class no-opacity) to each img, except el
            let images = document.getElementsByClassName('case-image');
            for(let i = 0; i < images.length; i++){
                if(images[i].isSameNode(el)) continue;
                images[i].getElementsByClassName('case-image-overlay')[0].classList.add('fade-in');
                images[i].getElementsByClassName('case-image-overlay')[0].classList.remove('fade-out');
            }
            // show details
            let name = el.dataset.name;
            let date = el.dataset.date;
            let description = el.dataset.description;
            let info = el.dataset.info;
            
            let caseDetails = document.getElementsByClassName('case-details')[0];
            let html = `<h2>${name}</h2>
                    <h4>${date}</h4>
                    <p>${description}</p>
                    <h5>${info}</h5>
                    `;
            caseDetails.innerHTML = html;
            caseDetails.classList.remove('fade-out-details');
            caseDetails.classList.add('fade-in-details');
            
        }
    }

}

function removeOverlay(){
    let movedItems = document.getElementsByClassName('moved');
    if(movedItems.length == 0){
        const screenSize = 992;
        const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(currentWidth >= screenSize){
            // remove overlay
            let images = document.getElementsByClassName('case-image');
            for(let i = 0; i < images.length; i++){
                images[i].getElementsByClassName('case-image-overlay')[0].classList.add('fade-out');
                images[i].getElementsByClassName('case-image-overlay')[0].classList.remove('fade-in');
            }
            // remove details 
            let caseDetails = document.getElementsByClassName('case-details')[0];
            /*caseDetails.innerHTML = '';*/
            caseDetails.classList.remove('fade-in-details');
            caseDetails.classList.add('fade-out-details');
            setTimeout(function(){
                if(!caseDetails.classList.contains('fade-in-details')){
                    caseDetails.innerHTML = '';
                }
            }, 800);
        }
    }
}



function JSDetailPage(){
    const screenSize = 8000000;
const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

(function () {
    
    if(currentWidth >= screenSize){
        if(document.getElementById("swup") !== null  && document.getElementById("swup") !== undefined){
            function scrollH(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                document.getElementById('swup').scrollLeft -= (delta * 40);
                e.preventDefault();
            }
            if (window.addEventListener) {
                window.addEventListener("mousewheel", scrollH, false);
                window.addEventListener("DOMMouseScroll", scrollH, false);
            } else {
                window.attachEvent("onmousewheel", scrollH);
            }
        }
    }
     
})();
$(document).ready(function () {
    
	$(window).on('popstate', function() {
	    var newPageArray = location.pathname.split('/'),
	    newPage = newPageArray[newPageArray.length - 1];
	    window.location.href = newPage;
	});
    
    if(document.getElementById("case-detail") !== null  && document.getElementById("case-detail") !== undefined){
                window.location.reload(false); 
        
            var url_string = window.location.href; 
            var url = new URL(url_string);
            var lid = url.searchParams.get("lid");
            if(lid !== null){
                let header = document.getElementsByClassName('s-header-granito');
                for(let i = 0; i < header.length; i++){
                    header[i].classList.add('hidden');
                }
                let html = document.getElementsByTagName('html')[0];
                html.classList.add('s-detail');
            }
            // const scrollBtn = comp.getElementsByClassName('scroll-to-explore')[0];
            // const wrapper = document.getElementById('case-detail');
            // ackordion.initAll();
            // const scroll = 300;
            // if(wrapper){
              
            //     wrapper.addEventListener('scroll', (e) => {
            //         if(scroll > 0) {
            //             //const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            //             const currentScroll = e.target.scrollTop;
            //             console.log(currentScroll);
            //             if (currentScroll >= scroll) {
            //                 scrollBtn.classList.add('is-scrolled');
            //             } else {
            //                 scrollBtn.classList.remove('is-scrolled');
            //             }
            //         }
            //     });
                
            // }
        if(currentWidth >= screenSize){
            
                $("#case-detail").niceScroll({
                    autohidemode: "hidden",
                    emulatetouch: true
                });
        $('#case-detail').scroll(function () {
            let offset = 500;
                var $elem=$('#case-detail');
                var newScrollLeft = $elem.scrollLeft(),
                    width=$elem.outerWidth(),
                    scrollWidth=$elem.get(0).scrollWidth;
                let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                let caseDetails = document.querySelectorAll('.s-comp-wrapper .case-details')[0];
                let scrollIndicator = document.querySelectorAll('.s-comp-wrapper .scroll-to-explore')[0];
                if(w/2 - 350 <= newScrollLeft){
                    
                    opacity = (w/2 - newScrollLeft) / 350;
                    if(opacity >= 0){
                        caseDetails.style.opacity = opacity;
                        scrollIndicator.style.opacity = opacity;
                    }
                    else if(caseDetails.style.opacity != 0){
                        caseDetails.style.opacity = 0;
                        scrollIndicator.style.opacity = 0;
                    }
                }else{
                    if(caseDetails.style.opacity != 1){
                        caseDetails.style.opacity = 1;
                        scrollIndicator.style.opacity = 1;
                    }
                }
                let nextCase = document.getElementById('next-case-btn');
                if (scrollWidth-newScrollLeft-offset<=width) {
                    // calculate opacity
                    let opacity =  (width - (scrollWidth-newScrollLeft-offset)) / offset;
                    nextCase.style.opacity = opacity;
                }else{
                    nextCase.style.opacity = '0';
                }
            });
        }
        
        if(currentWidth <= screenSize){
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let navbarHeight = $('#back-button').outerHeight();
            
            $(window).scroll(function(event){
                didScroll = true;
            });
            
            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);
            
            function hasScrolled() {
                let st = $(this).scrollTop();
                
                // Make sure they scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;
                
                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight){
                    // Scroll Down
                    $('#back-button').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        $('#back-button').removeClass('nav-up').addClass('nav-down');
                    }
                }
                
                lastScrollTop = st;
            }
        }
        
    }
    
    
});
}


// document.addEventListener('DOMContentLoaded', () => {
//     // const initAccordion = (accordionNode) => {
//     //     const accordion = new Accordion(accordionNode, {
//     //         modal: true,
//     //         heightOffset: 2
//     //     });
//     // };

//     new SM_Component('.s-comp4', (comp) => {
        
//         const scrollBtn = comp.getElementsByClassName('scroll-to-explore')[0];
//         const wrapper = document.getElementById('case-detail');
//         /* INIT accordion */
//         // const accordionNodes = Array.from(comp.querySelectorAll('.s-accordion'));
        
//         // if(accordionNodes.length === 0) return;
        
//         // for (let i = 0; i < accordionNodes.length; i++) {
//         //     console.log(accordionNodes);
//         //     initAccordion(accordionNodes[i]);
//         // }
//         ackordion.initAll();
        
//         const scroll = 300;
//         if(wrapper){
//             setTimeout(function(){
//                 wrapper.addEventListener('scroll', (e) => {
//                     if(scroll > 0) {
//                         //const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//                         const currentScroll = e.target.scrollTop;
//                         console.log(currentScroll);
//                         if (currentScroll >= scroll) {
//                             scrollBtn.classList.add('is-scrolled');
//                         } else {
//                             scrollBtn.classList.remove('is-scrolled');
//                         }
//                     }
//                 });
//             }, 100);
            
//         }
//     });
    
//     /* Event Handlers */
//     document.addEventListener('click', e => {
//         const source = e.target;
//     });
// });


document.addEventListener('DOMContentLoaded', function(){
   var referrer = document.referrer;
   console.log(referrer);
});


/*screenSize = 992;
currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;*/
(function () {
let transitionDone = true;
let slickInit = false;
$(document).ready(function(){
   
    if ($('.s-comp12 .s-mfp').length) {
        $('.s-mfp').magnificPopup({
            mainClass: 's-mfp12',
            closeBtnInside: false
        });
    }
    
    const comp = document.getElementsByClassName('s-comp12')[0];
    
    if (!comp) return;
    
  if(document.getElementsByClassName('cases-slider')[0] !== null  && document.getElementsByClassName('cases-slider')[0] !== undefined){
      const screenSize = 200;
      const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const currentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
       let creditBar = document.getElementById('s-credit-bar8');
        let creditBtn = creditBar.getElementsByClassName('sw_alink')[0];
        let menu = document.getElementsByClassName('s-header-granito')[0];
        let main = document.getElementById('sw_content');
        let content = document.getElementsByClassName('s-comp12')[0];
        let topBar = document.getElementById('s-logo-full7');
        
        copyContent();
        if(currentWidth > screenSize){
            trackMouse();
            addNavigation();
        }
        
        /*let referrer = document.referrer;
        if(referrer !== ''){
            let introVid = document.getElementsByClassName('s-intro-vid')[0];
            let introVidVideo = introVid.getElementsByTagName('video')[0];
            introVidVideo.pause();
      
            //content.style.display = 'block';
            topBar.style.display = 'none';
            creditBar.style.display = 'none';
            iframe.style.display = 'none';
            main.classList.remove('no-padding');
            content.classList.remove('no-opacity');
        }else{*/
            
        if(currentWidth < screenSize){
            /*let introVid = document.getElementsByClassName('s-intro-vid')[0];
            let introVidVideo = introVid.getElementsByTagName('video')[0];
            introVidVideo.pause();*/
            let cases = document.getElementsByClassName('case-slide');
            for(let i = 0; i < cases.length; i++){
                cases[i].getElementsByClassName('content')[0].classList.remove('container');
            }
      
            //content.style.display = 'block';
            topBar.style.display = 'none';
            creditBar.style.display = 'none';
            main.classList.remove('no-padding');
            content.classList.remove('no-opacity');
            //copyContent();
            
            // tap to explore
            let swContent = document.getElementById('sw_content');
            var node = document.createElement("div");
            node.classList.add('tap-to-explore');
            var text = 'Tap to explore';
            node.innerHTML = text;                            
            swContent.appendChild(node); 
            
             setTimeout(function(){
                swContent.removeChild(swContent.getElementsByClassName('tap-to-explore')[0]);
            }, 5000);
            
            
        }else{
            
            creditBar.classList.add('no-opacity');
            topBar.classList.add('no-opacity');
            /*main.classList.add('no-padding');
            menu.classList.add('no-opacity');*/
            
            creditBtn.addEventListener('click', function(e){
                e.preventDefault();
/*                var leg=$('.swembed-container iframe').attr("src");
                leg = leg.replace(/autoplay=1/g,'');
                $('.swembed-container iframe').attr("src",leg);*/
                if(currentWidth > screenSize){
                    
                    /*if(!slickInit){
                        copyContent();
                        trackMouse();
                        addNavigation();
                    }*/
                    
                    // hide second slide content 
                    let slides = $('.content-slide');
                    for(let i = 1; i < slides.length; i++){
                        slides[i].classList.add('hidden');
                    }
                    
                    
                    // get size of first video element
                    
                    let video = document.querySelectorAll('.video .highlight-image')[0];
                    let size = video.getBoundingClientRect();
                    
                    console.log(size);
                    
                    let width = size.width;
                    let height = size.height;
                    
                    let topLeft = size.top;
                    let bottomLeft = size.bottom;
                    let topRight = topLeft + width;
                    let bottomRight = bottomLeft + width;
                    
                    /*let introVid = document.getElementsByClassName('s-intro-vid')[0];
                    let introVidVideo = introVid.getElementsByTagName('video')[0];
                    introVidVideo.pause();*/
                    /*introVid.style.height = height + 'px';
                    introVid.style.width = width + 'px';*/
                    /*introVid.style.top = size.top + 10 + 'px';
                    introVid.style.left = size.left + 'px';
                    introVid.style.right =  currentWidth - (size.left + size.width) + 'px';
                    introVid.style.bottom = currentHeight - (size.top + size.height) -10 + 'px';

                    introVid.classList.remove('no-opacity');
                    */
                     
                    let content = document.getElementsByClassName('s-comp12')[0];
                    let topBar = document.getElementById('s-logo-full7');
                    let iframe = document.getElementsByClassName('s-intro-vid')[0];
                    let videoHighlight = document.getElementsByClassName('s-highlight-vid')[0];
                    let videovideo = videoHighlight.getElementsByTagName('video')[0];
                    
                    // content.style.display = 'block';
                    /*topBar.style.display = 'none';
                    creditBar.style.display = 'none';*/
                    // iframe.style.display = 'none';
                    
                    topBar.classList.remove('no-opacity');
                    creditBar.classList.remove('no-opacity');
                    
                    
                    /*menu.style.display = 'block';*/
                    
                    topBar.classList.add('fade-outOp-5');
                    creditBar.classList.add('fade-outOp-5');
                    topBar.classList.remove('fade-outIn-5');
                    creditBar.classList.remove('fade-outIn-5');
                    main.classList.remove('no-padding');
                    videoHighlight.classList.add('fade-outOp-5');
                    
                    setTimeout(function(){
                        menu.classList.add('fade-inOp');
                        content.classList.add('fade-inOp');
                        menu.classList.remove('fade-outOp');
                        content.classList.remove('fade-outOp');
                        videoHighlight.classList.remove('fade-outOp-5');
                    }, 700);
                    setTimeout(function(){
                        topBar.style.display = 'none';
                        creditBar.style.display = 'none';
                        videoHighlight.style.display = 'none';
                        
                        videovideo.pause();
                        videovideo.currentTime = 0;
                    }, 500);
                }
            });
        /*}*/
            
        }

  }
  
  
  
  
  /*$('.cases-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      let name = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.name;
      let description = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.description;
      let detail = document.getElementsByClassName('slide-info')[0];
      let html = '';
      
      if(jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.classList.contains('object')){
          let artist = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.artist;
          let collection = jQuery(slick.$slides.get(nextSlide)).find('.slick-slide').context.dataset.collection;
          html = `<div>
                        <h3>${artist}</h3>
                        <h5>${collection}</h5>
                      </div>
                      <p>${description}</p>`;
            detail.classList.add('object-style');
      }
      else{
          html = `<h3>${name}</h3>
                 <p>${description}</p>`;
                 detail.classList.remove('object-style');
      }
      
      
      detail.innerHTML = html;
});*/
  
});

function copyContent(){
    let ogSlider = document.getElementsByClassName('cases-slider')[0];
    let contentSlider = document.getElementsByClassName('content-slider')[0];
    let html = "";
    let screenSize = 992;
    let currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    for(let i = 0; i < ogSlider.children.length; i++){
        if (ogSlider.children[i].classList.contains('object')){
            if(currentWidth <= screenSize){

            }else{
                html +=  `<div class="content-slide object-content">
                            <div class="object-style container">
                                <div>
                                    <h5>${ogSlider.children[i].dataset.artist}</h5>
                                    <h6>${ogSlider.children[i].dataset.collection}</h6>
                                </div>
                                <div class="object-description-wrapper">
                                    <p class="object-description">${ogSlider.children[i].dataset.description}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
            
        }
        else if(ogSlider.children[i].classList.contains('interior')){
            if(currentWidth <= screenSize){

            }else{
                 html += `<div class="content-slide interior">
                            <div class="container content-wrapper">
                                <div class="interior-style">
                                    <h3>${ogSlider.children[i].dataset.name}</h3>
                                    <p>${ogSlider.children[i].dataset.description}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
           
        }
        else if(ogSlider.children[i].classList.contains('video')){
            if(currentWidth <= screenSize){

            }else{
                 html +=  `<div class="video-content content-slide object-content">
                            <div class="object-style container">
                                <div class="video-description">
                                    <p>${ogSlider.children[i].dataset.description}</p>
                                </div>
                                <div class="video-info-wrapper">
                                    <p class="video-info">${ogSlider.children[i].dataset.info}</p>
                                </div>
                            </div>
                            
                        </div>`;
            }
            
            let secondImg = ogSlider.children[i].getElementsByClassName('highlight-image')[1];
            if(secondImg != null && secondImg != undefined){
                secondImg.parentNode.removeChild(secondImg);
            }
        }
    }
    slickInit = true;
    contentSlider.innerHTML = html;
    $('.cases-slider').slick({
      variableWidth: true,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      draggable: false,
      speed: 1000,
      responsive: [
        {
          breakpoint: screenSize,
          settings: {
            variableWidth: false,
            fade: true,
            cssEase: 'linear',
            speed: 500,
            centerPadding: '0',
            centerMode: false
          }
        }]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      if(currentWidth <= screenSize){
        showMobileContent(nextSlide);
      }
      let cases = $('.case-slide');
      console.log(cases.eq(nextSlide));
      if(cases.eq(nextSlide)[0].classList.contains('interior')){
          if(cases.eq(nextSlide + 1)[0] !== undefined){
              cases.eq(nextSlide + 1)[0].classList.add('slide-invisbile');
              cases.eq(nextSlide + 1)[0].classList.remove('fade-inOp');
              cases.eq(nextSlide + 1)[0].classList.add('fade-outOp');
          }
      }
      if(cases.eq(currentSlide)[0].classList.contains('interior')){
          if(cases.eq(nextSlide)[0] !== undefined){
              cases.eq(nextSlide)[0].classList.remove('slide-invisbile');
              cases.eq(nextSlide)[0].classList.remove('fade-outOp');
              cases.eq(nextSlide)[0].classList.add('fade-inOp');
          }
      }
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
      transitionDone = true;
  });
  let slides = $('.content-slide');
  $('.content-slider').slick({
      variableWidth: true,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      draggable: false,
      speed: 0
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        
    	  slides.removeClass('fade-outOp fade-inOp');
    	  slides.addClass('hidden');
    	  
    	  /*slides.eq(currentSlide).removeClass('hidden');*/
          slides.eq(nextSlide).addClass('fade-inOp');
          slides.eq(nextSlide).removeClass('hidden');
          
    });
    
    slides.eq(1).addClass('hidden');
    if(currentWidth <= screenSize){
        showMobileContent();
    }
}

function showMobileContent(currentSlide = 0){
    let slides = $('.case-slide');
    let curHtmlSlide = slides.eq(currentSlide)[0];

    let mobileContent = document.getElementsByClassName('mobile-content')[0];
    let mobileTitle = mobileContent.getElementsByClassName('mobileTitle')[0];
    let mobileInfo = mobileContent.getElementsByClassName('mobileInfo')[0];

    if(curHtmlSlide.classList.contains('interior')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.name;
        mobileInfo.innerHTML = 'Interior';
    }else if(curHtmlSlide.classList.contains('object')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.artist;
        mobileInfo.innerHTML = 'Objects';
    }else if(curHtmlSlide.classList.contains('video')){
        mobileTitle.innerHTML = curHtmlSlide.dataset.name;
        mobileInfo.innerHTML = curHtmlSlide.dataset.mobileinfo;
    }
    
    if(currentSlide === 0){
        mobileContent.getElementsByClassName('mobilePrevArrow')[0].classList.add('hidden');
    }else if(currentSlide === slides.length -1){
        mobileContent.getElementsByClassName('mobileNextArrow')[0].classList.add('hidden');
    }
    else{
        mobileContent.getElementsByClassName('mobileNextArrow')[0].classList.remove('hidden');
        mobileContent.getElementsByClassName('mobilePrevArrow')[0].classList.remove('hidden');
    }
    
}

function checkCurrentSlide(direction){
    let currentSlide = $('.content-slider').slick('slickCurrentSlide');
    let slides = $('.content-slide');
    if (((slides.length-1 != currentSlide) || direction == 'left') && (currentSlide != 0 || direction == 'right')) {
        slides.eq(currentSlide).addClass('fade-outOp');
      }
}

function addNavigation(){
    let cases = document.getElementById('cases-container');
    cases.addEventListener('click', function(){
        if(this.classList.contains('cursor-left')){
            if(transitionDone){
                transitionDone = false;
                checkCurrentSlide('left');
                $('.cases-slider').slick('slickPrev');
                setTimeout(prevSlide, 500);
            }
        }else if(this.classList.contains('cursor-right')){
            if(transitionDone){
                transitionDone = false;
                checkCurrentSlide('right');
                $('.cases-slider').slick('slickNext');
                setTimeout(nextSlide, 500);
            }
        }
        else if(this.classList.contains('cursor-crosshair')){
            let currentSlide = $('.cases-slider').slick('slickCurrentSlide');
            let slide = $('.case-slide');
            console.log(currentSlide);
            if(slide.eq(currentSlide)[0].classList.contains('video')){
                /*slide.eq(currentSlide)[0].getElementsByClassName('s-playbtn')[0].click();*/
                
                let creditBar = document.getElementById('s-credit-bar8');
                let main = document.getElementById('sw_content');
                
                let content = document.getElementsByClassName('s-comp12')[0];
                let topBar = document.getElementById('s-logo-full7');
                let iframe = document.getElementsByClassName('s-intro-vid')[0];
                let menu = document.getElementsByClassName('s-header-granito')[0];
                
                //content.style.display = 'none';
                /*topBar.style.display = 'flex';
                creditBar.style.display = 'flex';
                iframe.style.display = 'block';
                menu.style.display = 'none';
                main.classList.add('no-padding');*/
                
                console.log(slide.eq(currentSlide)[0]);
                
                let introVid = document.getElementsByClassName('s-highlight-vid')[0];
                introVid.getElementsByTagName('video')[0].src = slide.eq(currentSlide)[0].dataset.src;
                introVid.getElementsByTagName('video')[0].poster = slide.eq(currentSlide)[0].dataset.poster;
                /*introVid.classList.add('no-opacity');*/
                introVid.style.display = 'block';
                introVid.classList.add('fade-inOp');
                /*introVid.style.height = 'calc(100vh - 150px)';
                introVid.style.width = '100vw';*/
                introVid.style.position = 'fixed';
                introVid.style.top = '75px';
                introVid.style.left = '0';
                introVid.style.bottom = '75px';
                introVid.style.right = '0';
                
               /* introVid.style.display = 'block';*/
                /*introVid.classList.add('no-opacity');*/

                topBar.style.display = 'flex';
                /*topBar.classList.add('no-opacity');*/
                
                creditBar.style.display = 'flex';
                /*creditBar.classList.add('no-opacity');*/
                
                topBar.classList.remove('fade-outOp-5');
                creditBar.classList.remove('fade-outOp-5');
                topBar.classList.add('fade-inOp-5');
                creditBar.classList.add('fade-inOp-5');
                
                setTimeout(function(){
                    menu.classList.remove('fade-inOp');
                    content.classList.remove('fade-inOp');
                    menu.classList.add('fade-ouOp');
                    content.classList.add('fade-outOp');
                }, 700);
                setTimeout(function(){
                    creditBar.classList.remove('no-opacity');
                    topBar.classList.remove('no-opacity');
                }, 500);
                setTimeout(function(){
                    main.classList.add('no-padding');
                }, 1000);
            }
        }
    });
}

function nextSlideMobile(){
    $('.content-slider').slick('slickNext');
    $('.cases-slider').slick('slickNext');
}

function prevSlideMobile(){
    $('.content-slider').slick('slickPrev');
    $('.cases-slider').slick('slickPrev');
}

function nextSlide() {
   $('.content-slider').slick('slickNext');
   //transitionDone = true;
}

function prevSlide() {
   $('.content-slider').slick('slickPrev');
   //transitionDone = true;
}

function trackMouse(){
    let cases = document.getElementById('cases-container');
    cases.onmousemove = handleMouseMove;
    
    
    
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        

        
    
        let images = document.getElementsByClassName('highlight-image');

        

        // Use event.pageX / event.pageY here
        let currentSlide = $('.content-slider').slick('slickCurrentSlide');
        let slides = $('.content-slide');
        if (slides.length-1 == currentSlide){
            cases.classList.add('cursor-left');
            cases.classList.remove('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        else if(currentSlide == 0){
            cases.classList.remove('cursor-left');
            cases.classList.add('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        else if(event.pageX < cases.offsetWidth / 2){
            // cursor left
            cases.classList.add('cursor-left');
            cases.classList.remove('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }else{
            // cursor right
            cases.classList.remove('cursor-left');
            cases.classList.add('cursor-right');
            cases.classList.remove('cursor-crosshair');
        }
        
        for(let i = 0; i < images.length; i++){
            let pos = images[i].getBoundingClientRect();
            let x = pos.left;
            let y = pos.top;
            let width = pos.width;
            let height = pos.height;
            if((event.pageX >= x && event.pageX <= width + x)&&(event.pageY >= y && event.pageY <= height + y)){
                let slider = images[i].parentElement.parentElement.parentElement.parentElement;
                let curSlide = slider.childNodes[currentSlide];
                // if(curSlide.classList.contains('video')) return;
                let imgs = curSlide.getElementsByClassName('highlight-image');
                for(let j = 0; j < imgs.length; j++){
                    if(imgs[j] === images[i]){
                        cases.classList.remove('cursor-left');
                        cases.classList.remove('cursor-right');
                        cases.classList.add('cursor-crosshair');
                    }
                }
            }
        }
    }
    
   
}
 function disableArrow(event){
        console.log('test');
    }
    
})();


document.addEventListener('DOMContentLoaded', function() {
//  Global
	let comps = document.getElementsByClassName('s-comp13'),
		comp;

	if(comps.length === 0) return;
	
//  functions
    function getHostName() {
      if ((window.location.hostname == "localhost") || (window.location.hostname == "cloud.sitemn.gr") || (window.location.hostname == "sitemn.gr") || (window.location.hostname == "www.sitemn.gr")) {
        if ((window.location.hostname == "sitemn.gr") || (window.location.hostname == "www.sitemn.gr")) {
          return window.location.hostname + "/il_granito";
        } else {
          return window.location.hostname + "/users/il_granito";
        }
      } else {
        return window.location.hostname;
      }
    }
    

    function handleMailchimp() {
    	let emailDOM = comp.getElementsByClassName('mail__input')[0],
    	    msgDOM = comp.getElementsByClassName('s-msg')[0],
    	    error = msgDOM.dataset.error;
    	    msg = msgDOM.dataset.msg;
    
    	if(emailDOM) {
    		let email = emailDOM.value;

    		let xhr = new XMLHttpRequest();
    		xhr.open('POST', '//' + getHostName() + '/swfiles/lib/mc_form.php', true);
    		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    		xhr.onreadystatechange = () => {
    			if (xhr.readyState === 4 && xhr.status === 200) {
    			    let {responseText} = xhr;
    			    console.log(xhr);
    			    console.log(responseText);
    			    
    			    if(responseText === "done") {
    			        msgDOM.setAttribute("data-validation", "succes");
    			        msgDOM.innerText = msg;
    			    } else if(responseText.includes('looks fake or invalid') || responseText.includes('Please provide a valid email address')) {
    			        msgDOM.setAttribute("data-validation", "error");
    			        msgDOM.innerText = error;
    			    }
    			}
    		};
    
    		xhr.send(`MERGE0=${encodeURIComponent(email)}`);
    	}
    }
    
//  loop 
	for (let i = 0; i < comps.length; i++) {
			comp = comps[i];
						
	 }
	 
	 
//  Click
    document.addEventListener('click', (e) => {
        const src = e.target,
              submit = src.closest('.s-comp13 button[type="submit"]');
              
        if(submit) {
            e.preventDefault();
            handleMailchimp();
        }
    })
});


const screenSize = 800000;
const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

(function () {
    
    if(currentWidth >= screenSize){
        if(document.getElementById("case-detail") !== null  && document.getElementById("case-detail") !== undefined){
            function scrollH(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                document.getElementById('case-detail').scrollLeft -= (delta * 40);
                e.preventDefault();
            }
            if (window.addEventListener) {
                window.addEventListener("mousewheel", scrollH, false);
                window.addEventListener("DOMMouseScroll", scrollH, false);
            } else {
                window.attachEvent("onmousewheel", scrollH);
            }
        }
    }
     
})();
$(document).ready(function () {
    
	$(window).on('popstate', function() {
	    var newPageArray = location.pathname.split('/'),
	    newPage = newPageArray[newPageArray.length - 1];
	    window.location.href = newPage;

	});
    
    if(document.getElementById("case-detail") !== null  && document.getElementById("case-detail") !== undefined){
        let options = {
            debugMode: true
        };
        console.log('detail found');
      //const swup = new Swup(options); 
        
            let url_string = window.location.href; 
            let url = new URL(url_string);
            let lid = url.searchParams.get("lid");
            if(lid !== null){
                console.log('lid found');
                let header = document.getElementsByClassName('s-header-granito');
                for(let i = 0; i < header.length; i++){
                    header[i].classList.add('hidden');
                }
                let html = document.getElementsByTagName('html')[0];
                html.classList.add('s-detail');
            }
         const scrollBtn = comp.getElementsByClassName('scroll-to-explore')[0];
        const wrapper = document.getElementById('case-detail');
        ackordion.initAll();
        const scroll = 300;
        if(wrapper){
          
            wrapper.addEventListener('scroll', (e) => {
                if(scroll > 0) {
                    //const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    const currentScroll = e.target.scrollTop;
                    console.log(currentScroll);
                    if (currentScroll >= scroll) {
                        scrollBtn.classList.add('is-scrolled');
                    } else {
                        scrollBtn.classList.remove('is-scrolled');
                    }
                }
            });
            
        }
        
        // if(currentWidth >= screenSize){
            
        //         $("#case-detail").niceScroll({
        //             autohidemode: "hidden",
        //             emulatetouch: true
        //         });
        // $('#case-detail').scroll(function () {
        //     let offset = 500;
        //         var $elem=$('#case-detail');
        //         var newScrollLeft = $elem.scrollLeft(),
        //             width=$elem.outerWidth(),
        //             scrollWidth=$elem.get(0).scrollWidth;
        //         let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        //         let caseDetails = document.querySelectorAll('.s-comp-detail2 .case-details')[0];
        //         let scrollIndicator = document.querySelectorAll('.s-comp-detail2 .scroll-to-explore')[0];
        //         if(w/2 - 350 <= newScrollLeft){
                    
        //             opacity = (w/2 - newScrollLeft) / 350;
        //             if(opacity >= 0){
        //                 caseDetails.style.opacity = opacity;
        //                 scrollIndicator.style.opacity = opacity;
        //             }
        //             else if(caseDetails.style.opacity != 0){
        //                 caseDetails.style.opacity = 0;
        //                 scrollIndicator.style.opacity = 0;
        //             }
        //         }else{
        //             if(caseDetails.style.opacity != 1){
        //                 caseDetails.style.opacity = 1;
        //                 scrollIndicator.style.opacity = 1;
        //             }
        //         }
        //         let nextCase = document.getElementById('next-case-btn');
        //         if (scrollWidth-newScrollLeft-offset<=width) {
        //             // calculate opacity
        //             let opacity =  (width - (scrollWidth-newScrollLeft-offset)) / offset;
        //             nextCase.style.opacity = opacity;
        //         }else{
        //             nextCase.style.opacity = '0';
        //         }
        //     });
        // }
        
        if(currentWidth <= screenSize){
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let navbarHeight = $('#back-button').outerHeight();
            
            $(window).scroll(function(event){
                didScroll = true;
            });
            
            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);
            
            function hasScrolled() {
                let st = $(this).scrollTop();
                
                // Make sure they scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;
                
                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight){
                    // Scroll Down
                    $('#back-button').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        $('#back-button').removeClass('nav-up').addClass('nav-down');
                    }
                }
                
                lastScrollTop = st;
            }
        }
        
    }
    
    
});
document.addEventListener('DOMContentLoaded', () => {
    // const initAccordion = (accordionNode) => {
    //     const accordion = new Accordion(accordionNode, {
    //         modal: true,
    //         heightOffset: 2
    //     });
    // };

    new SM_Component('.s-comp2', (comp) => {
        
        const scrollBtn = comp.getElementsByClassName('scroll-to-explore')[0];
        const wrapper = document.getElementById('case-detail');
        /* INIT accordion */
        // const accordionNodes = Array.from(comp.querySelectorAll('.s-accordion'));
        
        // if(accordionNodes.length === 0) return;
        
        // for (let i = 0; i < accordionNodes.length; i++) {
        //     console.log(accordionNodes);
        //     initAccordion(accordionNodes[i]);
        // }
        ackordion.initAll();
        const scroll = 300;
        if(wrapper){
          
            wrapper.addEventListener('scroll', (e) => {
                if(scroll > 0) {
                    //const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    const currentScroll = e.target.scrollTop;
                    console.log(currentScroll);
                    if (currentScroll >= scroll) {
                        scrollBtn.classList.add('is-scrolled');
                    } else {
                        scrollBtn.classList.remove('is-scrolled');
                    }
                }
            });
            
        }
    });
    
    /* Event Handlers */
    document.addEventListener('click', e => {
        const source = e.target;
    });
});


