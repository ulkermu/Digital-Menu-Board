import data from "./data.json" assert { type: "json" };

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

//* --------------- First Slide Contents ---------------
// Create Elements
const container = document.createElement("div");
const header = document.createElement("div");
const title = document.createElement("h1");
const headerP = document.createElement("div");
const spanContent = document.createElement("span");
const main = document.createElement("main");
const imageDiv = document.createElement("div");
const image1 = document.createElement("img");
const product = document.createElement("div");
const productContent1 = document.createElement("div");
const sizeM = document.createElement("div");
const sliderPrice1 = document.createElement("div");
const medium = document.createElement("div");
const upperPrice1 = document.createElement("div");
const productContent2 = document.createElement("div");
const sizeL = document.createElement("div");
const sliderPrice2 = document.createElement("div");
const large = document.createElement("div");
const upperPrice2 = document.createElement("div");

// Setting Class and ID
container.classList.add("container");
header.classList.add("header");
title.classList.add("title");
headerP.classList.add("header-p");
spanContent.classList.add("content");
main.classList.add("main");
imageDiv.classList.add("image");
image1.classList.add("burger");
product.classList.add("product");
sizeM.setAttribute("id", "size-m");
sliderPrice1.classList.add("meal-slider-price");
upperPrice1.classList.add("upper-price");
sizeL.setAttribute("id", "size-v");
sliderPrice2.classList.add("meal-slider-price");
upperPrice2.classList.add("upper-price");

// Layout - First Slide Contents
container.appendChild(header);
container.appendChild(headerP);
container.appendChild(main);
header.appendChild(title);
headerP.appendChild(spanContent);
main.appendChild(imageDiv);
main.appendChild(product);
imageDiv.appendChild(image1);
product.appendChild(productContent1);
product.appendChild(productContent2);
productContent1.appendChild(sizeM);
productContent1.appendChild(sliderPrice1);
productContent2.appendChild(sizeL);
productContent2.appendChild(sliderPrice2);
sliderPrice1.appendChild(medium);
sliderPrice1.appendChild(upperPrice1);
sliderPrice2.appendChild(large);
sliderPrice2.appendChild(upperPrice2);

// Add container to HTML
function firstContainerAdd() {
  document.body.appendChild(container);
}

// Remove container from HTML
function firstContainerRemove() {
  document.body.removeChild(container);
}

//* --------------- Transition Slide Contents ---------------
// Create Elements
const showcase = document.createElement("section");
const video = document.createElement("video");
const logo = document.createElement("div");
const image2 = document.createElement("img");
const overlay = document.createElement("div");

// Settings Class and Content
showcase.classList.add("showcase");
video.classList.add("video");
logo.classList.add("logo");
image2.classList.add("image2");
overlay.classList.add("overlay");

// Layout - Transition Slide Contents
showcase.appendChild(video);
showcase.appendChild(logo);
showcase.appendChild(overlay);
logo.appendChild(image2);

// Transition Slide Add Function
function transitionAdd() {
  showcase.classList.remove("fade-out");
  image2.src = `${data.logos[1].src}`;
  video.src = `${data.logos[0].src}`;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;

  document.body.appendChild(showcase);
}

// Transition Slide Remove Function
function transitionRemove() {

  const showcase = document.querySelector(".showcase");
  showcase.classList.add("fade-out");
  showcase.onanimationend = (e) => {
    if (e.srcElement.classList.contains("fade-out")) {
      document.body.removeChild(showcase);
    }
  };
}

//* --------------- Slide Functions / First Slide ---------------
// Beef Burger Slide
function beefSlide() {
  title.textContent = `${data.burgers[0].title}`;
  spanContent.textContent = `${data.burgers[0].ingredients}`;
  medium.textContent = `${data.burgers[0].priceM}`;
  large.textContent = `${data.burgers[0].priceV}`;
  sizeM.textContent = "M (110g)";
  sizeL.textContent = "L (170g)";
  upperPrice1.textContent = "$";
  upperPrice2.textContent = "$";
  image1.src = `${data.burgers[0].src}`;
  title.classList.add("t-active");
  spanContent.classList.add("c-active");
  image1.classList.add("b-active");
  product.classList.add("p-active");
}

// Beef Burger Slide Remove
function beefSlideRemove() {
  title.classList.remove("t-active");
  spanContent.classList.remove("c-active");
  image1.classList.remove("b-active");
  product.classList.remove("p-active");
}

// Grilled Burger Slide
function grilledSlide() {
  title.textContent = `${data.burgers[1].title}`;
  spanContent.textContent = `${data.burgers[1].ingredients}`;
  medium.textContent = `${data.burgers[1].priceM}`;
  large.textContent = `${data.burgers[1].priceV}`;
  image1.src = `${data.burgers[1].src}`;
  title.classList.add("t-active");
  spanContent.classList.add("c-active");
  image1.classList.add("b-active");
  product.classList.add("p-active");
}

// Grilled Burger Slide Remove
function grilledSlideRemove() {
  title.classList.remove("t-active");
  spanContent.classList.remove("c-active");
  image1.classList.remove("b-active");
  product.classList.remove("p-active");
}

//* --------------- Slide Show Function ---------------

async function slides() {
  transitionAdd();
  await wait(4000);

  transitionRemove();
  await wait(1000);

  firstContainerAdd();
  await wait(110);

  beefSlide();
  await wait(4000);

  beefSlideRemove();
  await wait(1200);

  grilledSlide();
  await wait(4000);

  grilledSlideRemove();
  await wait(1200);
}

window.addEventListener("load", slides);