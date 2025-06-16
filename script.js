document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.bar span');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const width = entry.target.style.width;
          entry.target.style.width = '0';
          setTimeout(() => {
            entry.target.style.transition = 'width 1s ease-out';
            entry.target.style.width = width;
          }, 100);
        }
      });
    }, { threshold: 0.5 });
  
    bars.forEach(bar => observer.observe(bar));
  });
  