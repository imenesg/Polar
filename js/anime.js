const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('.technologie');
   console.log(target);
  const animationClass = 'tecAnime';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        console.log("FORECH");
      if((windowTop) > element.offsetTop) {
        element.classList.add("tecAnime");
        console.log("adicionado");
      } else {
        element.classList.remove("tecAnime");
        console.log("removido");
      }
      
    });console.log("NADA ?");
  }
  
  animeScroll();
  
  
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  
  