let menuHamburguer = document.querySelector('img#icon_navegation')
let menuNav = document.querySelector('#navegation')
let sectionDados = document.querySelector('#Inicio')
let contCafes = document.querySelector('#coffee_number')
let contAtendidos = document.querySelector('#clientes_number')
let contIdeias = document.querySelector('#ideias_number')

function contator(contadorElement, valorAlvo) {
    let contador = 0;
    let intervalo = 1;

    function atualizar() {
      contadorElement.textContent = `+ de ${contador}`;

      if (contador < valorAlvo) {
        contador++;
        if (contador >= valorAlvo - 50) {
          intervalo = 10;
        }
        setTimeout(atualizar, intervalo);
      }
    }
    atualizar();
  }

function click_menu() {
    if (options.style.display == 'flex') {
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
        options.style.display = 'none'
    }
    else {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
        options.style.display = 'flex'
    }
}

function upgrate_windows() {
    if (window.innerWidth >= 769) {
        options.style.display = 'flex'
    }
    else {
        options.style.display = 'none'
    }
}

function open_menu() {
    menuNav.classList.toggle(`rolagem`, window.scrollY > 100)
}

function verificarVisibilidade() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        sectionDados.classList.add('background_infos')
        contator(contAtendidos, 150);
        contator(contCafes, 500);
        contator(contIdeias, 1000);
        
        observer.disconnect();
      }
    });

    observer.observe(sectionDados);
}

menuHamburguer.addEventListener("click", click_menu)
window.addEventListener('scroll', open_menu)
window.addEventListener('scroll', open_menu)
document.addEventListener("DOMContentLoaded", verificarVisibilidade)
