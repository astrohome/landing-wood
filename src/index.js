import './sass/bulma.sass'
import 'fullpage.js'
window.console.log('hello world')
if (process.env.NODE_ENV !== 'production') {
  window.console.log('not in production')
}
$(document).ready(function() {
	$('#fullpage').fullpage()
})
