
let data = {
  title: "user data",
  submittedBy: "admin",
}

function storeData() {
  let stringifiedData = JSON.stringify(data)
  localStorage.setItem("data", stringifiedData)

  localStorage.setItem('name')
  localStorage.getItem('email')

}
document.addEventListener('DOMContentLoaded', function() {
  storeData()

  let retrievedlocalStorage = JSON.parse(localStorage.getItem('data'))

  let emailInput = document.querySelector('email-input')
  let div = document.createElement('div')
  div.innerText = "no data yet"
  emailInput.after(div)
})
