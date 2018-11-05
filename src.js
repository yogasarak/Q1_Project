document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form")


  form.addEventListener("submit", function() {
    // event.preventDefault()

    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const telephone = document.getElementById("tel-input").value
    const admin = document.getElementById("admin-input").checked


  })

  const admin = document.getElementById("admin-input")
  const body = document.getElementsByTagName("body")[0]

  admin.addEventListener("click", function() {

    if (admin.checked) {
      let newText = document.createElement("p")
      newText.setAttribute("id", "new-text")
      newText.innerText = " i love you keep going"
      body.appendChild(newText)

    } else {
      let newText = document.getElementById("new-text")
      body.removeChild(newText)
    }
  })


})
