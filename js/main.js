let skillList = document.querySelectorAll('.skillList li');
let viewContainer = document.querySelector('#skill .viewContainer');
let viewThumb = viewContainer.querySelector('img');
let viewTitle = viewContainer.querySelector('h4');
let viewDesc = viewContainer.querySelector('p');

skillList.forEach((skill) => {
  skill.addEventListener('click', () => {
    let skillThumb = skill.querySelector('img');
    let choiceThumb = skillThumb.getAttribute('src');
    let choiceTitle = skill.getAttribute('data-title');
    let choiceDesc = skill.getAttribute('data-desc');
    viewThumb.setAttribute('src', choiceThumb);
    viewTitle.innerHTML = choiceTitle;
    viewDesc.innerHTML = choiceDesc;
  });
});

let miniProjectLi = document.querySelectorAll('#miniProject .contentsWrap .projectList li a .imgWrap img');
let isMobile = window.matchMedia("(max-width: 768px)");

function updateImages() {
  if(!isMobile.matches) {
    for(let a = 0; a < miniProjectLi.length; a++) {
      miniProjectLi[a].setAttribute('src', `img/mini0`+[a + 1]+`.png`);
    }
  } else{
    for(let a = 0; a < miniProjectLi.length; a++) {
      miniProjectLi[a].setAttribute('src', `img/arrowLeftToRightDiagonal.svg`);
    }
  }
}
// 페이지가 로드될 때 초기 이미지 업데이트
window.onload = () => {
  updateImages(); 
}
window.addEventListener('resize', updateImages); 