# Ripple Hover Effect

A simple and interactive button hover effect built using **HTML, CSS, and JavaScript**.

When the user moves the cursor onto the button, a circular background animation starts from the exact position where the cursor enters the button. The circle expands smoothly and changes the button text color to create a ripple-style hover effect.

## Features

* Cursor-based ripple effect
* Ripple starts from the cursor entry position
* Smooth circle expansion animation
* Dynamic positioning using JavaScript
* CSS transitions for smooth animation
* Button text remains above the animated background
* Clean and minimal UI
* No external JavaScript libraries required

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
ripple-hover-effect/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The project uses a combination of **JavaScript for cursor positioning** and **CSS for the ripple animation**.

### 1. HTML Structure

The button contains two elements:

```html
<button class="ripple-btn">
  <span class="bg-circle"></span>
  <span>Hover Me</span>
</button>
```

The `.bg-circle` element acts as the animated background circle.

The second `<span>` contains the button text.

### 2. Selecting Elements

JavaScript first selects the button and the circle:

```javascript
const button = document.querySelector(".ripple-btn");
const circle = document.querySelector(".bg-circle");
```

`querySelector()` returns the first element matching the provided CSS selector.

### 3. Detecting Mouse Entry

The `mouseenter` event runs when the cursor enters the button.

```javascript
button.addEventListener("mouseenter", (e) => {
  // Logic
});
```

The event object `e` provides information about the mouse position.

### 4. Getting Button Position

The `getBoundingClientRect()` method is used to get the button's position and dimensions.

```javascript
const rect = button.getBoundingClientRect();
```

It provides values such as:

```text
left
top
width
height
```

These values help calculate the cursor's position relative to the button.

### 5. Calculating Cursor Position

The cursor's position inside the button is calculated using:

```javascript
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
```

Here:

* `e.clientX` is the cursor's X position relative to the viewport.
* `e.clientY` is the cursor's Y position relative to the viewport.
* `rect.left` is the left edge of the button.
* `rect.top` is the top edge of the button.

Subtracting the button's position gives the cursor's position **inside the button**.

For example:

```text
Viewport cursor position
        ↓
      (500, 300)

Button starts at
        ↓
      (450, 250)

Cursor inside button
        ↓
       (50, 50)
```

### 6. Positioning the Circle

The calculated coordinates are applied to the circle:

```javascript
circle.style.left = `${x}px`;
circle.style.top = `${y}px`;
```

This makes the circle start from the exact point where the cursor enters the button.

### 7. CSS Circle Animation

Initially, the circle has no visible size:

```css
.ripple-btn .bg-circle {
  width: 0;
  height: 0;
}
```

When the button is hovered, the circle expands:

```css
.ripple-btn:hover .bg-circle {
  width: 350px;
  height: 350px;
}
```

The transition makes the expansion smooth:

```css
transition:
  width 0.5s ease,
  height 0.5s ease;
```

### 8. Centering the Circle

The circle uses:

```css
transform: translate(-50%, -50%);
```

The `left` and `top` properties position the circle's center around the cursor coordinates rather than positioning its top-left corner there.

This allows the ripple to expand outward from the cursor position.

### 9. Layering

The button uses:

```css
overflow: hidden;
```

This prevents the large circle from overflowing outside the button.

The circle has:

```css
z-index: 1;
```

while the text has:

```css
z-index: 2;
```

Therefore, the animated circle stays behind the button text.

## Core JavaScript Logic

The main logic of the project is:

```javascript
const button = document.querySelector(".ripple-btn");
const circle = document.querySelector(".bg-circle");

button.addEventListener("mouseenter", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});
```

The process is:

```text
Cursor enters button
        ↓
Get button position
        ↓
Get cursor position
        ↓
Calculate cursor position inside button
        ↓
Move circle to that position
        ↓
CSS expands the circle
        ↓
Ripple effect appears
```

## JavaScript Concepts Practiced

This project helps practice:

* `document.querySelector()`
* DOM element selection
* Event listeners
* `mouseenter`
* Event objects
* `clientX`
* `clientY`
* `getBoundingClientRect()`
* Inline style manipulation
* Template literals
* Dynamic positioning
* Basic DOM interaction

## CSS Concepts Practiced

This project also covers:

* Flexbox
* Positioning
* `position: relative`
* `position: absolute`
* `transform`
* `translate()`
* `overflow: hidden`
* `z-index`
* CSS transitions
* CSS pseudo-classes
* Border radius
* Box shadows
* Hover effects

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ripple-hover-effect.git
```

### 2. Open the Project

```bash
cd ripple-hover-effect
```

### 3. Run the Project

Open `index.html` in your browser.

For development, you can also use the **Live Server** extension in VS Code.

## Customization

You can easily customize the effect by changing the CSS values.

### Change Ripple Color

```css
.ripple-btn .bg-circle {
  background-color: #3b82f6;
}
```

### Change Animation Speed

```css
transition:
  width 0.5s ease,
  height 0.5s ease;
```

For a faster animation:

```css
transition:
  width 0.3s ease,
  height 0.3s ease;
```

### Change Ripple Size

```css
.ripple-btn:hover .bg-circle {
  width: 350px;
  height: 350px;
}
```

### Change Button Shape

The button currently uses:

```css
border-radius: 50px;
```

You can make it more rectangular:

```css
border-radius: 8px;
```

## Possible Improvements

The project can be extended with:

* Ripple effect on every `mousemove`
* Ripple effect on click
* Different ripple colors
* Multiple ripple circles
* Different animation directions
* Support for touch devices
* Reusable ripple button component
* CSS custom properties for easier customization
* Multiple buttons with different ripple effects

## Learning Goal

The main goal of this project is to understand how **JavaScript and CSS can work together to create interactive UI animations**.

The most important concept in this project is calculating the cursor's position relative to an element:

```javascript
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
```

This technique can be reused for many interactive web effects, including:

* Ripple effects
* Magnetic buttons
* Cursor-following elements
* 3D card effects
* Custom tooltips
* Interactive gradients
* Mouse-following animations

## Author

**Aman**
