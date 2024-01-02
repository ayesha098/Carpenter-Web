// Slider..............................................................................
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("heroSec");
  let squares = document.getElementsByClassName("square");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < squares.length; i++) {
    squares[i].className = squares[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  squares[slideIndex-1].className += " active";
}

 // cardSLIDE
 let slideI = 1;
 function plusDivs(n) {
  showDivs(slideI += n);
}
 showDivs(slideI);
function showDivs(n) {
 let i;
  let x = document.getElementsByClassName("TestimonialCard");
  if (n > x.length) {slideI = 1}
  if (n < 1) {slideI = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideI-1].style.display = "block"; 
}
// TABS CODE ......................................................................................

function opentab(evt, tabName) {
 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

