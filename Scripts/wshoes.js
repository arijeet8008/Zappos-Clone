import leftSidebar from "../Components/sidebar.js";
document.getElementById("left").innerHTML = leftSidebar();

import navbar from "../Components/import_navbar.js";
document.getElementById("navbarmain").innerHTML = navbar();

import footer from "../Components/footer_import.js";
document.getElementById("footermain").innerHTML = footer();

let productData = [
  {
    brand: "Sparky",
    name: "Edelman Kia Heels",
    price: "140.00",
    size: "6,6.5,7,7.5,8",
    productID: "women31",
    catagory: "Party",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/63531255_007_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/63531255_007_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Classic",
    name: "Sport Sandals",
    price: "125.00",
    size: "6,6.5,7,7.5,8,8.5",
    productID: "women32",
    catagory: "Party",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/60058286_020_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/60058286_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Sparky",
    name: "Seychelles Woven Flats",
    price: "99.00",
    sizes: "6.5,7,7.5,8",
    productID: "women33",
    catagory: "NightDress",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/60385945_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/60385945_009_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Classic",
    name: "Pilcro Twisted Slides",
    price: "130.00",
    size: "7,7.5,8",
    productID: "women34",
    catagory: "Sports",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/65368508_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/65368508_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Guilhermina Square-Toe",
    price: "120.00",
    size: "6,6.5,7",
    productID: "women1",
    catagory: "Casual",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/64998826_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/64998826_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Guilhermina Pointed-Toe",
    price: "140.00",
    size: "6,6.5,7,7.5,8,8.8,9,9.5",
    productID: "women2",
    catagory: "festive",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68829134_024_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68829134_024_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Brooklyn Lens Loafers",
    price: "130",
    size: "7,7.5,8,8.8,9,9.5",
    productID: "women3",
    catagory: "party",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/63060966_016_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/63060966_016_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Angel Alarcon Square-Toe",
    price: "150.00",
    size: "6,6.5,7,7.5,8",
    productID: "women4",
    catagory: "formal",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68947142_071_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68947142_071_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bady Moo",
    name: "Angel Strappy Heels",
    price: "150.00",
    size: "6,6.5,7,7.5,8",
    productID: "women5",
    catagory: "workout",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67426239_066_b16?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67426239_066_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Pepe jeans",
    name: "CAVERLEY Mazie Heels",
    price: "185.00",
    size: "6,6.5,7",
    productID: "women6",
    catagory: "travel",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68774272_085_b4?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68774272_085_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Puma",
    name: "Vicenza Metallic Mules",
    price: "160.00",
    size: "6,6.5,8,8.8,9",
    productID: "women7",
    catagory: "sports",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68542190_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68542190_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Bibi Lou Aoi Heels",
    price: "180.00",
    size: "6,6.5,7,7.5,8",
    productID: "women8",
    catagory: "Casual",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/66297565_068_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/66297565_068_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Bady Moo",
    name: "Laidback London Diani Sandals",
    price: "68.60",
    size: "6,6.5,7,7.5,8",
    productID: "women9",
    catagory: "festive",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67128207_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67128207_015_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Melissa Degradee Flats",
    price: "48.30",
    size: "6,6.5,7,7.5,8,8.5",
    productID: "women10",
    catagory: "party",
    color: "blue",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67105452_059_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67105452_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bee bay",
    name: "Nisolo Mara Woven Loafers",
    price: "180.00",
    size: "6,6.5,7,7.5,8",
    productID: "women11",
    catagory: "formal",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67192310_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67192310_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "Woven Tie-Up Sandals",
    price: "112.00",
    size: "7,7.5,8",
    productID: "women12",
    catagory: "workout",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67665521_015_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67665521_015_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bee bay",
    name: "Tie-Up Thong Sandals",
    price: "77.00",
    size: "6,6.5,7,7.5,8",
    productID: "women13",
    catagory: "travel",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67454595_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67454595_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Transparent Zebra Sandals",
    price: "98.00",
    size: "6,6.5,7,7.5,8,9,9.5,10,11",
    productID: "women14",
    catagory: "sports",
    color: "green",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67563486_034_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67563486_034_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Slide Sandalsbalck bella",
    price: "100.00",
    size: "6,6.5,7,7.5,8",
    productID: "women15",
    catagory: "Casual",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69827319_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69827319_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "Pilcro Tie-Up Sport Sandals",
    price: "105.00",
    size: "6,6.5,8,10,11",
    productID: "women16",
    catagory: "festive",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67608067_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67608067_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Laidback London Sandals",
    price: "80.50",
    size: "6,6.5,7,7.5,8",
    productID: "women17",
    catagory: "party",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67127993_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67127993_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Fringed Rope Sandals",
    price: "84.00",
    size: "6,6.5,7,7.5,9",
    productID: "women18",
    catagory: "formal",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67060301_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67060301_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bee bay",
    name: "Pilcro Tie-Up Sandals",
    price: "70.00",
    size: "6,6.5,7,7.5,",
    productID: "women19",
    catagory: "workout",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67059949_025_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67059949_025_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Dolce Vita Elly Heels",
    price: "150.00",
    size: "6,6.5,7,7.5,8",
    productID: "women20",
    catagory: "travel",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69422574_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69422574_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Matisse Scorpio Ballet Flats",
    price: "125.00",
    size: "6,6.5,7,7.5,8,9.5,10,11",
    productID: "women21",
    catagory: "sport",
    color: "brown",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68807197_026_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68807197_026_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "balck bella",
    price: "126.00",
    size: "6,6.5,7,7.5,8",
    productID: "women22",
    catagory: "Casual",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67425850_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67425850_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Birkenstock Arizona Sandals",
    price: "50.00",
    size: "6,6.5,7,7.5,8,9",
    productID: "women23",
    catagory: "festive",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/66436783_085_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/66436783_085_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "TKEES Glossy Sandals",
    price: "55.00",
    size: "6,6.5,7,7.5,8",
    productID: "women24",
    catagory: "party",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67745745_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67745745_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "TKEES Glossy Sandals",
    price: "77.00",
    size: "6,6.5,8,8.5",
    productID: "women25",
    catagory: "formal",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67060459_068_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67060459_068_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "Embellished Tie-Up Sandals",
    price: "84.00",
    size: "7,7.5,8",
    productID: "women25",
    catagory: "formal",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/67013219_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67013219_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
];

/////////////////////////       Append Data       ////////////////////////////
let count = 0;
let likedcount = JSON.parse(localStorage.getItem("likecount")) || 0;
let productlike = JSON.parse(localStorage.getItem("productlike")) || [];
appendProductsData(productData);

function appendProductsData(productData) {
  let container = document.querySelector("#product");
  container.innerHTML = null;

  productData.forEach(function (elem) {
    let div = document.createElement("div");
    div.className = "cartProductsLists";

    let like = document.createElement("div");
    like.className = "like";

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

    let likecount = document.createElement("b");
    likecount.innerText = likedcount;

    let likeDiv = document.createElement("div");
    likeDiv.id = "likeDiv";
    likeDiv.addEventListener("click", function () {
      likedcount++;
      likecount.innerText = likedcount;

      if (favorite(elem.id) === true) {
        productlike.push(elem);
        localStorage.setItem("productlike", JSON.stringify(productlike));
      }

      localStorage.setItem("likecount", JSON.stringify(likedcount));
    });

    let likeImg = document.createElement("b");
    likeImg.innerText = "❤️";

    likeDiv.append(likeImg, likecount);
    like.append(img, likeDiv);


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
    if (elem.price >= 150) {
      div_ratings.innerText = `⭐⭐⭐⭐⭐(153)`;
      div.append(div_ratings);
    }
    if (elem.price >= 50 && elem.price < 150) {
      div_ratings.innerText = `⭐⭐⭐⭐(71)`;
      div.append(div_ratings);
    }
    if (elem.price >= 20 && elem.price < 50) {
      div_ratings.innerText = `⭐⭐⭐(42)`;
      div.append(div_ratings);
    }

    count++;
    document.getElementById("count").innerText = `${count} items found`;

    div.append(like, brand, name, price, br1, div_col, div_ratings);
    container.append(div);
  });
}

////////////////////////////////////////////////////////////////////////////

function favorite(element) {
  for (let i = 0; i < productlike.length; i++) {
    if (productlike[i].id == element) {
      return false;
    }
  }
  return true;
}
/////////////////////////       Sorting       ////////////////////////////

document.querySelector(".sortOptions").addEventListener("change", SortingData);

function SortingData() {
  let select = document.querySelector(".sortOptions").value;
  if (select == "brandName") {
    productData.sort(function (a, b) {
      return a.brand === b.brand ? 0 : a.brand < b.brand ? -1 : 1;
    });
    appendProductsData(productData);
  }

  if (select == "price-asc") {
    productData.sort(function (a, b) {
      return a.price - b.price;
    });
    appendProductsData(productData);
  }

  if (select == "price-desc") {
    productData.sort(function (a, b) {
      return b.price - a.price;
    });
    appendProductsData(productData);
  }
  if (select == "reviewRating-asc") {
    productData.sort(function (a, b) {
      return a.price - b.price;
    });
    appendProductsData(productData);
  }
  if (select == "reviewRating-desc") {
    productData.sort(function (a, b) {
      return b.price - a.price;
    });
    appendProductsData(productData);
  } else {
    appendProductsData(productData);
  }
}

/////////////////////     Filter Data        /////////////////////////

document
  .getElementById("filterCatagory")
  .addEventListener("input", filterCatagoryData);
function filterCatagoryData() {
  let query = document.getElementById("filterCatagory").value;

  let copyData = [...productData]; // Spread Operator [...]

  copyData = copyData.filter(function (element) {
    return element.catagory.includes(query);

    //    return element.title.toLowerCase.includes(query)
  });

  appendProductsData(copyData);
}

document
  .getElementById("filterBrands")
  .addEventListener("input", filterBrandsData);
function filterBrandsData() {
  let query = document.getElementById("filterBrands").value;

  let copyData = [...productData];

  copyData = copyData.filter(function (element) {
    return element.brand.includes(query);
  });

  appendProductsData(copyData);
}

document
  .getElementById("filterColors")
  .addEventListener("input", filterColorsData);
function filterColorsData() {
  let query = document.getElementById("filterColors").value;

  let copyData = [...productData];

  copyData = copyData.filter(function (element) {
    return element.color.includes(query);

    //  return element.title.toLowerCase.includes(query)
  });

  appendProductsData(copyData);
}
