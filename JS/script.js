document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded - initializing carousels"); // Debug line
    // Initialize all carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
      new bootstrap.Carousel(carousel, {
        interval: 5000,
        ride: 'carousel'
      });
    });
  });