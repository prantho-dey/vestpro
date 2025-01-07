/**
    1 ==> Menu Icon
    2 ==> Menu
    3 ==> Sticky Header
    4 ==> Indicatior
    5 ==> Counter Up
    6 ==> Home V1 Logo Slider
    7 ==> Accordion
    8 ==> Home V1 protfolio Slider
    9 ==> Nice select style js
    10 ==> Home V1 Testimonial Slider
    11 ==> Home V2 Banner Slider
    12 ==> Popup Video
    13 ==> Background Video
    14 ==> Home V1 Testimonial Slider
    15 ==> Home V2 Banner Slider
    16 ==> Home V3 Team Slider
    17 ==> Home V2 Testimonial Slider
    18 ==> About investment Slider
    19 ==> Investment Nav Tab System
    20 ==> Protfolio ISOTOP
    21 ==> Indicatior
    22 ==> Indicatior
**/

// Menu Icon
document.querySelectorAll('.main-menu ul li').forEach(function (listItem) {
    const subMenu = listItem.querySelector('.sub-menu, .mega-menu');
    if (subMenu) {
        const anchor = listItem.querySelector('a');
        if (anchor) {
            const svgIcon = `
                <svg class="fill-current" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.264139 0.267679C0.433317 0.0962844 0.662742 0 0.901961 0C1.14118 0 1.37061 0.0962844 1.53978 0.267679L6.00545 4.7932L10.4711 0.267679C10.6413 0.101142 10.8691 0.00899045 11.1057 0.0110735C11.3422 0.0131565 11.5685 0.109307 11.7358 0.278816C11.903 0.448325 11.9979 0.677629 12 0.917342C12.002 1.15705 11.9111 1.388 11.7468 1.56042L6.64327 6.73232C6.47409 6.90372 6.24467 7 6.00545 7C5.76623 7 5.5368 6.90372 5.36762 6.73232L0.264139 1.56042C0.0950107 1.38898 0 1.15648 0 0.914052C0 0.671626 0.0950107 0.439126 0.264139 0.267679Z"/>
                </svg>`;
            anchor.insertAdjacentHTML('beforeend', svgIcon);
        }
    }
});

// Menu
function menuToggle() {
  const menuToggle = document.querySelector('.menuToggle');
  const mainMenu = document.querySelector('.main-menu');
  if (menuToggle && mainMenu) {
      // Toggle menu visibility
      menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('is-active');
          mainMenu.classList.toggle('menu-active');
          document.body.classList.toggle('menu-overlay');
          // Reset submenus
          mainMenu.querySelectorAll('li').forEach((li) => {
              li.classList.remove('active');
              const subMenus = li.querySelectorAll('.sub-menu, .mega-menu');
              subMenus.forEach((sub) => {
                  sub.style.height = '0';
                  setTimeout(() => (sub.style.display = 'none'), 300);
              });
          });
      });

      // Handle submenu toggling
      mainMenu.addEventListener('click', (e) => {
          const li = e.target.closest('li');
          if (li && li.querySelector('.sub-menu, .mega-menu')) {
              const subMenu = li.querySelector('.sub-menu, .mega-menu');
              if (!li.classList.contains('active')) {
                  li.classList.add('active');
                  subMenu.style.display = 'block';
                  const height = subMenu.scrollHeight + 'px';
                  subMenu.style.height = '0';
                  setTimeout(() => (subMenu.style.height = height), 10);
                  setTimeout(() => (subMenu.style.height = ''), 300);
              } else {
                  li.classList.remove('active');
                  subMenu.style.height = subMenu.scrollHeight + 'px';
                  setTimeout(() => (subMenu.style.height = '0'), 10);
                  setTimeout(() => (subMenu.style.display = 'none'), 300);
              }

              // Close other submenus
              mainMenu.querySelectorAll('li').forEach((item) => {
                  if (item !== li) {
                      item.classList.remove('active');
                      const otherSubMenus = item.querySelectorAll('.sub-menu, .mega-menu');
                      otherSubMenus.forEach((sub) => {
                          sub.style.height = '0';
                          setTimeout(() => (sub.style.display = 'none'), 300);
                      });
                  }
              });
          }
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
          if (!mainMenu.contains(e.target) && !menuToggle.contains(e.target)) {
              menuToggle.classList.remove('is-active');
              mainMenu.classList.remove('menu-active');
              document.body.classList.remove('menu-overlay');
              mainMenu.querySelectorAll('li').forEach((li) => {
                  li.classList.remove('active');
                  const subMenus = li.querySelectorAll('.sub-menu, .mega-menu');
                  subMenus.forEach((sub) => {
                      sub.style.height = '0';
                      setTimeout(() => (sub.style.display = 'none'), 300);
                  });
              });
          }
      });
  }
} 
menuToggle();

// Sticky Header
document.addEventListener("DOMContentLoaded", function () {
    function stickyHeader() {
        const header = document.querySelector(".header-area");

        window.addEventListener("scroll", function () {
            const scrollTop = window.scrollY;

            if (scrollTop < 245) {
                header.classList.remove("sticky-header");
            } else {
                header.classList.add("sticky-header");
            }
        });
    }
    stickyHeader();
});

// Indicatior
document.addEventListener("DOMContentLoaded", function () {
    const indicator = document.querySelector("#indicator");
    if (!indicator) return;

    function updateScrollIndicator() {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;
        const scrollTop = window.scrollY;

        const percentageScrolled = (scrollTop / (documentHeight - viewportHeight)) * 100;

        indicator.style.width = `${percentageScrolled}%`;
    }
    
    window.addEventListener("scroll", updateScrollIndicator);

    updateScrollIndicator();
});

// Counter Up
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Home V1 Logo Slider
const swiper = new Swiper('.logo-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.logo-slider-next',
      prevEl: '.logo-slider-prev',
    },
});

// Accordion
const faqHeads = document.querySelectorAll('.faq-head');
faqHeads.forEach((faqHead) => {
    faqHead.addEventListener('click', function () {
        const parent = this.parentElement;
        const faqBody = parent.querySelector('.faq-body');

        document.querySelectorAll('.faq-wrapper .single-faq').forEach((faq) => {
            if (faq !== parent) {
                faq.classList.remove('active');
                const body = faq.querySelector('.faq-body');
                if (body) {
                    body.style.height = body.scrollHeight + 'px';
                    setTimeout(() => {
                        body.style.height = '0';
                    }, 10);
                    setTimeout(() => (body.style.display = 'none'), 300);
                }
            }
        });

        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            faqBody.style.height = faqBody.scrollHeight + 'px';
            setTimeout(() => {
                faqBody.style.height = '0';
            }, 10);
            setTimeout(() => (faqBody.style.display = 'none'), 300);
        } else {
            parent.classList.add('active');
            faqBody.style.display = 'block';
            const height = faqBody.scrollHeight + 'px';
            faqBody.style.height = '0';
            setTimeout(() => {
                faqBody.style.height = height;
            }, 10);
            setTimeout(() => (faqBody.style.height = ''), 300);
        }
    });
});

// Home V1 protfolio Slider
const swiper2 = new Swiper('.protfolio-slider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.protfolio-slider-next',
      prevEl: '.protfolio-slider-prev',
    },
});

// Nice select style js
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.select')) {
    const selectElement = document.querySelector(".select");
    const container = selectElement.parentElement;
    selectElement.style.display = "none";

    const dropdown = document.createElement("div");
    dropdown.className = "custom-dropdown";

    const dropdownLabel = document.createElement("span");
    dropdownLabel.textContent = selectElement.options[selectElement.selectedIndex].text;

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.innerHTML = `<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25005 9.00005C8.05823 9.00005 7.86623 8.92673 7.7198 8.7803L0.219797 1.2803C-0.0732656 0.987234 -0.0732656 0.512672 0.219797 0.219797C0.512859 -0.0730781 0.987422 -0.0732656 1.2803 0.219797L8.25005 7.18955L15.2198 0.219797C15.5129 -0.0732656 15.9874 -0.0732656 16.2803 0.219797C16.5732 0.512859 16.5734 0.987422 16.2803 1.2803L8.7803 8.7803C8.63386 8.92673 8.44186 9.00005 8.25005 9.00005Z" fill="#041815"/></svg>`;

    dropdown.appendChild(dropdownLabel);
    dropdown.appendChild(arrow);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "custom-dropdown-options";

    Array.from(selectElement.options).forEach((option) => {
      if (option.disabled) return;

      const optionDiv = document.createElement("div");
      optionDiv.textContent = option.text;
      optionDiv.dataset.value = option.value;

      optionDiv.addEventListener("click", (event) => {
          event.stopPropagation();
          dropdownLabel.textContent = option.text;
          selectElement.value = option.value;
          optionsContainer.style.display = "none";
          dropdown.classList.remove("open");
      });
      
        optionsContainer.appendChild(optionDiv);
    });

    dropdown.appendChild(optionsContainer);
    container.appendChild(dropdown);

    dropdown.addEventListener("click", (event) => {
        event.stopPropagation();
        const isVisible = optionsContainer.style.display === "block";
        optionsContainer.style.display = isVisible ? "none" : "block";
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        optionsContainer.style.display = "none";
        dropdown.classList.remove("open");
    });
  }
});

// Home V1 Testimonial Slider
const swiper3 = new Swiper('.testimonial-slider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        575: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.tmnl-slider-next',
      prevEl: '.tmnl-slider-prev',
    },
});

// Home V2 Banner Slider
const swiper4 = new Swiper('.home-v2-banner-slider', {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    // autoplay: {
    //     delay: 3000,
    // },
   
    // Navigation arrows
    navigation: {
      nextEl: '.bannerv2-slider-next',
      prevEl: '.bannerv2-slider-prev',
    },
});

// Popup Video 
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.video-popup')) {
        const videoPopup = document.querySelector('.video-popup');
        const popupOverlay = document.getElementById('popup-overlay');
        const popupVideo = document.getElementById('popup-video');
        const popupClose = document.getElementById('popup-close');

        videoPopup.addEventListener('click', function (e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('href');
            popupVideo.src = videoUrl;
            popupOverlay.classList.remove('popup-overlay-none');
        });

        popupClose.addEventListener('click', function () {
            popupOverlay.classList.add('popup-overlay-none');
            popupVideo.src = '';
        });

        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
              popupOverlay.classList.add('popup-overlay-none');
              popupVideo.src = '';
            }
        });
    }
});

// Background Video ======
if (document.querySelector('.video-container')) {
    const videoContainer = document.getElementById("video-container");
    const playButton = document.getElementById("play-button");
    const video = document.getElementById("video");

    videoContainer.addEventListener("mousemove", function (event) {
        const containerRect = videoContainer.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const buttonWidth = playButton.offsetWidth;
        const buttonHeight = playButton.offsetHeight;
        const buttonX = mouseX - buttonWidth / 2;
        const buttonY = mouseY - buttonHeight / 2;

        const maxButtonX = containerRect.width - buttonWidth;
        const maxButtonY = containerRect.height - buttonHeight;
        playButton.style.left = Math.min(Math.max(buttonX, 10), maxButtonX) + "px";
        playButton.style.top = Math.min(Math.max(buttonY, 10), maxButtonY) + "px";
    });

    videoContainer.addEventListener("mouseleave", function () {
        setTimeout(function () {
            playButton.style.left = "50%";
            playButton.style.top = "50%";
            playButton.style.transform = "translate(-50%, -50%) scale(1)";
            playButton.style.transition = "all .3s ease-out";
        }, 50);
    });

    videoContainer.addEventListener("mouseover", function () {
        playButton.style.transition = "all 0.3s ease-out";
        playButton.style.transform = "scale(1.5)";
    });

    videoContainer.addEventListener("mouseenter", function () {
        if (!video.paused) {
            playButton.style.opacity = "1";
        }
    });

    videoContainer.addEventListener("mouseleave", function () {
        if (!video.paused) {
            playButton.style.opacity = "0";
            playButton.style.transition = "opacity ease 1s";
        }
    });

    videoContainer.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.innerHTML = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="18" rx="2.5" fill="#041815"/><rect x="11" width="5" height="18" rx="2.5" fill="#041815"/></svg>`;
        } else {
            video.pause();
            playButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.82909 0.396886C2.20629 -0.533976 0.890625 0.228597 0.890625 2.09878V15.8999C0.890625 17.772 2.20629 18.5335 3.82909 17.6036L15.892 10.6856C17.5153 9.75439 17.5153 8.24572 15.892 7.31475L3.82909 0.396886Z" fill="#041815"/></svg>`;
        }
    });

    video.addEventListener("ended", function () {
        playButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.82909 0.396886C2.20629 -0.533976 0.890625 0.228597 0.890625 2.09878V15.8999C0.890625 17.772 2.20629 18.5335 3.82909 17.6036L15.892 10.6856C17.5153 9.75439 17.5153 8.24572 15.892 7.31475L3.82909 0.396886Z" fill="#041815"/></svg>`;
        playButton.style.opacity = "1";
    });
}

// Home V1 Testimonial Slider
const swiper5 = new Swiper('.feature-blog-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        575: {
          slidesPerView: 2,
        },
        767: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
    },
    // Navigation arrows
    pagination: {
      el: ".feature-blog-slider-pagination",
      clickable: true,
    },
});

// Home V2 Banner Slider
const swiper6 = new Swiper('.home-v2-testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.testimonialv2-slider-next',
      prevEl: '.testimonialv2-slider-prev',
    },
});

// Home V3 Team Slider
function initializeTeamSliders(mainSelector, thumbnailSelector) {
    // Initialize the thumbnail slider
    var thumbnailSwiper = new Swiper(thumbnailSelector, {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1280: {
          spaceBetween: 20,
        },
      },
    });

    // Initialize the main slider
    var mainSwiper = new Swiper(mainSelector, {
      spaceBetween: 0,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".team-slider-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: thumbnailSwiper,
      },
    });
}
initializeTeamSliders(".home3-team-slider2", ".home3-team-slider");

// Home V2 Testimonial Slider
const swiper7 = new Swiper('.testimonial-v3-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
      delay: 5000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.tmnlv3-slider-next',
    prevEl: '.tmnlv3-slider-prev',
  },
});

//  About investment Slider
const swiper8 = new Swiper('.investment-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
      delay: 5000,
  },
  pagination: {
    el: ".investment-slider-pagination",
    clickable: true,
  },
});

// Investment Nav Tab System
if (document.querySelector('.investment-tab')) {
  const tabs = document.querySelectorAll('.investment-tab');
  const tabContentImage = document.getElementById('investment-tab-image');
  
  const tabImages = {
      'venture-capital': './assets/img/thumb/Venture Capital.jpg',
      'asset-management': './assets/img/thumb/Asset Management.jpg',
      'private-equity': './assets/img/thumb/Private Equity.jpg',
      'real-estate': './assets/img/thumb/Real Estate Funds.jpg',
      'business-funds': './assets/img/thumb/Business Funds.jpg',
  };
  
  const handleTabClick = (event) => {
      tabs.forEach(tab => tab.classList.remove('active'));
      const clickedTab = event.currentTarget;
      clickedTab.classList.add('active');
  
      const tabKey = clickedTab.getAttribute('data-tab');
      tabContentImage.src = tabImages[tabKey];
  
      setTimeout(() => {
          tabContentImage.style.transform = 'scale(0.8)';
      }, 0);
      setTimeout(() => {
          tabContentImage.style.transform = 'scale(1)';
      }, 0);
  };
  tabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
  });
  const tabContent = document.querySelector('.investment-tab-content');
  const handleMouseMove = (event) => {
      const { offsetX, offsetY, target } = event;
      const { clientWidth, clientHeight } = target;
  
      const xPos = (offsetX / clientWidth - 0.5) * 10;
      const yPos = (offsetY / clientHeight - 0.5) * 10;
  
      tabContentImage.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${xPos * 0.3}deg)`;
  };
  const handleMouseLeave = () => {
      tabContentImage.style.transform = 'translate(0, 0) rotate(0)';
  };
  tabContent.addEventListener('mousemove', handleMouseMove);
  tabContent.addEventListener('mouseleave', handleMouseLeave);
  tabContentImage.src = tabImages['venture-capital'];
}  

// Protfolio ISOTOP 
if (document.querySelector('.protfolio-filters')) {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.protfolio-filters button');
    const items = document.querySelectorAll('.protfolio-grid-item');
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            items.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
  });
}

// Preloader
window.addEventListener('load', () => {
  const element = document.querySelector('body');
  element.classList.add('loaded');
});