const btn = document.getElementById("Nabil");
const clicked = document.getElementById("clicked");
const missed = document.getElementById("clicks");
const container = document.getElementById("element");
let clicks = 0;
let difficulty = 0;
let succClicks = 0;
let passed = false;


const heading = document.getElementById("fancy-heading");

heading.addEventListener("mouseenter", () => {
    heading.style.color = "transparent";
    heading.style.backgroundClip = "text";
    heading.style.webkitBackgroundClip = "text";
  });

heading.addEventListener("mousemove", (e) => {
const rect = heading.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
heading.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, #6e6eff, #73d0f5)`;
heading.style.textShadow = "none";
});

heading.addEventListener("mouseleave", () => {
    heading.style.backgroundImage = "none";
    heading.style.color = "#73d0f5";
    heading.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
  });

btn.addEventListener("mouseover", (event) => {	
	if (passed) return;
	const widthOffset = event.target.offsetWidth;
  const heightOffset = event.target.offsetHeight;
  const innerWidth = window.innerWidth - widthOffset;
  const innerHeight = window.innerHeight - heightOffset;
  
  event.target.style.left = Math.floor(Math.random() * innerWidth) +  "px";
  event.target.style.top = Math.floor(Math.random() * innerHeight) + "px";
});

btn.addEventListener("click", (event) => {
  pressed = true;
  event.target.classList.add("spin");
  setTimeout(() => {
  event.target.style.display = "none";
  clicked.innerHTML = "Good job!";
  clicked.style.display = "flex";
  container.style.display = "flex";
  missed.innerHTML = `Missed clicks: ${clicks}`;
  }, 500);
  
})

document.addEventListener("click", (event) => {
	if (event.target.id === "Nabil") {
  	passed = true;
  	return;
  }
  if (passed) {
  	return;
  }
  clicks += 1;
})