gsap.utils.toArray(".section").forEach((item, index) => {
  let bgColor = item.getAttribute("data-bgColor"),
      textColor = index === 0 ? "#000" : "#fff",
      invertFilter = index === 0 ? "invert(0)" : "invert(1)";

  ScrollTrigger.create({
    trigger: item,
    start: "top 50%",
    end: "bottom 50%",
    //markers: true, //가이드 라인 표시 여부

    onEnter: () => {
      gsap.to("body", {
        backgroundColor: bgColor,
        "--textColor": textColor,
        duration: 0.5
      });
      gsap.to(".socialBtn i", {
        filter: invertFilter,
        duration: 0.5,
      });
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor: bgColor,
        "--textColor": textColor,
        duration: 0.5
      });
      gsap.to(".socialBtn i", {
        filter: invertFilter,
        duration: 0.5,
      });
    },
  });
});

let links = gsap.utils.toArray(".header nav .gnb li a");

links.forEach(link => {
  let element = document.querySelector(link.getAttribute("href")),  
      linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
      });

  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => setActive(link)
  });

  link.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 0.5, scrollTo: linkST.start, overwrite: "auto"});
  });
});

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
}


window.onload = function(){
  const elm = document.querySelectorAll('.section');
  const elmCount = elm.length;
  elm.forEach(function(item, index){
    item.addEventListener('mousewheel', function(event){
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta){
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } 
      else if (event.detail)
        delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      //wheel down : move to next section
      if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      //wheel up : move to previous section
      else{
        if (elmSelector !== 0){
          try{
            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }

      const body = document.querySelector('html');
      window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
    });
  });
}