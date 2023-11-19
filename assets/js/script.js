const image = document.querySelectorAll('.product-lists li a'),
  html = document.querySelector('html'),
  hamburger = document.querySelector('.hamburger'),
  nav = document.querySelector('.menu-firstt'),
  hambar = document.querySelectorAll('.bar'),
  commonLi = document.querySelectorAll('.common-li'),
  homePage = document.querySelector('.home-page');


//to avoid addeventlistner error validating pages before executing code 
if (homePage || productsPage) {
  //toggle nav and html scroll
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    hambar[0].classList.toggle('active-first');
    hambar[1].classList.toggle('active-second');
    hambar[2].classList.toggle('active-third');
    html.classList.toggle('html-scroll');
  })

  //close nav on clicking element
  commonLi.forEach(li => {
    li.addEventListener('click', () => {
      nav.classList.remove('menu-active');
      html.classList.remove('html-scroll');
      hambar[0].classList.remove('active-first');
      hambar[1].classList.remove('active-second');
      hambar[2].classList.remove('active-third');
    })
  })
}


//to avoid addeventlistner error validating pages before executing code     
if (homePage) {
  //to change header background color of header on scroll
  var scrollTrigger = 500;

  window.onscroll = function () {
    if (window.scrollY >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add('bgr');
    } else {
      document.getElementsByTagName("header")[0].classList.remove('bgr');
    }
  }
}










