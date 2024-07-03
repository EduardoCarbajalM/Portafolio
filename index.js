window.onscroll = function() {
    var scrollToTop = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  }
  
  function scrollToTop() {
    var scrollToTop = document.getElementById('scrollToTop');
    scrollToTop.classList.add('clicked');
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(function() {
      scrollToTop.classList.remove('clicked');
    }, 700);
  }
  