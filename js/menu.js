const menubotao = document.querySelector(".icon_menu");
const menubotaoclose = document.querySelector(".icon_close");
const menuLista = document.querySelector(".menu_list");
const link = document.querySelectorAll(".link");

for (i = 0; i < link.length; i++) {
    link[i].addEventListener("click", ()=>{menuLista.classList.toggle("header__nav-visivel")});
  }

menubotao.addEventListener("click", ()=>{menuLista.classList.toggle("header__nav-visivel")});
menubotaoclose.addEventListener("click", ()=>{menuLista.classList.toggle("header__nav-visivel")});



    