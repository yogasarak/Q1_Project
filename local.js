document.addEventListener('DOMContentLoaded', function() {

let form =
document.getElementsByClassName('input-form')[0]

let data = localStorage.getItem ('data')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  let name = document.getElementById('name-input').value
  localStorage.setItem('name', name)

})

if (localStorage.getItem('name')) {
  document.getElementById('response').innerHTML = localStorage.getItem('name')
}
let retrievedlocalStorage = JSON.parse(localStorage.getItem(name))

})
