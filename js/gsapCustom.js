let sections = gsap.utils.toArray(".main .section");
let contents = gsap.utils.toArray(".main .content");
let links = gsap.utils.toArray(".gnb li a");
let activeSectionIndex = 0;

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    onEnter: () => setActiveSection(index),
    onEnterBack: () => setActiveSection(index)
  });
});

function handleMouseWheel(event) {
  let newActiveIndex = activeSectionIndex;
  if (event.deltaY > 0 && newActiveIndex < sections.length - 1) {
    newActiveIndex++;
  } else if (event.deltaY < 0 && newActiveIndex > 0) {
    newActiveIndex--;
  }
  scrollToSection(newActiveIndex);
}

function scrollToSection(index) {
  if (index !== activeSectionIndex) {
    let targetSection = sections[index];
    gsap.to(window, {
      duration: 0.5,
      scrollTo: targetSection,
      onComplete: () => setActiveSection(index)
    });
  }
}

function setActiveSection(index) {
  activeSectionIndex = index;
  contents.forEach((content, i) => {
    contents[i].classList.remove("active");
    links[i].classList.remove("active");
  });
  contents[index].classList.add("active");
  links[index].classList.add("active");
}

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(index);
  });
});

document.addEventListener("wheel", handleMouseWheel);

let contactScrollTrigger = {
  trigger: "#contact",
  start: "top center",
  end: "bottom center",
  scrub: true,
  markers: true,
};

function applyCommonSettings(element, settings) {
  gsap.set(element, settings);
}

function animateElement(element, animationSettings, triggerSettings) {
  gsap.to(element, {
    ...animationSettings,
    scrollTrigger: { ...contactScrollTrigger, ...triggerSettings },
  });
}

let elements = [
  {
    element: document.querySelector("#circle"), 
    settings: { height: "0" },
    animation: { height: "320%" } 
  },
  { 
    element: document.querySelector(".smile"), 
    settings: { top: "20%", right: "300px", transform: "rotate(-100deg)" }, 
    animation: { top: "0", right: "30px", transform: "rotate(40deg)" }  
  },
  { 
    element: document.querySelector(".palette"), 
    settings: { top: "38%", right: "250px", transform: "rotate(0deg)" }, 
    animation: { right: "-3rem", transform: "rotate(-10deg)" }
  },
  { 
    element: document.querySelector(".pop"), 
    settings: { bottom: "10rem", right: "250px", transform: "rotate(-20deg)" }, 
    animation: { bottom: "1rem", right: "-3rem", transform: "rotate(10deg)" }
  },
  { 
    element: document.querySelector(".ribbon"), 
    settings: { bottom: "30rem", right: "500px", transform: "rotate(200deg)" }, 
    animation: { bottom: "6rem", right: "420px", transform: "rotate(45deg)" }
  },
  { 
    element: document.querySelector(".bear"), 
    settings: { bottom: "45%", left: "500px", transform: "rotate(100deg)" }, 
    animation: { bottom: "25%", left: "10px", transform: "rotate(-45deg)" }
  },
  { 
    element: document.querySelector(".twinkle"), 
    settings: { top: "25%", left: "700px", transform: "rotate(100deg)" }, 
    animation: { top: "150px", left: "520px", transform: "rotate(-45deg)" }
  },
  { 
    element: document.querySelector(".wink"), 
    settings: { top: "25%", left: "700px", transform: "rotate(100deg)" }, 
    animation: {  top: "-2rem", left: "200px", transform: "rotate(-45deg)" }
  },
];

elements.forEach(({ element, settings, animation }) => {
  applyCommonSettings(element, settings);
  animateElement(element, animation);
});