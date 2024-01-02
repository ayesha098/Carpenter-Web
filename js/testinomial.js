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