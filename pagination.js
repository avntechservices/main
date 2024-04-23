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

 // JavaScript for pagination
 const cardsPerPage = 2;
 const cards = document.querySelectorAll('.card');
 const totalCards = cards.length;
 const totalPages = Math.ceil(totalCards / cardsPerPage);
 const maxPaginationButtons = 2; // Maximum number of pagination buttons to display

 function showPage(page) {
   const startIndex = (page - 1) * cardsPerPage;
   const endIndex = startIndex + cardsPerPage;

   cards.forEach((card, index) => {
     if (index >= startIndex && index < endIndex) {
       card.style.display = 'inline-block';
     } else {
       card.style.display = 'none';
     }
   });
 }

 function setupPagination() {
   const pagination = document.getElementById('pagination1');
   const numButtonsToShow = Math.min(totalPages, maxPaginationButtons); // Number of buttons to show initially

   for (let i = 1; i <= numButtonsToShow; i++) {
     createPaginationButton(i, pagination);
   }

   // Add More button if there are more pages
   if (totalPages > maxPaginationButtons) {
     const moreButton = document.createElement('button');
     moreButton.innerText = 'More';
     moreButton.addEventListener('click', () => {
       const currentPage = document.querySelector('.pagination button.active').innerText;
       const nextButtonIndex = parseInt(currentPage) + 1;
       const remainingPages = totalPages - nextButtonIndex + 1;
       const numButtonsToAdd = Math.min(remainingPages, maxPaginationButtons);

       for (let i = nextButtonIndex; i < nextButtonIndex + numButtonsToAdd; i++) {
         createPaginationButton(i, pagination);
       }

       // Hide More button if all pages are shown
       if (nextButtonIndex + numButtonsToAdd >= totalPages) {
         moreButton.style.display = 'none';
       }
     });
     pagination.appendChild(moreButton);
   }

   // Initially show the first page
   showPage(1);
   // Mark the first button as active initially
   updateActiveButton(1);
 }

 function createPaginationButton(page, parentElement) {
   const button = document.createElement('button');
   button.innerText = page;
   button.addEventListener('click', () => {
     showPage(page);
     updateActiveButton(page);
   });
   parentElement.appendChild(button);
 }

 function updateActiveButton(page) {
   const buttons = document.querySelectorAll('.pagination button');
   buttons.forEach(button => {
     button.classList.remove('active');
     if (parseInt(button.innerText) === page) {
       button.classList.add('active');
     }
   });
 }

 // Initialize pagination
 setupPagination();
