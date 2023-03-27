let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-mobile__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click',

function(){
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-mobile__nav--active');

    document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header-mobile__nav--active');
        document.body.classList.remove('stop-scroll');
    })
});

let searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', function myClick() {
    let searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
});

let dropList = document.querySelector('.drop__list');
let dropBtn = document.querySelector('.drop__btn');
let dropMark = false;
dropBtn.addEventListener('mouseover', function drop() {
    dropList.classList.add('active-list');
    dropMark = true;
});

window.onclick = function remove() {
    if (dropMark == true) {
        let dropShow = document.querySelector('.active-list')
        dropShow.classList.remove('active-list');
    }
}