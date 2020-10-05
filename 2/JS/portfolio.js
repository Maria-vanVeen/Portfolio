
document.getElementsByClassName("fade-out")[0].className = document.getElementsByClassName("fade-out")[0].className.replace(" fade-out", "");


//These functions open and close the form
function openForm() {
  console.log("openForm() is running");
  document.getElementById("myForm").style.display = "block"
}

function closeForm() {
  console.log("closeForm() is running");
  document.getElementById("myForm").style.display = "none"
}

//These functions cover the slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("showSlides() is running");
  var i;
  var slides = document.getElementsByClassName("MySlides");
  var dots = document.getElementsByClassName("Dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length;  i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" Active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " Active";
}

