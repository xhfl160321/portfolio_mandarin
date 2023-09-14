(function () {
    //p2 사진 hover 시 아래 p 태그 show 쿼리
    var imgHover = $(".p2Mid .img .imgtext");
    var img_vLine = $(".p2Mid .img .imgtext .vLine");
    var imgP = $(".p2Mid .img .imgtext p");

    img_vLine.hide();
    imgP.hide();

    imgHover.hover(function () {
        $(this).find(img_vLine).stop().slideDown(500);
        $(this).find(imgP).stop().slideDown(500);
    }, function () {
        $(this).find(img_vLine).stop().slideUp(500);
        $(this).find(imgP).stop().slideUp(500);
    });

    //p3 글귀 스크롤 이벤트 쿼리
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: true,
            onEnter: function () {
                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeave: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
                gsap.fromTo(
                    elem,
                    { y: -100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
    });


    //p5 이미지 배너 무한 슬라이드 쿼리
    var banner = setInterval(bannerSlide, 2000);
    var index = 2;

    function bannerSlide() {
        $(".banner ul").animate({ "left": -250 * index + "px" }, 300);
        index++;

        if (index > $(".banner ul li").length - 3) {
            $(".banner ul").animate({ "left": 0 }, 0);
            index = 0;
        }
    }

    //클릭 시 부드러운 scroll down
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

})(jQuery);