let hamburger = document.querySelector('.trigger'),
    header = document.querySelector('.header'),
    main = document.querySelector('.main');

hamburger.addEventListener('click', function(){
  if(!hamburger.classList.contains('open')){
    this.classList.add('open');
    header.classList.add('open');
    main.style.display = 'none';
  }else{
    this.classList.remove('open');
    header.classList.remove('open');
    main.style.display = 'block';
  }
})