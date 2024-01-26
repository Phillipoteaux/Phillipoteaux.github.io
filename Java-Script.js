const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired!";
  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
});