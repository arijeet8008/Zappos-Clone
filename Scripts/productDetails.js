let productDetail = JSON.parse(localStorage.getItem("products"))  ;
let details = [] ;
details.push(productDetail);

let recentView = JSON.parse(localStorage.getItem("recent")) || [] ;
recentProductsData(recentView);

let cartData = JSON.parse(localStorage.getItem("cart")) || [] ;
console.log(cartData);

/////////////////////////       Append Data       ////////////////////////////


appendProductsData(details);

function appendProductsData(productData) {

  let container = document.getElementById("productDetails");
  container.innerHTML = null ;

  productData.forEach(function (elem) {

    let div = document.createElement("div");
    div.className = "cartProductsLists";

    let mainImg = document.createElement("img");
    mainImg.id = "mainImg";
    mainImg.setAttribute("src", elem.image);

    let mainImgDiv = document.createElement("div");
    mainImgDiv.setAttribute("id", "mainImgDiv");
    mainImgDiv.append(mainImg);


    let mainImg1 = document.createElement("img");
    mainImg1.setAttribute("src", elem.image);
    mainImg1.addEventListener("click" , function(){
        document.getElementById("mainImg").src = elem.image;
    })

    let mainImg2 = document.createElement("img");
    mainImg2.setAttribute("src", elem.image2);
    mainImg2.addEventListener("click" , function(){
        document.getElementById("mainImg").src = elem.image2;
    })

    let subImgDiv = document.createElement("div");
    subImgDiv.setAttribute("id", "subImgDiv");
    subImgDiv.append(mainImg1,mainImg2);


    let name = document.createElement("h2");
    name.innerText = elem.name;

    let brand = document.createElement("h1");
    brand.innerText = elem.brand;

    let price = document.createElement("p");
    price.id = "price";
    price.innerText = ` $ ${elem.price}.00`;

    let priceDesk = document.createElement("p");
    priceDesk.id = "priceDesk";
    priceDesk.innerText = "or 4 interest-free payments of $18.50 with  ⓘ";

    let colorText = document.createElement("p");
    colorText.innerText = `Color : Medium ${elem.color}`;
    colorText.id = "colorText";

    let sizeText = document.createElement("p");
    sizeText.id = "sizeText";
    sizeText.innerText = "Select Size :";

    let sizeDiv = document.createElement("div");
    sizeDiv.id = "sizeDiv";


    let sizeDiv1 = document.createElement("div");
    sizeDiv1.className = "sizeDiv";
    sizeDiv1.append(document.createElement("p").innerText = "L");

    let sizeDiv2 = document.createElement("div");
    sizeDiv2.className = "sizeDiv";
    sizeDiv2.append(document.createElement("p").innerText = "M");

    let sizeDiv3 = document.createElement("div");
    sizeDiv3.className = "sizeDiv";
    sizeDiv3.append(document.createElement("p").innerText = "X");

    let sizeDiv4 = document.createElement("div");
    sizeDiv4.className = "sizeDiv";
    sizeDiv4.append(document.createElement("p").innerText = "XL");

    sizeDiv.append(sizeDiv1,sizeDiv2,sizeDiv3,sizeDiv4);

    let button = document.createElement("button");
    button.innerText = "Add To Cart";
    button.id = "addToCart";
    button.addEventListener("click", function(){

        if(addToCart(elem.productID)===true){

        alert("Product Added To The Cart Sucessfully");
        cartData.push(elem);
        localStorage.setItem("cart",JSON.stringify(cartData));

        window.location.href = "./cart.html";

        }
        else{
        alert("Product Already Added To The Cart")
        };
        
      }); 

    price.addEventListener("click", function () {
      productDetailsLS.push(elem);
      localStorage.setItem("products", JSON.stringify(productDetailsLS));
      window.location.href = "./productDetails.html";
      console.log(productDetailsLS);
    });

    let div_col = document.createElement("div");

    if(elem.color == "black" || elem.color == "red"){

    let color1 = document.createElement("button");
    color1.setAttribute("id", "black_color");
    color1.setAttribute("class", "color");

    let color2 = document.createElement("button");
    color2.setAttribute("id", "red_color");
    color2.setAttribute("class", "color");

    div_col.id = "colorDiv";
    div_col.append(color1, color2);
    
    }

    if(elem.color == "pink" || elem.color == "green"){

    let color1 = document.createElement("button");
    color1.setAttribute("id", "pink_color");
    color1.setAttribute("class", "color");

    let color2 = document.createElement("button");
    color2.setAttribute("id", "green_color");
    color2.setAttribute("class", "color");

    div_col.id = "colorDiv";
    div_col.append(color1, color2);
    
    }

    if(elem.color == "yellow" || elem.color == "blue"){

      let color1 = document.createElement("button");
      color1.setAttribute("id", "yellow_color");
      color1.setAttribute("class", "color");
  
      let color2 = document.createElement("button");
      color2.setAttribute("id", "blue_color");
      color2.setAttribute("class", "color");
  
      div_col.id = "colorDiv";
      div_col.append(color1, color2);
      
      }

    let div_ratings = document.createElement("div");
    div_ratings.id = "ratings";
    if(elem.price >= 1500){

      div_ratings.innerText = `⭐⭐⭐⭐⭐(153)`;
      
    }
    if(elem.price >= 1000 && elem.price < 1500){

      div_ratings.innerText = `⭐⭐⭐⭐(71)`;
      
    }
    if(elem.price >= 500 && elem.price < 1000){

      div_ratings.innerText = `⭐⭐⭐(42)`;
      
    }


    let subTittleDiv = document.createElement("div");
    subTittleDiv.setAttribute("id", "subTittleDiv");
    subTittleDiv.append(brand,name,price,priceDesk,colorText,div_col, div_ratings,sizeText, sizeDiv, button);


    recentView.push(elem);
    localStorage.setItem("recent", JSON.stringify(recentView));
    
      div.append(subImgDiv,mainImgDiv,subTittleDiv);
      container.append(div);
  });
}


function addToCart(element){
    for(let i=0;i<cartData.length;i++){

    if(cartData[i].productID==element){
    return false;

    }
}
    return true;
}


///////////////////////////////////////////////////////////////////////////////

 /////////////////////////       Recently viewed       ////////////////////////////
 
  
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
