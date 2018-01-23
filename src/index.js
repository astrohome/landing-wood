import './sass/bulma.sass'
import 'fullpage.js'
window.console.log('hello world')
if (process.env.NODE_ENV !== 'production') {
  window.console.log('not in production')
}
$(document).ready(function() {
	$('#fullpage').fullpage()
})

// open/close menu in mobile

window.openMobileMenu = function(){
  var menuClass = document.getElementById('main-menu').classList
  if (menuClass == "navbar-menu"){
    menuClass.add("is-active")
  }
  else {
    menuClass.remove('is-active')
  }
}