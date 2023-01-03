/**
 * A button to scroll back up to the top of the page
 */
export const scrollToTop = () => {
    const button = document.getElementById('scrollToTop');
  
    if (button) {
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };
  
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      }
  
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
  
      button.addEventListener('click', topFunction);
    }
  };