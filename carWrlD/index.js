function loco(a){
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(a),
        smooth: true
    });

    // Update ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(a, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector(a).style.transform ? "transform" : "fixed"
    });

    // Update ScrollTrigger on Locomotive Scroll events
    locoScroll.on('scroll', ScrollTrigger.update);

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
}

var isMobile = /iPhone|iPad|iPod|Android|Tablet/i.test(navigator.userAgent)

/* #page-1 h1{
    position: absolute;
    white-space: nowrap;
    font-size: 10vw;
    top: 30%;
    z-index: 1;
} */

console.log(isMobile)

var tl1=gsap.timeline()

window.addEventListener('contextmenu', (e)=> {
    // Your code to handle the context menu event
    console.log('Context menu opened'+e);
    // location.reload();
    // You can add your logic here to reload the page if needed
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(max-width: 480px)').matches) {
        console.log("Window resized");
        // location.reload();
    }
});


if(isMobile){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
    var h1P1=document.querySelector('#page-1>h1');
    h1P1.style.fontSize='11vw';
    h1P1.style.top='20%';
    // h1P1.style.backgroundColor='white';
    var bgP1=document.querySelector('#page-1 #cont');
    bgP1.style.height='75vh';
    bgP1.style.width='80vw';

    bgP1.style.top='15%';
    // bgP1.style.backgroundSize='contain';

    var h2p1=document.querySelector('#page-1 #cont-txt');
    h2p1.style.top='500px'
    h2p1.style.right='0%'
    h2p1.style.zIndex='1'
    h2p1.style.width='80vw'
    h2p1.style.fontSize='3vw'
    // h2p1.style.whiteSpace='pre'


    gsap.from('#page-1>h1',{
        opacity:0,
        transform:'translateY(-50%)',
        delay:.5,
        duration:.2,
    })
    tl1.from('#page-1 #cont',{
        opacity:0,
        transform:'translateY(100%)',
        duration:.5,
    })
    tl1.from('#page-1 #cont-txt',{
        opacity:0,
        duration:.5,
        scale:0
    })

}else{

    var locoScrollInstance = loco('main');

    gsap.to('#page-1>h1',{
        transform:'translateX(-60%)',
        wordSpacing: '-20px',
        fontWeight:"100",
        scrollTrigger:{
            trigger:'#page-1',
            scroller:'main',
            // markers:true,
            start:'top 0',
            end:'top -100%',
            scrub:1,
            pin:true
        }
    })

    tl1.from('#page-1 #cont',{
        marginRight:'-20%',
        marginBottom:'-30%',
        height:'90vh',
        width:'90%',
        scrollTrigger:{
            trigger:'#page-1 #cont',
            scroller:'main',
            // markers:true,
            start:'top 0',
            end:'top -100%',
            scrub:1
        }
    })
    tl1.from('#page-1 #cont-txt',{
        opacity:0,
        transform:'translateX(-30%)',
        scrollTrigger:{
            trigger:'#page-1 #cont-txt',
            scroller:'main',
            // markers:true,
            start:'top -30%',
            end:'top -60%',
            scrub:1
        }
    })

    tl1.from('#page-2>h1',{
        transform:'translateY(-30%)',
        opacity:0,
        scrollTrigger:{
            trigger:'#page-2',
            scroller:'main',
            // markers:true,
            start:'top 50%',
            end:'top 40%',
            scrub:1,
            // pin:true
        }
    })
    tl1.to('#page-2>h1',{
        transform:'translateY(-100%)',
        // opacity:0.5,
        scrollTrigger:{
            trigger:'#page-2',
            scroller:'main',
            // markers:true,
            start:'top -590%',
            end:'top -610%',
            scrub:1,
            // pin:true
        }
    })

    gsap.to('#page-2 #cont',{
        transform:'translateX(-100%)',
        scrollTrigger:{
            trigger:'#page-2',
            scroller:'main',
            // markers:true,
            start:'top 0',
            end:'top -600%',
            scrub:1,
            pin:true
        }
    })

    let workInfoItems=document.querySelectorAll('.img');
    workInfoItems.forEach(function(item,index){
        item.style.zIndex=workInfoItems.length-index;
    });

    gsap.set('.img',{
        clipPath: function() {
            return "inset(0px 0px 0px 0px)"
        },
    });

    gsap.to('.img:not(:last-child)',{
        clipPath: function() {
            return "inset(0px 0px 100% 0px)"
        },
        scrollTrigger:{
            trigger:'#page-3',
            scroller:'main',
            // markers:true,
            start:'top -2%',
            end:'top -400%',
            scrub:1,
            // pin:true
        },
        stagger:.5,
        ease:'none'
    });

    gsap.to('#overlay',{
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:'#page-3',
            scroller:'main',
            // markers:true,
            start:'top -2%',
            end:'top -500%',
            scrub:1,
            pin:true
        },
        stagger:.5,
        ease:'none'
    });
}

