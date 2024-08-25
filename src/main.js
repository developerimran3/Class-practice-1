// Form  event........
const input = document.querySelector(".box input");

// Focus  event........

input.onfocus = (event) => {
  event.target.nextElementSibling.innerHTML = "Hello Focus";
};

// Blur  event.........

input.onblur = (event) => {
  event.target.nextElementSibling.innerHTML = "Hello Blur";
};

// Change  event.......
input.onchange = (event) => {
  event.target.nextElementSibling.innerHTML = "Hello Change";
};

//Input Event............
const range = document.querySelector('.box2 input[type="range"]');
const color = document.querySelector('.box2 input[type="color" ');
const p = document.querySelector(".box2 h1");

range.oninput = (event) => {
  p.style.fontSize = `${event.target.value}px`;
};
color.oninput = (event) => {
  p.style.color = `${event.target.value}`;
};

//Form Event............
const form = document.querySelector(".box3 form");

form.onsubmit = (event) => {
  event.preventDefault();
  const form_data = new FormData(event.target);
  const { name, age, skill } = Object.fromEntries(form_data);
  if (!name || !age || !skill) {
    alert("All Field Requerd");
  } else {
    console.log(`Hello ${name}, You Are ${age} Years Old.`);
  }
};
