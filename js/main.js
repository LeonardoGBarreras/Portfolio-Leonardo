window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

});

//Portfolio section -Modal
const porfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const porfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    porfolioModals[modalClick].classList.add("active");

}
imgCards.forEach((imgCard,i)=>{
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});

porfolioCloseBtns.forEach((porfolioCloseBtn)=>{
    porfolioCloseBtn.addEventListener("click",()=>{
        porfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        })
    })
})

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn =  document.querySelector(".nav-close-btn");
const navegation = document.querySelector(".navegation");
const navItems = document.querySelectorAll(".nav-items a")

menuBtn.addEventListener("click",()=>{
    navegation.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navegation.classList.remove("active");
});

navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        navegation.classList.remove("active");
    });
})

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration:2500,
    delay:100
});

ScrollReveal().reveal('.home .info h2,.section-title-01, .section-title-02', {delay:100,origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:200,origin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay:300,origin:'bottom'});
ScrollReveal().reveal('.media-icons i,.contact-left li', {delay:100,origin:'left',interval: 200});
ScrollReveal().reveal('.home-img, .about-img', {delay:100,origin:'bottom'});
ScrollReveal().reveal('.media-icons a', {delay:100,origin:'left',interval: 200});
ScrollReveal().reveal('.about-info .description , .contact-left h2', {delay:300,origin:'right'});
ScrollReveal().reveal('.portfolio .img-card', {delay:300,origin:'bottom'});




