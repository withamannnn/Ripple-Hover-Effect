const button = document.querySelector(".ripple-btn");
const circle = document.querySelector(".bg-circle");

button.addEventListener("mouseenter", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  console.log(x);

  const y = e.clientY - rect.top;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});
