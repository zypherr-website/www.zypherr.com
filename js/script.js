const swiper = new Swiper('.js-review-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: 'js-reviews-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 1
        }
    }
});

let fName = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let msg = document.getElementById("msg");

function clearText(){
    fName.value = "";
    email.value = "";
    number.value = "";
    msg.value = "";
}