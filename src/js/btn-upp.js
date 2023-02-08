const btnUp = {
    el: document.querySelector('.up-btn__icon'),
    show() {
      
      this.el.classList.remove('up-btn-wrapper');
    },
    hide() {
      
      this.el.classList.add('up-btn-wrapper');
    },
    addEventListener() {
      
      window.addEventListener('scroll', () => {
        
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        scrollY > 400 ? this.show() : this.hide();
      });
      
      document.querySelector('.up-btn__icon').onclick = () => {
        
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();