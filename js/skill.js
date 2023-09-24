let skills = [
  {
    id: 1,
    name: 'HTML5',
    desc: 'HTML5에 대한 설명',
    imgs: {
      src: 'img/html5.png', 
      alt: 'HTML5 Symbol',
    },    
  },
  {
    id: 2,
    name: 'CSS3',
    desc: 'CSS3에 대한 설명',
    imgs: {
      src: 'img/css3.png', 
      alt: 'CSS3 Symbol',
    },    
  },
  {
    id: 3,
    name: 'JavaScript',
    desc: 'JavaScript 대한 설명',
    imgs: {
      src: 'img/javaScript.png', 
      alt: 'JavaScript Symbol',
    },    
  },
  {
    id: 4,
    name: 'Adobe Illustrator',
    desc: 'Adobe Illustrator 대한 설명',
    imgs: {
      src: 'img/illustrator.png', 
      alt: 'Adobe Illustrator Symbol',
    },    
  },
  {
    id: 5,
    name: 'Adobe Photoshop',
    desc: 'Adobe Photoshop 대한 설명',
    imgs: {
      src: 'img/photoshop.png', 
      alt: 'Adobe Photoshop Symbol',
    },    
  },
  {
    id: 6,
    name: 'Figma',
    desc: 'Figma 대한 설명',
    imgs: {
      src: 'img/figma.png', 
      alt: 'Figma Symbol',
    },    
  },
];

let skillList = document.querySelector('ul.skillList');
for (let skill of skills) {
  let skillLi = document.createElement('li');
  let image = document.createElement('img');
  image.src = skill.imgs.src;
  image.alt = skill.imgs.alt;
  skillLi.appendChild(image);
  skillList.appendChild(skillLi);

  skillLi.addEventListener('click', () => {
    let viewContainer = document.querySelector('#skill .viewContainer');
    let viewThumb = viewContainer.querySelector('img');
    let viewTitle = viewContainer.querySelector('h4');
    let viewDesc = viewContainer.querySelector('p');

    viewThumb.src = skill.imgs.src;
    viewThumb.alt = skill.imgs.alt;
    viewTitle.textContent = skill.name;
    viewDesc.textContent = skill.desc;
  });
}