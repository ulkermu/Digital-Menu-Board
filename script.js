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
