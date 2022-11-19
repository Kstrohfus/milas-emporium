const dressOne = document.querySelector(".dressOne")
const dressTwo = document.querySelector(".dressTwo")
const dressThree = document.querySelector(".dressThree")
const shirtOne  = document.querySelector(".shirtOne")
const shirtTwo  = document.querySelector(".shirtTwo")
const shirtThree  = document.querySelector(".shirtThree")
const hoodOne = document.querySelector(".hoodOne")
const hoodTwo = document.querySelector(".hoodTwo")
const hoodThree = document.querySelector(".hoodThree")

dressOne.addEventListener("mouseover", function () {
  if (dressOne.classList.contains("show")) {
    dressOne.classList.remove("show");
  } else {
    dressOne.classList.add("show");
  }
});

shirtOne.addEventListener("mouseover", function () {
  if (shirtOne.classList.contains("show")) {
    shirtOne.classList.remove("show");
  } else {
    shirtOne.classList.add("show");
  }
});

hoodOne.addEventListener("mouseover", function () {
  if (hoodOne.classList.contains("show")) {
    hoodOne.classList.remove("show");
  } else {
    hoodOne.classList.add("show");
  }
});

//Second
dressTwo.addEventListener("mouseover", function () {
  if (dressTwo.classList.contains("show")) {
    dressTwo.classList.remove("show");
  } else {
    dressTwo.classList.add("show");
  }
});

shirtTwo.addEventListener("mouseover", function () {
  if (shirtTwo.classList.contains("show")) {
    shirtTwo.classList.remove("show");
  } else {
    shirtTwo.classList.add("show");
  }
});

hoodTwo.addEventListener("mouseover", function () {
  if (hoodTwo.classList.contains("show")) {
    hoodTwo.classList.remove("show");
  } else {
    hoodTwo.classList.add("show");
  }
});

//Third

dressThree.addEventListener("mouseover", function () {
  if (dressThree.classList.contains("show")) {
    dressThree.classList.remove("show");
  } else {
    dressThree.classList.add("show");
  }
});

shirtThree.addEventListener("mouseover", function () {
  if (shirtThree.classList.contains("show")) {
    shirtThree.classList.remove("show");
  } else {
    shirtThree.classList.add("show");
  }
});

hoodThree.addEventListener("mouseover", function () {
  if (hoodThree.classList.contains("show")) {
    hoodThree.classList.remove("show");
  } else {
    hoodThree.classList.add("show");
  }
});
