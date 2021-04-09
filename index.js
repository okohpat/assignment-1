let menuVisible = false
function showMenu() {
  let navMenu = document.getElementById('nav-menu')
  if (!menuVisible) {
    navMenu.style.display = "block"
    menuVisible = true
  } else {
    navMenu.style.display = "none"
    menuVisible = false
  }
}
