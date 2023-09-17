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