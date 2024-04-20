// script.js
$(document).ready(function(){
});
const paginationLinks = document.querySelectorAll('.pagination a');

paginationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    debugger;
    event.preventDefault();
    
    // Remove active class from all links
    paginationLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to the clicked link
    this.classList.add('active');

    // You can implement logic here to load content for the clicked page
  });
});
