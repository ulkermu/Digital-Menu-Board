import data from "./data.json" assert { type: "json" };

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

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

//* --------------- Second Slide Contents ---------------
// Create Elements
const container2 = document.createElement("div");
const sepImgContain1 = document.createElement("div");
const sepHeader1 = document.createElement("header");
const sepMain1 = document.createElement("main");
const sepFooter1 = document.createElement("footer");
const title1 = document.createElement("div");
const sepImgTitle1 = document.createElement("h1");
const titleContents1 = document.createElement("div");
const sepImgSpan1 = document.createElement("span");
const sepImg1 = document.createElement("img");
const sepPrice1 = document.createElement("div");
const sepImgContain2 = document.createElement("div");
const sepHeader2 = document.createElement("header");
const sepMain2 = document.createElement("main");
const sepFooter2 = document.createElement("footer");
const title2 = document.createElement("div");
const sepImgTitle2 = document.createElement("h1");
const titleContents2 = document.createElement("div");
const sepImgSpan2 = document.createElement("span");
const sepImg2 = document.createElement("img");
const sepPrice2 = document.createElement("div");
const sepImgContain3 = document.createElement("div");
const sepHeader3 = document.createElement("header");
const sepMain3 = document.createElement("main");
const sepFooter3 = document.createElement("footer");
const title3 = document.createElement("div");
const sepImgTitle3 = document.createElement("h1");
const titleContents3 = document.createElement("div");
const sepImgSpan3 = document.createElement("span");
const sepImg3 = document.createElement("img");
const sepPrice3 = document.createElement("div");

// Settings Class and Content
container2.classList.add("container2");
// First Contain
sepImgContain1.classList.add("sepContain1");
sepHeader1.classList.add("sepHeader");
sepMain1.classList.add("sepMain");
sepFooter1.classList.add("sepFooter");
title1.classList.add("title2");
sepImgTitle1.classList.add("sepImgTitle");
titleContents1.classList.add("title-contents");
sepImgSpan1.classList.add("sepImgSpan");
sepImg1.classList.add("sepImg");
sepPrice1.classList.add("price2");
// Second Contain
sepImgContain2.classList.add("sepContain2");
sepHeader2.classList.add("sepHeader");
sepMain2.classList.add("sepMain");
sepFooter2.classList.add("sepFooter");
title2.classList.add("title2");
sepImgTitle2.classList.add("sepImgTitle");
titleContents2.classList.add("title-contents");
sepImgSpan2.classList.add("sepImgSpan");
sepImg2.classList.add("sepImg");
sepPrice2.classList.add("price2");
// Third Contain
sepImgContain3.classList.add("sepContain3");
sepHeader3.classList.add("sepHeader");
sepMain3.classList.add("sepMain");
sepFooter3.classList.add("sepFooter");
title3.classList.add("title2");
sepImgTitle3.classList.add("sepImgTitle");
titleContents3.classList.add("title-contents");
sepImgSpan3.classList.add("sepImgSpan");
sepImg3.classList.add("sepImg");
sepPrice3.classList.add("price2");

// Layout - Second Slide Contents
container2.appendChild(sepImgContain1);
container2.appendChild(sepImgContain2);
container2.appendChild(sepImgContain3);
// First Contain
sepImgContain1.appendChild(sepHeader1);
sepImgContain1.appendChild(sepMain1);
sepImgContain1.appendChild(sepFooter1);
sepHeader1.appendChild(title1);
sepHeader1.appendChild(titleContents1);
title1.appendChild(sepImgTitle1);
titleContents1.appendChild(sepImgSpan1);
sepMain1.appendChild(sepImg1);
sepFooter1.appendChild(sepPrice1);
// Second Contain
sepImgContain2.appendChild(sepHeader2);
sepImgContain2.appendChild(sepMain2);
sepImgContain2.appendChild(sepFooter2);
sepHeader2.appendChild(title2);
sepHeader2.appendChild(titleContents2);
title2.appendChild(sepImgTitle2);
titleContents2.appendChild(sepImgSpan2);
sepMain2.appendChild(sepImg2);
sepFooter2.appendChild(sepPrice2);
// Third Contain
sepImgContain3.appendChild(sepHeader3);
sepImgContain3.appendChild(sepMain3);
sepImgContain3.appendChild(sepFooter3);
sepHeader3.appendChild(title3);
sepHeader3.appendChild(titleContents3);
title3.appendChild(sepImgTitle3);
titleContents3.appendChild(sepImgSpan3);
sepMain3.appendChild(sepImg3);
sepFooter3.appendChild(sepPrice3);

//* --------------- Slide Functions / Transition Slide ---------------

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
// Add container to HTML
function firstContainerAdd() {
  document.body.appendChild(container);
}

// Remove container from HTML
function firstContainerRemove() {
  document.body.removeChild(container);
}

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

// Chicken Burger Slide
function chickenSlide() {
  title.textContent = `${data.burgers[2].title}`;
  spanContent.textContent = `${data.burgers[2].ingredients}`;
  medium.textContent = `${data.burgers[2].priceM}`;
  large.textContent = `${data.burgers[2].priceV}`;
  image1.src = `${data.burgers[2].src}`;
  title.classList.add("t-active");
  spanContent.classList.add("c-active");
  image1.classList.add("b-active");
  product.classList.add("p-active");
}

// Chicken Burger Slide Remove
function chickenSlideRemove() {
  title.classList.remove("t-active");
  spanContent.classList.remove("c-active");
  image1.classList.remove("b-active");
  product.classList.remove("p-active");
}

//* --------------- Slide Functions / Second Slide ---------------

function secondContainerAdd() {
  document.body.appendChild(container2);
}

function secondContainerRemove() {
  document.body.removeChild(container2);
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

  chickenSlide();
  await wait(4000);

  chickenSlideRemove();
  await wait(600);

  firstContainerRemove();
  await wait(10);

  transitionAdd();
  await wait(4000);

  transitionRemove();
  await wait(1100);

  secondContainerAdd();
  await wait(10);
}

window.addEventListener("load", slides);