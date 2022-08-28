import leftSidebar from "../Components/sidebar.js";
document.getElementById("left").innerHTML = leftSidebar();

import navbar from "../Components/import_navbar.js";
document.getElementById("navbarmain").innerHTML = navbar();

import footer from "../Components/footer_import.js";
document.getElementById("footermain").innerHTML = footer();

let productData = [
  {
    brand: "Sparky",
    name: "Scott Anthropologie Tulip Tote",
    price: "120.00",
    size: "6,6.5,7,7.5,8",
    productID: "women31",
    catagory: "Bag",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69504470_000_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69504470_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Classic",
    name: "Scott Anthropologie Cosmetic Bag",
    price: "68.00",
    size: "6,6.5,7,7.5,8,8.5",
    productID: "women32",
    catagory: "Bag",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69504488_010_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69504488_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Sparky",
    name: "Sparkly Tulle Opera Gloves",
    price: "28.00",
    size: "6.5,7,7.5,8",
    productID: "women33",
    catagory: "NightDress",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/70041389_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/70041389_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Classic",
    name: "Embellished Hoop Earrings",
    price: "118.00",
    size: "7,7.5,8",
    productID: "women34",
    catagory: "Earring",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69641124_053_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69641124_053_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Puma",
    name: "Stacked Birthstone Ring",
    price: "58.00",
    size: "6,6.5,7",
    productID: "women1",
    catagory: "Ring",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/65178998_065_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/65178998_065_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Gap",
    name: "Vegan Mini Crossbody Bag",
    price: "88.00",
    size: "6,6.5,7,7.5,8,8.8,9,9.5",
    productID: "women2",
    catagory: "Bag",
    color: "",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69770279_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69770279_070_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Puma",
    name: "Chimi 05 Pink Sunglasses",
    price: "140.00",
    size: "7,7.5,8,8.8,9,9.5",
    productID: "women3",
    catagory: "Sunglass",
    color: "pink",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/70361597_066_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/70361597_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Gap",
    name: "Hammered Cuff Bracelet",
    price: "48.00",
    size: "6,6.5,7,7.5,8",
    productID: "women4",
    catagory: "Bracelet",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/78192739_070_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/78192739_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Bady Moo",
    name: "Jute Boater",
    price: "83.00",
    size: "6,6.5,7,7.5,8",
    productID: "women5",
    catagory: "Cap",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68949643_270_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68949643_270_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Pepe jeans",
    name: "Large Floral-Print Scarf",
    price: "42.00",
    size: "6,6.5,7",
    productID: "women6",
    catagory: "Scarf",
    color: "white",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67039693_008_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Puffy Raffia Tote Bag",
    price: "68.60.00",
    size: "6,6.5,8,8.8,9",
    productID: "women7",
    catagory: "Bag",
    color: "white",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67674770_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Gap",
    name: "Quay Show Up Sunglasses",
    price: "55.00",
    size: "6,6.5,7,7.5,8",
    productID: "women8",
    catagory: "Sunglass",
    color: "black",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69554947_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/70221973_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bady Moo",
    name: "Oversized Oval Sunglasses",
    price: "38.00",
    size: "6,6.5,7,7.5,8",
    productID: "women9",
    catagory: "Sunglass",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/69942100_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/70721790_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Transparent Marnie Sunglasses",
    price: "325.00",
    size: "6,6.5,7,7.5,8,8.5",
    productID: "women10",
    catagory: "Sunglass",
    color: "black",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/70396999_030_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Bee bay",
    name: "Maria Black Ear Cuff",
    price: "35.00",
    size: "6,6.5,7,7.5,8",
    productID: "women11",
    catagory: "Ring",
    color: "yellow",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67148569_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "Encuentro Ring",
    price: "50.00",
    size: "7,7.5,8",
    productID: "women12",
    catagory: "Ring",
    color: "yellow",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68466127_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Bee bay",
    name: "Christine Elizabeth Necklace",
    price: "365.00",
    size: "6,6.5,7,7.5,8",
    productID: "women13",
    catagory: "Necklace",
    color: "white",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/78387883_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Gap",
    name: "Linear Ornate Clear Blue Drop Earrings",
    price: "44.00",
    size: "6,6.5,7,7.5,8,9,9.5",
    productID: "women14",
    catagory: "Earring",
    color: "white",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68753706_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Cloverpost Hilt Earrings",
    price: "165.00",
    size: "6,6.5,7,7.5,8",
    productID: "women15",
    catagory: "Earring",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68665918_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68665918_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Kaniroot",
    name: "Cloverpost Jaden Earrings",
    price: "115.00",
    size: "6,6.5,8",
    productID: "women16",
    catagory: "Earring",
    color: "yellow",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/68665959_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68665959_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Amber Sceats Dionne Necklace",
    price: "289.00",
    size: "6,6.5,7,7.5,8",
    productID: "women17",
    catagory: "Necklace",
    color: "yellow",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68496231_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Gap",
    name: "Metallic Ball Necklace",
    price: "58.00",
    size: "6,6.5,7,7.5,9",
    productID: "women18",
    catagory: "Necklace",
    color: "yellow",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/64984479_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
  },
  {
    brand: "Bee bay",
    name: "Astoria Straw Boater",
    price: "115.00",
    size: "6,6.5,7,7.5,",
    productID: "women19",
    catagory: "Cap",
    color: "black",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68901289_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Loeffler Randall Avery Tote Bag",
    price: "139.95",
    size: "6,6.5,7,7.5,8",
    productID: "women20",
    catagory: "Bag",
    color: "green",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/64364607_037_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
  },
  {
    brand: "Puma",
    name: "Taylor Printed Baseball Cap",
    price: "38.00",
    size: "6,6.5,7,7.5,8,9.5",
    productID: "women21",
    catagory: "Cap",
    color: "green",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/53792149_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/53792149_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
  },
  {
    brand: "Gap",
    name: "Larroude Mini Crossbody Bag",
    price: "325.00",
    size: "6,6.5,7,7.5,8",
    productID: "women22",
    catagory: "Bag",
    color: "white",
    image2:
      "https://images.urbndata.com/is/image/Anthropologie/65858870_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/65858870_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
  },
  {
    brand: "Puma",
    name: "Timeless Heart & Star Necklace",
    price: "755.00",
    size: "6,6.5,7,7.5,8,9",
    productID: "women23",
    catagory: "Necklace",
    color: "yellow",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/68142256_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
  },
  {
    brand: "Gap",
    name: "Orbital Cocktail Ring",
    price: "49.95",
    size: "6,6.5,7,7.5,8",
    productID: "women24",
    catagory: "Ring",
    color: "yellow",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/65089906_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
  },
  {
    brand: "Kaniroot",
    name: "Wyeth Leather-Trimmed Rancher",
    price: "88.00",
    size: "6,6.5,8,8.5",
    productID: "women25",
    catagory: "Cap",
    color: "",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/67040477_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
  },
  {
    brand: "Kaniroot",
    name: "Wispy Sparkle Drop Earrings",
    price: "44.00",
    size: "7,7.5,8",
    productID: "women25",
    catagory: "Earring",
    color: "",
    image2: "",
    image:
      "https://images.urbndata.com/is/image/Anthropologie/69792273_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
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
    if (elem.price >= 300) {
      div_ratings.innerText = `⭐⭐⭐⭐⭐(153)`;
      div.append(div_ratings);
    }
    if (elem.price >= 100 && elem.price < 300) {
      div_ratings.innerText = `⭐⭐⭐⭐(71)`;
      div.append(div_ratings);
    }
    if (elem.price >= 50 && elem.price < 100) {
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
