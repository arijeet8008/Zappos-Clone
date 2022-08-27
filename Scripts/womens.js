import navbar from "../Components/import_navbar.js";
document.getElementById("navbarmain").innerHTML = navbar();

import footer from "../Components/footer_import.js";
document.getElementById("footermain").innerHTML = footer();

import leftSidebar from "../Components/sidebar.js";
document.getElementById("left").innerHTML = leftSidebar();

let productData = [
  {
    brand: "Puma",
    color: "red",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJw9T6AaP91X4x19FRfYQrU2C4NkL72zecLw&usqp=CAU",
    name: "selena floral FileList",
    price: "2000",
    size: "X,XX,XXL",
    productID: "dressmen1",
    catagory: "Casual",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0935_1_984da863.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqupNCxHL1vpiNqovvUpvwIlSZlbjODXTBg&usqp=CAU",
    name: "balck bella",
    price: "1347",
    size: "S,M,XX,XXL",
    productID: "womdressen18",
    catagory: "formal",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
  },

  {
    brand: "Bee bay",
    color: "yellow",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1frcMrqnv4yFcVqXE9Ltrt5rmLZmVjTW3A&usqp=CAU",
    name: "Curev multi-Color",
    price: "765",
    size: "S,X,L,XXl",
    productID: "womdressen13",
    catagory: "travel",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "yellow",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1Y_iC40lch5zTZgCzr_-hr2UhQOBXtH2ww&usqp=CAU",
    name: "Mega striple",
    price: "9999",
    size: "S,M,X,XXL",
    productID: "womdressen14",
    catagory: "sports",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_119512401_1_e2d71be7.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS-JkeFeQ5vpxUfDgsQv-FzN4McGoGthSsA&usqp=CAU",
    name: "balck bella",
    price: "1347",
    size: "S,M,X,XXL",
    productID: "womdressen15",
    catagory: "Casual",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "red",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMVTporI3avklfRNFa0iBXJ9q9WaCRtjZDA&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "799",
    size: "M,L,XX,XXS",
    productID: "wdressomen3",
    catagory: "party",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
  },

  {
    brand: "Puma",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf_nhJLqKOEsYkYXQQXGvkOvZp1un6X5Xqw&usqp=CAU",
    name: "plus size womens",
    price: "2000",
    size: "S,XX",
    productID: "womedressn17",
    catagory: "party",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
  },

  {
    brand: "Bee bay",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjN9twBi4rdTnd7HeRgqAe7fMDiMnYAwIAvw&usqp=CAU",
    name: "plus size womens",
    price: "979",
    size: "M,XXL,XX",
    productID: "womedressn19",
    catagory: "workout",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "white",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuF7qza2LPuUA3mu_FJ7qsO3qOHdRjjlUguw&usqp=CAU",
    name: "plus size womens",
    price: "2000",
    size: "X,M,L,XXS,XXL",
    productID: "womdressen4",
    catagory: "formal",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
  },
  {
    brand: "Bady Moo",
    color: "white",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23rlcTLnbnAc668zu7NwG26z7LlCJ4YEyEg&usqp=CAU",
    name: "balck bella",
    price: "1347",
    size: "X,M,L",
    productID: "wodressmen5",
    catagory: "workout",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
  },
  {
    brand: "Pepe jeans",
    color: "red",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMOBrkMKbyIWGeB2GwIv7J-QMmPd-hEXxHg&usqp=CAU",
    name: "plus size womens",
    price: "979",
    size: "XXS,M,L",
    productID: "wodressmen6",
    catagory: "travel",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "green",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaRbjzonY1TBgGt0-iEux0lYkc2Afum4ZsA&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "2000",
    size: "XXL,M,L",
    productID: "womdressen7",
    catagory: "sports",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "green",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREa7zacBLpK6n0fLZYknjxtOp3vmHY-b4Orw&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "1347",
    size: "X,M,L,XX",
    productID: "womdressen8",
    catagory: "Casual",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
  },
  {
    brand: "Bady Moo",
    color: "green",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3_5d4Ae3jZDIs7OKr-gSrQBcAHmhjlrLig&usqp=CAU",
    name: "balck bella",
    price: "976",
    size: "XS,M,L,XX",
    productID: "womdressen9",
    catagory: "festive",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "black",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jvbr0T4oV3SfxbOKxP9_KLs-vWkaEZsF8A&usqp=CAU",
    name: "woman cotton off white",
    price: "456",
    size: "X,L,XX",
    productID: "womedressn10",
    catagory: "party",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200",
  },
  {
    brand: "Sparky",
    color: "blue",
    image2:
      "https://m.media-amazon.com/images/I/81Q0vJZGmYL._AC_SR255,340_.jpg",
    name: "Eylis brach Slip Dress",
    price: "480",
    size: "X,XX,XXL",
    productID: "dresswomen31",
    catagory: "Party",
    image: "https://m.media-amazon.com/images/I/81cQmEGQ8zL._AC_SR255,340_.jpg",
  },
  {
    brand: "Kaniroot",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn727OMJsaoownVAItfQIcbNA7VKrqvxzzxQ&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "799",
    size: "S,M,L,XXL",
    productID: "womdressen16",
    catagory: "festive",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
  },
  {
    brand: "Classic",
    color: "blue",
    image2:
      "https://m.media-amazon.com/images/I/91rbCdmntIL._AC_SR255,340_.jpg",
    name: "Halter Mini Dress",
    price: "950",
    size: "X,XX,XXL",
    productID: "dresswomen32",
    catagory: "Party",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzjRfRePViBCUy9Dh-VgB4TJX_exYkfyzteDer9FXIyvN_HYg7DW_DbKYCxp2XVPkVSw&usqp=CAU",
  },
  {
    brand: "Sparky",
    color: "blue",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbNaqFQ2sYx691wMwI6YwkCg7YVwpE0IL2g&usqp=CAU",
    name: "Sweta Maxi Dress",
    price: "1590",
    size: "X,XX,XXL",
    productID: "dresswomen33",
    catagory: "NightDress",
    image: "https://m.media-amazon.com/images/I/71br2r0Wd8L._AC_SR255,340_.jpg",
  },
  {
    brand: "Classic",
    color: "blue",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4yvZpDm9EU7HsxeNlY9Aq1fUSqKoKUYMJA&usqp=CAU",
    name: "Aesome Party Dress",
    price: "1895",
    size: "X,XX,XXL",
    productID: "dresswomen34",
    catagory: "Sports",
    image: "https://m.media-amazon.com/images/I/61BhnzdOUBL._AC_SR255,340_.jpg",
  },
  {
    brand: "Bee bay",
    color: "black",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_p_DFrMwkl-8z4kLEbtymZ9X8bHwxdw7oDw&usqp=CAU",
    name: "woman cotton off white",
    price: "986",
    size: "M,L,XXS",
    productID: "womdressen11",
    catagory: "formal",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
  },
  {
    brand: "Kaniroot",
    color: "yellow",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8v-e3TkCTdGfiBFya4RhCgLsNKZRyQSlug&usqp=CAU",
    name: "chill pill supersoft",
    price: "567",
    size: "S,M,L,XXl",
    productID: "womedressn12",
    catagory: "workout",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
  },

  {
    brand: "Gap",
    color: "red",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEMCmUuZXJssNZVcOtfVYhlWY47EQ60NUTg&usqp=CAU",
    name: "balck bella",
    price: "1347",
    size: "X,M,L,XX,XXL",
    productID: "dresswomen2",
    catagory: "festive",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxsQUwBbvUpk5F5L2k02vFuEPl3OB2qQTNw&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "2000",
    size: "M,X,L,XXL",
    productID: "womdressen20",
    catagory: "travel",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIfKWsghJQs_4nYdN4suHSE2i5Nd33vHeDA&usqp=CAU",
    name: "chil pill supersoft palysuit",
    price: "1347",
    size: "M,L,XXL",
    productID: "womedressn21",
    catagory: "sport",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2-RBV3EEp8ZirVgYt217jOBbV3perQsgJA&usqp=CAU",
    name: "balck bella",
    price: "976",
    size: "S,XX",
    productID: "womdressen22",
    catagory: "Casual",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOg4s1yfnHY792GVy5nxUr5bctA911N2g&usqp=CAU",
    name: "woman cotton off white",
    price: "456",
    size: "XXL",
    productID: "womedressn23",
    catagory: "festive",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaeNp4Ow__ad-7c1PXQHiNiIlqz-A_xzYtQ&usqp=CAU",
    name: "woman cotton off white",
    price: "986",
    size: "S,X,L",
    productID: "wodressmen24",
    catagory: "party",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
  },
  {
    brand: "Kaniroot",
    color: "pink",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpRjosqhlXyIibzPaDMwYBZdh3ApRBk6c5g&usqp=CAU",
    name: "chill pill supersoft",
    price: "567",
    size: "S,XXL,XX",
    productID: "womedressn25",
    catagory: "formal",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
  },
];

/////////////////////////       Append Data       ////////////////////////////
let count = 0;
appendProductsData(productData);

function appendProductsData(productData) {
  let container = document.querySelector("#product");
  container.innerHTML = null;

  productData.forEach(function (elem) {
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

    count++ ;
    document.getElementById("count").innerText = `${count} items found`;

    div.append(img, brand, name, price, br1, div_col, div_ratings);
    container.append(div);
  });
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
