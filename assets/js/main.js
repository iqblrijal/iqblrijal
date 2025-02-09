/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalView = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}

modalButton.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalView.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active__work'))
    this.classList.add('active__work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
});

/*=============== SEND MAIL FOOTER ===============*/

function sendMail(){
    let body = document.getElementById("body").value;
    let name = document.getElementById("name").value;
    let cc = document.getElementById("cc").value;
    window.location.href = "mailto:secondrealityco@gmail.com?subject="+name+"&body="+body+"&cc="+cc;
}

let reset = document.getElementById('reset')

reset.addEventListener('submit', (e) =>{
    e.preventDefault()

    reset.reset()
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 1500,
    // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 1600})
sr.reveal(`.home__social, .home__scroll`, {delay: 2100, origin:'bottom'})
sr.reveal(`.anim1`, {delay: 2900, origin:'left'})
sr.reveal(`.anim2`, {delay: 3200, origin:'bottom'})
sr.reveal(`.anim3`, {delay: 3500, origin:'bottom'})
sr.reveal(`.anim4`, {delay: 3800, origin:'top'})
sr.reveal(`.anim5`, {delay: 4100, origin:'top'})
sr.reveal(`.anim6`, {delay: 4700, origin:'top'})
sr.reveal(`.anim7`, {delay: 4300, origin:'left'})
sr.reveal(`.anim8`, {delay: 5000, origin:'left'})




/*=============== PRELOADER ANIMATION ===============*/

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.loading__text').delay(300).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));
    $('.loading__logo').delay(300).animate({top: '25%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));

    $('#preloader').delay(900).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

});


/*=============== PARALLAX MOUSE MOVE ===============*/
const parallax_el = document.querySelectorAll(".parallax");
const parallax_oy = document.querySelectorAll(".oyi");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;


    parallax_el.forEach((el) =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let rotateSpeed = el.dataset.rotation;

        el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg)  translateX(calc(0% + ${xValue * speedx}px))
        translateY(calc(0% + ${yValue * speedy}px))`;
    });

    parallax_oy.forEach((el) =>{
        let speedz = el.dataset.speedz;
        
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft *0.1;
        let isInLeft = 
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        el.style.transform = `prespective(2300px) translateZ(calc(0% + ${zValue * speedz}px))`;
    });
});


/*=============== PAGINATION ===============*/
