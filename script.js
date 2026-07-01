// Accessing elements
const button = document.querySelector(".ripple-btn");
const circle = document.querySelector(".bg-circle");

// Applying Eventlistner
button.addEventListener("mouseenter", (e) => {
  // Calculating Cursor Position inside button
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Adjusting Circle according to Cursor position
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});
