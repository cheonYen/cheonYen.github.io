let projects = [
  {
    id: 1,
    title: '서대문구 충현동 주민센터 리뉴얼',
    date: '2023/05/01 ~ 2023/06/07',
    stack: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'VS Code', 'Figma'],
    desc: '무슨 무슨 프로젝트이며, 무슨 기능을 썼는지 어느 부분을 맡았는지. 간략하게 설명한다. 무슨 무슨 프로젝트이며, 무슨 기능을 썼는지 어느 부분을 맡았는지. 간략하게 설명한다. 무슨 무슨 프로젝트이며, 무슨 기능을 썼는지.',
    imgSrc: 'img/main01.png',
    links: [
      {
        gitHub: 'https://github.com/cheonYen/Chunghyeon-dongCenter_renewal',
        demo: 'https://cheonyen.github.io/Chunghyeon-dongCenter_renewal',
      },
    ],
  },
  {
    id: 2,
    title: '소이베베 리뉴얼',
    date: '2023/05/01 ~ 2023/06/07',
    stack: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'VS Code', 'Figma'],
    desc: '무슨 무슨 프로젝트이며, 무슨 기능을 썼는지 어느 부분을 맡았는지. 간략하게 설명한다. 무슨 무슨 프로젝트이며, 무슨 기능을 썼는지 어느 부분을 맡았는지. 간략하게 설명한다. 무슨 무슨 프로젝트이며, 무슨 기능을 썼는지.',
    imgSrc: 'img/main02.png',
    links: [
      {
        gitHub: 'https://github.com/cheonYen/soybebe_renewal',
        demo: 'https://cheonyen.github.io/soybebe_renewal',
      },
    ],
  },
  {
    id: 3,
    title: '폭스바겐 리뉴얼',
    date: '2023/08/01 ~ 2023/08/31',
    stack: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'VS Code', 'Figma'],
    desc: '폭스바겐은 &lsquo;volks(사람)&rsquo;와 &lsquo;wagen(자동차)&rsquo;의 합성어로 &lsquo;국민 자동차&rsquo;라는 의미를 담고 있는 독일 자동차 브랜드이며, 폭스바겐코리아 웹사이트에서는 동적인 콘텐츠 부족과 일관성 없는 폰트 사용 등의 원인으로 사용자 편의성이 떨어지는 문제를 발견할 수 있었습니다. 저희는 이런 문제점들을 개선하여 사용자 친화적인 인터페이스를 구축하고 폭스바겐 브랜드의 아이덴티티를 잘 드러내는 디자인으로 사용자의 흥미를 이끌만한 매력적인 웹사이트로 바꾸어 보고자 리뉴얼 프로젝트를 진행했습니다.',
    imgSrc: 'img/main03.png',
    links: [
      {
        gitHub: 'https://github.com/hyunseok9898/VolksWagen_Renewal',
        demo: 'https://hyunseok9898.github.io/VolksWagen_Renewal',
      },
    ],
  },
];

let projectWrap = document.querySelector('#project');

for (let project of projects) {
  let projectSection = document.createElement('section');
  projectSection.className = 'projectLi section';

  let contentsWrap = document.createElement('div');
  contentsWrap.className = 'contentsWrap';

  let imgWrap = document.createElement('div');
  imgWrap.className = 'imgWrap';
  let img = document.createElement('img');
  img.src = project.imgSrc;
  img.alt = project.title + 'image';

  let textWrap = document.createElement('div');
  textWrap.className = 'textWrap';
  let stackWrap = document.createElement('div');
  stackWrap.className = 'stackWrap';
  for (let stackItem of project.stack) {
    let stackSpan = document.createElement('span');
    stackSpan.textContent = stackItem;
    stackWrap.appendChild(stackSpan);
  }
  let iconWrap = document.createElement('div');
  iconWrap.className = 'iconWrap';
  iconWrap.innerHTML = `
    <img src="img/arrowLeftToRight.svg" alt="Arrow Left to Right">
  `;
  let btnWrapDiv = document.createElement('div');
  btnWrapDiv.className = 'btnWrap';
  btnWrapDiv.innerHTML = `
    <button class="moreView" onclick="location.href='${project.links.gitHub}';">
      <p>GitHub</p>
      ${iconWrap.outerHTML}
      </button>
    <button class="moreView" onclick="location.href='${project.links.demo}';">
      <p>Demo</p>
      ${iconWrap.outerHTML}
    </button>
  `;
  
  textWrap.innerHTML = `
    <p class='date'>${project.date}</p>
    <h3>${project.title}</h3>
    <span>스택</span>
    ${stackWrap.outerHTML}
    <span>프로젝트 소개</span> 
    <p class='desc'>${project.desc}</p>
    ${btnWrapDiv.outerHTML}
  `;

  
  imgWrap.appendChild(img);
  contentsWrap.appendChild(imgWrap);
  contentsWrap.appendChild(textWrap);
  projectSection.appendChild(contentsWrap);
  projectWrap.appendChild(projectSection);
}