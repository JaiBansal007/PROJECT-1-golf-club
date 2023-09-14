var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x-250+"px";
    blur.style.top=dets.y-250+"px";
})
gsap.to("#nav",{
    backgroundColor:"#000",
    // y:"9390",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
var h4all=document.querySelectorAll("#nav h4,#footer .obj");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
    })
})
gsap.from("#aboutus img,#about-us-in ",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }
})
gsap.from(".card",{
    scale:0.6,
    opacity:0,
    duration:1.5,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
})
gsap.from("#colon1 ",{
    y:-70,
    x:-70,
    opacity:0,
    duration:1.4,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // marker:true,
        start:"top 50%",
        end:"top 40%",
        scrub:3,
    }
})
gsap.from("#colon2 ",{
    y:70,
    x:70,
    opacity:0,
    duration:1.4,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // marker:true,
        start:"top 50%",
        end:"top 40%",
        scrub:3,
    }
})
gsap.from("#page4 h1 ",{
    y:900,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#page4 ",
        scroller:"body",
        // marker:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})