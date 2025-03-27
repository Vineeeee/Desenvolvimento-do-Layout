document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    const searchResult = document.createElement('div');
    searchResult.className = 'search-result';
    document.querySelector('main').prepend(searchResult);
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchResult.textContent = `Você buscou por: "${searchTerm}"`;
            searchInput.value = '';
        }
    }
    
    const swiper1 = new Swiper('.swiper-1', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    const swiper2 = new Swiper('.swiper-2', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      
      // Responsive breakpoints
      breakpoints: {
        // Quando a largura da janela é >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // Quando a largura da janela é >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // Quando a largura da janela é >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          centeredSlides: false
        }
      },
      
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Efeitos
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        forceToAxis: true,
      }
    });
  });