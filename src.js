document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form")


  form.addEventListener("submit", function() {


    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const admin = document.getElementById("admin-input").checked


  })

  const admin = document.getElementById("admin-input")
  const body = document.getElementsByTagName("body")[0]

  admin.addEventListener("click", function() {

    if (admin.checked) {
      document.getElementById('meta').innerHTML = 'i love you keep going'
    } else {
      let newText = document.getElementById("new-text")
      body.removeChild(newText)
    }
  })


})
