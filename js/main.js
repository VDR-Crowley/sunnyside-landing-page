let menu_mobile = document.querySelector(".menu-mobile");
let menu_nav = document.querySelector(".menu-nav");
let menu_filter = document.querySelector(".filter");

menu_mobile.addEventListener('click', () => {
  if(menu_nav.classList.contains('ativo')) {
    menu_nav.classList.remove('ativo');
    menu_nav.style.display = 'none';
    menu_filter.style.display = "none";

  } else {
    menu_nav.style.display = 'flex';
    menu_nav.classList.add('ativo');
    document.body.style.overflow = 'hidden';
    menu_filter.style.display = "block";
  }  
});

