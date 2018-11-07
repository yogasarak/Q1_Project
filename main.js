document.addEventListener('DOMContentLoaded', function() {
  // dropdown
  let elems = document.querySelectorAll('.dropdown-trigger')
  let instances = M.Dropdown.init(elems)
  // parallax
  let elemsParallax = document.querySelectorAll('.parallax');
  let instances2 = M.Parallax.init(elemsParallax);
  // list items in drop down
  let li = document.querySelectorAll('li')

  for (let i = 0; i < li.length; i++) {
    let item = li[i]


    item.addEventListener('click', function(event) {

      let hidDiv = document.getElementsByClassName('hideDiv')
      let moodyCard = document.getElementById('moodyCard')
      let moody = document.getElementById('moody')
      let valleyCard = document.getElementById('valleyCard')
      let valley = document.getElementById('valley')
      let peaksCard = document.getElementById('peaksCard')
      let peaks = document.getElementById('peaks')


      if (event.target === moody) {
        moodyCard.style.display = 'block'
        valleyCard.style.display = 'none'
        peaksCard.style.display = 'none'
      } else if (event.target === valley) {
        valleyCard.style.display = 'block'
        moodyCard.style.display = 'none'
        peaksCard.style.display = 'none'
      } else if (event.target === peaks) {
        peaksCard.style.display = 'block'
        valleyCard.style.display = 'none'
        moodyCard.style.display = 'none'
      }




    })
  }

  // Collapsible
  let elems1 = document.querySelectorAll('.collapsible');
  let instances3 = M.Collapsible.init(elems1);

  // // form
  // $(document).ready(function() {
  //   $('input#input_text, textarea#textarea2').characterCounter();
  // })


})
// onclick='myFunction()'
// individual evemnt addEventListener for each list
