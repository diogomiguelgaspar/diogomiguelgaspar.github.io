// Get the "View Projects" button element
const viewProjectsButton = document.querySelector('.hero-content .btn');

// Add a mouseover event listener to the button
viewProjectsButton.addEventListener('mouseover', () => {
  // Add a CSS class for the animation when hovering over the button
  viewProjectsButton.classList.add('btn-bounce');
});

// Add a mouseout event listener to the button
viewProjectsButton.addEventListener('mouseout', () => {
  // Remove the animation class when the mouse moves out of the button
  viewProjectsButton.classList.remove('btn-bounce');
});
