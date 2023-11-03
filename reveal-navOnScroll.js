let previousScroll = 0;     // Initialize the previous scroll position

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => { 

  let currentScroll = window.pageYOffset;   // To Get the current scroll position

  if (currentScroll > previousScroll) {      //To Check if the user is scrolling down
    nav.classList.add('nav-down');
    nav.classList.remove('nav-up');
  }
  
  if (previousScroll > currentScroll) {      //To Check if the user is scrolling up
    nav.classList.remove('nav-down');
    nav.classList.add('nav-up');
  }

  previousScroll = currentScroll;
});

