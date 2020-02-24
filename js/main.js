// **************************************** start of navbar

function showNavbar() {
    document.getElementsByClassName('navbar')[0].classList.toggle("mystyle");
    document.getElementsByClassName('navbar-container')[0].classList.toggle("container");
    // document.getElementById('myicon').style.display="none";
}
//****************************************end of navbar */

// ****************************************** start of slideshow

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// ****************************************** end of slideshow

function stopSpiner(){
	document.getElementsByClassName("loader-con")[0].style.display="none";
}