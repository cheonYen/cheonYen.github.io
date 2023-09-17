let sections = gsap.utils.toArray(".main > section");
let links = gsap.utils.toArray(".gnb li a");
let activeSectionIndex = 0;
let isScrolling = false; // 가로 스크롤 중인지 여부를 확인하는 변수

// ScrollTrigger를 사용하여 각 섹션에 스크롤 트리거를 설정합니다.
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
  if (!isScrolling) { // 가로 스크롤 중이 아닐 때만 마우스 휠 이벤트 처리
    let newActiveIndex = activeSectionIndex;
    if (event.deltaY > 0 && newActiveIndex < sections.length - 1) {
      newActiveIndex++;
    } else if (event.deltaY < 0 && newActiveIndex > 0) {
      newActiveIndex--;
    }
    scrollToSection(newActiveIndex);
  }
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
  sections.forEach((section, i) => {
    sections[i].classList.remove("active");
    links[i].classList.remove("active");
  });
  sections[index].classList.add("active");
  links[index].classList.add("active");
}

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(index);
  });
});

let mainProject = document.querySelector("#mainProject");
let mainProjectLi = document.querySelectorAll(".mainProjectLi");

gsap.to(mainProjectLi, {
  xPercent: -100 * (mainProjectLi.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: mainProject,
    start: "top top",
    end: () => "+=" + mainProject.offsetWidth,
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (mainProjectLi.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 }
    },
    invalidateOnRefresh: true,
    anticipatePin: 1
  }
});

mainProject.addEventListener("scroll", () => {
  isScrolling = true; // 가로 스크롤 중일 때 플래그 설정
});

mainProject.addEventListener("scrollend", () => {
  isScrolling = false; // 가로 스크롤 종료 시 플래그 해제
});

document.addEventListener("wheel", handleMouseWheel);