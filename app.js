const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Urban Blaze Shoes",
    price: 250000,
    colors: [
      {
        code: "black",
        img: "./img/Fire .png",
      },
      {
        code: "red",
        img: "./img/Fire .png",
      },
    ],
  },
  {
    id: 2,
    title: "Purple Rush Sneakers",
    price: 350000,
    colors: [
      {
        code: "Purple",
        img: "./img/Pink.png",
      },
      {
        code: "Pink",
        img: "./img/Pink.png",
      },
    ],
  },
  {
    id: 3,
    title: "Urban Skate Shoes",
    price: 275000,
    colors: [
      {
        code: "black",
        img: "./img/Casual.png",
      },
      {
        code: "green",
        img: "./img/Casual.png",
      },
    ],
  },
  {
    id: 4,
    title: "Urban Path Sneakers",
    price: 350000,
    colors: [
      {
        code: "black",
        img: "./img/Black.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "UHike Footwear",
    price: 389000,
    colors: [
      {
        code: "gray",
        img: "./img/Hiking.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp. " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
