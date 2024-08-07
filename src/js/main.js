let hamburguerMenu = document.querySelector('img#icon_navegation')
let menuNav = document.querySelector('#navegation')

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

function upgrade_windows() {
    if (window.innerWidth >= 769) {
        options.style.display = 'flex'
    }

    options.style.display = 'none'
}

hamburguerMenu.addEventListener("click", click_menu)

window.addEventListener('scroll', function() {
  menuNav.classList.toggle(`rolagem`, window.scrollY > 100)
})

