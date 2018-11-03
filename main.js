document.addEventListener('DOMContentLoaded', function() {
  // dropdown
  let elems = document.querySelectorAll('.dropdown-trigger')
  let instances = M.Dropdown.init(elems)

  // parallax
  let elemsParallax = document.querySelectorAll('.parallax');
  let instances2 = M.Parallax.init(elemsParallax);

  // carousel
  // let carousel = document.querySelectorAll('.carousel')
  // let inItCarousel = M.Carousel.init(carousel)


  // list items in drop down
  let li = document.querySelectorAll('li')

  for (let i = 0; i < li.length; i++) {
    let item = li[i]

    item.addEventListener('click', function() {

    })

  }









})
