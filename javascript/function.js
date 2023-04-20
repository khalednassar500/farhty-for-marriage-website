// -- after loading the page 
document.addEventListener('DOMContentLoaded' ,  () => {
  setTimeout(() => document.getElementById('loading').style.display = 'none', 3000)
})


// ------------------------------
function toggleNav() {
  document.getElementById('nav-res').classList.toggle('res')
}