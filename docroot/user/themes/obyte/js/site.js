var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

function parallaxBackground() {
    $('.parallax').css('background-positionY', ($(window).scrollTop() * 0.3) + 'px');
}

function swiperMain () {
    const swiper = document.querySelector('.swiper-container')
    this.swiper = new Swiper(swiper, {
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesVisibility: true,
        centeredSlides: document.body.getBoundingClientRect().width <= 450,
        navigation: {
            nextEl: '.control.right',
            prevEl: '.control.left'
        }
    })
    this.swiper.slideTo(this.swiper.slides.length);
}

function animationLogic () {
    const container = document.querySelector('.clip-container');
    let reloader = null
    const scene1 = document.querySelector('.scene-block.scene1');
    const scene2 = document.querySelector('.scene-block.scene2');
    const scene3 = document.querySelector('.scene-block.scene3');

    function reload () {
      if (container) {
        container.innerHTML = scene1.outerHTML;
        reloader = container.querySelector('.reply-block');
        reloadHelper(reloader);
        if (this.scene2Timeout != null) {
          clearTimeout(this.scene2Timeout);
          this.scene2Timeout = null;
        }
        if (this.scene3Timeout != null) {
          clearTimeout(this.scene3Timeout);
          this.scene3Timeout = null;
        }
        this.scene2Timeout = setTimeout(() => {
          this.scene2Timeout = null;
          container.innerHTML = scene2.outerHTML;
          reloader = container.querySelector('.reply-block');
          reloadHelper(reloader);
        }, 12000);
        this.scene3Timeout = setTimeout(() => {
          this.scene3Timeout = null;
          container.innerHTML = scene3.outerHTML;
          reloader = container.querySelector('.reply-block');
          reloadHelper(reloader);
        }, 32000)
      }
    }
  function reloadHelper (elem) {
    elem.addEventListener('click', () => {
      reload();
    })
  }
  reload();
}

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function() {};
}
function showHideMembers() {
  const membBtn = document.querySelector('.show-members');
  if (membBtn) {
    const teamWrap = document.querySelector('.team-wrap');
    const teamList = teamWrap.querySelector('.team-list');
    membBtn.addEventListener('click', (e) => {
      e.preventDefault();
      disableScroll();
      teamList.classList.toggle('show');
      membBtn.classList.toggle('show');
      setTimeout(()=>{
        enableScroll();
      },50);
    });
  }
}



function mobileLang() {
  const langBtn = document.querySelector('.mobile-lang');
  const langMenu = document.querySelector('.lang-options-wrap');
  const langBack = document.querySelector('.lang-options-wrap .back');
  const langLinks = document.querySelectorAll('.lang-options-wrap .lang-list a');
  langBtn.addEventListener('click', (e) => {
    e.preventDefault();
    langMenu.classList.toggle('d-none');
  });
  langBack.addEventListener('click', (e) => {
    e.preventDefault();
    langMenu.classList.add('d-none');
  });
}

jQuery(document).ready(function($){
    scrollHeader();

    // Scroll Events
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
            parallaxBackground();
        });
    };

    // Touch scroll
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to start
    $('#to-start').click(function(){
        var start_y = $('#start').position().top;
        var header_offset = 45;
        window.scroll({ top: start_y - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });

    //Smooth scroll to top
    $('#to-top').click(function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });

    // Responsive Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
    });

    // Tree Menu
    $(".tree").treemenu({delay:300});

    swiperMain();
    animationLogic();
    mobileLang();
    showHideMembers();
});

$(window).load(function(){
  let iframes = document.getElementsByTagName("iframe");
  for (let i = 0; i < iframes.length; i++) {
    iframes[i].style.position = "static";
  }
})
