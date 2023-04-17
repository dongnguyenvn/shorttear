let paragraphs = [...document.querySelectorAll("p")];

let spans = [];

paragraphs.forEach((p) => {
  let htmlString = "";
  let pArray = p.textContent.split("");
  pArray.forEach((letter) => {
    htmlString += `<span>${letter}</span>`;
  });

  p.innerHTML = htmlString;
  spans = [...document.querySelectorAll("span")];
});

function revealSpans() {
  for (let i = 0; i < spans.length; i++) {
    if (
      spans[i].parentElement.getBoundingClientRect().top <
      window.innerHeight / 2
    ) {
      let { top, left } = spans[i].getBoundingClientRect();
      top = top - window.innerHeight * 0.4;
      let opacityValue =
        1 - (top * 0.01 + left * 0.001) < 0.1
          ? 0.1
          : 1 - (top * 0.01 + left * 0.001);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  revealSpans();
});

window.addEventListener("scroll", () => {
  revealSpans();
});
