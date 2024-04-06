/*=============== SHOW MENU ===============*/

const navMenu =  document.getElementById('nav-menu'),
  navToggle =  document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/*===== Hide Show =====*/
/* Validate if constant exists */

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

/*=============== Q AND A ACCORDION ===============*/

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

/*=============== IMAGE GALLERY ===============*/

function imgGallery() {

  const mainImg = document.querySelector('.details__img'),
  smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function(){
      mainImg.src = this.src;
    })
  })
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/

var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
      },
  });

/*=============== SWIPER PRODUCTS ===============*/

var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
});

/*=============== PRODUCTS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab');
      });

      target.classList.add('active-tab');

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
      });

      tab.classList.add('active-tab');
    });
  });


 /*============== CHANGE SIZE ================*/
 
 var prevClickedElement = null;

 function changeSize(id) {
     var element = document.getElementById(id);
     
     // Reset background color of the previously clicked element
     if (prevClickedElement !== null) {
       prevClickedElement.style.backgroundColor = '#f2f2f2';
       prevClickedElement.style.color = '#222';
     }
     
     // Set background color of the currently clicked element
     element.style.backgroundColor = '#000';
     element.style.color = '#fff';
     
     // Update the previously clicked element
     prevClickedElement = element;
}


 /*============== CHANGE COLOR ================*/
 
 var prevClickedColor = null;

 function changeColor(id) {
     var color = document.getElementById(id);

     console.log(color);
     
     // Reset background color of the previously clicked element
     if (prevClickedColor !== null) {
       prevClickedColor.style.border = 'none';
       prevClickedColor.style.padding = 'none';
     }
     
     // Set background color of the currently clicked element
     color.style.border = '1px solid #000';
     color.style.padding = '.5rem';
     
     // Update the previously clicked element
     prevClickedColor = color;
}


/*========= EMBROIDARY ======*/

// Get the checkbox element
var checkbox = document.getElementById("embroideryCheckbox");

// Get the embroidery-div element
var embroideryDiv = document.querySelector(".embroidery-div");

// Add event listener to the checkbox
checkbox.addEventListener("change", function() {
  // Toggle visibility of embroidery-div based on checkbox state
  embroideryDiv.style.display = this.checked ? "flex" : "none";
});