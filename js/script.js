let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};


var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
      var pannel = this.nextElementSibling;
      if (pannel.style.display === 'block') {
        pannel.style.display = 'none';
      } else {
        pannel.style.display = 'block'; // corrected the assignment
      }
    });
    // Initially hide the pannels
    acc[i].nextElementSibling.style.display = 'none';
  }


  document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader-wrapper');
    
    // Show loader
    loader.style.display = 'flex';
  
    // Hide loader when content is loaded
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  });

  window.addEventListener('scroll', function() {
    var button = document.querySelector('.gotopbtn');
    var footer = document.querySelector('.footer');
    
    // Show the button when user scrolls
    if (window.scrollY > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
    
    // Adjust the z-index of the button when it reaches the footer
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (footerPosition < windowHeight) {
      button.style.zIndex = '1000';
    } else {
      button.style.zIndex = '999';
    }
  });
  
    document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const timer = document.querySelector('.timer');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    function updateTimer() {
      // timer.textContent = `Slide ${currentIndex + 1}/${slides.length}`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      // updateTimer();
    }
  
    // Interval for automatic slide change (adjust duration as needed)
    const interval = setInterval(nextSlide, 4000);
  
    // Initial display
    showSlide(currentIndex);
    // updateTimer();
  });
  

 

 