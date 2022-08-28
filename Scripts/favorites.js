import navbar from "../Components/import_navbar.js";
document.getElementById("navbarmain").innerHTML = navbar();

import footer from "../Components/footer_import.js";
document.getElementById("footermain").innerHTML = footer();

let productlike = JSON.parse(localStorage.getItem("productlike")) || [];

let likedcount = JSON.parse(localStorage.getItem("likecount")) || 0;
appendProductsData(productlike);

function appendProductsData(productlike) {
  let container = document.querySelector("#favorites");
  container.innerHTML = null;

  productlike.forEach(function (elem, index) {
    let div = document.createElement("div");
    div.className = "cartProductsLists";

    let img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.style.height = "500px";

    img.addEventListener("mouseover", function () {
      img.setAttribute("src", elem.image2);
      img.style.height = "500px";
    });

    img.addEventListener("mouseout", function () {
      img.setAttribute("src", elem.image);
      img.style.height = "500px";
    });

    let name = document.createElement("h3");
    name.innerText = elem.name;

    let brand = document.createElement("h2");
    brand.innerText = elem.brand;

    let price = document.createElement("h3");
    price.innerText = ` $ ${elem.price}`;

    let br1 = document.createElement("br");

    img.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(elem));
      window.location.href = "./productDetails.html";
    });
    name.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(elem));
      window.location.href = "./productDetails.html";
    });
    price.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(elem));
      window.location.href = "./productDetails.html";
    });

    let div_col = document.createElement("div");

    if (elem.color == "black" || elem.color == "red") {
      let color1 = document.createElement("button");
      color1.setAttribute("id", "black_color");
      color1.setAttribute("class", "color");

      let color2 = document.createElement("button");
      color2.setAttribute("id", "red_color");
      color2.setAttribute("class", "color");

      div_col.id = "colorDiv";
      div_col.append(color1, color2);
      div.append(div_col);
    }

    if (elem.color == "pink" || elem.color == "green") {
      let color1 = document.createElement("button");
      color1.setAttribute("id", "pink_color");
      color1.setAttribute("class", "color");

      let color2 = document.createElement("button");
      color2.setAttribute("id", "green_color");
      color2.setAttribute("class", "color");

      div_col.id = "colorDiv";
      div_col.append(color1, color2);
      div.append(div_col);
    }

    if (elem.color == "yellow" || elem.color == "blue") {
      let color1 = document.createElement("button");
      color1.setAttribute("id", "yellow_color");
      color1.setAttribute("class", "color");

      let color2 = document.createElement("button");
      color2.setAttribute("id", "blue_color");
      color2.setAttribute("class", "color");

      div_col.id = "colorDiv";
      div_col.append(color1, color2);
      div.append(div_col);
    }

    let div_ratings = document.createElement("div");
    div_ratings.id = "ratings";
    if (elem.price >= 1500) {
      div_ratings.innerText = `⭐⭐⭐⭐⭐(153)`;
      div.append(div_ratings);
    }
    if (elem.price >= 1000 && elem.price < 1500) {
      div_ratings.innerText = `⭐⭐⭐⭐(71)`;
      div.append(div_ratings);
    }
    if (elem.price >= 500 && elem.price < 1000) {
      div_ratings.innerText = `⭐⭐⭐(42)`;
      div.append(div_ratings);
    }

    let likecount = document.createElement("b");
    likecount.innerText = likedcount;

    let likeDiv = document.createElement("div");

    let likeImg = document.createElement("b");
    likeImg.innerText = "❤️";

    likeDiv.append(likeImg, likecount);

    likeDiv.id = "removefav";
    likeDiv.addEventListener("click", function () {
      remove(index);
    });

    div.append(img, brand, name, price, br1, div_col, div_ratings ,likeDiv);
    container.append(div);
  });
}

let remove = (index) => {
  let copyData = productlike;

  copyData.splice(index, 1);
  localStorage.setItem("productlike", JSON.stringify(copyData));

  appendProductsData(copyData);
};


/////////////////////////       Recently viewed       ////////////////////////////

let recentView = JSON.parse(localStorage.getItem("recent")) || [];
recentProductsData(recentView);

function recentProductsData(recentView) {
    let container = document.querySelector("#recentView");
    container.innerHTML = null;
  
    recentView.forEach(function (elem) {
      let div = document.createElement("div");
      div.className = "recentClass";
  
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      img.style.height = "500px";
  
      let name = document.createElement("h3");
      name.innerText = elem.name;
  
      let brand = document.createElement("h2");
      brand.innerText = elem.brand;
  
      let price = document.createElement("h3");
      price.innerText = ` $ ${elem.price}`;
  
      img.addEventListener("click", function () {
        localStorage.setItem("products", JSON.stringify(elem));
        window.location.href = "./productDetails.html";
      });
      name.addEventListener("click", function () {
        localStorage.setItem("products", JSON.stringify(elem));
        window.location.href = "./productDetails.html";
      });
      price.addEventListener("click", function () {
        localStorage.setItem("products", JSON.stringify(elem));
        window.location.href = "./productDetails.html";
      });
  
      let div_ratings = document.createElement("div");
      div_ratings.id = "recentRatings";
      if (elem.price >= 1500) {
        div_ratings.innerText = `⭐⭐⭐⭐⭐(153)`;
        div.append(div_ratings);
      }
      if (elem.price >= 1000 && elem.price < 1500) {
        div_ratings.innerText = `⭐⭐⭐⭐(71)`;
        div.append(div_ratings);
      }
      if (elem.price >= 500 && elem.price < 1000) {
        div_ratings.innerText = `⭐⭐⭐(42)`;
        div.append(div_ratings);
      }
  
      div.append(img, brand, name, price, div_ratings);
      container.append(div);
    });
  }