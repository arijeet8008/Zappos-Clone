

function myFunction() {

let menuContent = document.getElementById("myDropdown");

   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
  
  }
  
  let shoes = [
    "Shoes",
    "Sneakers & Athletic",
    "Sandals",
    "Running Shoes",
    "Oxfords",
    'Loafers',
    "Clogs",
    "Boots",
    "Wide",
    "Single Shoes",
    "Shop All Shoes",
  ]
  
  let clothing = [
    "Clothing",
    "Shirts & Tops",
    "Swimwear",
    "Dresses",
    "Shorts",
    "Jeans & Denim",
   "Underwear & Intimates",
    "Coats & Outerwear",
    "Socks",
    // "Sleepwear",
    // "Activewear",
    // "Plus Size",
    // "Petite",
    "Shop All Clothing"
  ]
  
  let accessories = [
   "Accessories & More",
    "Bags",
    "Hats",
    "Sunglasses & Eyewear",
    "Belts",
    "Watches",
    "Ties & Pocket Squares",
    "Gloves",
    // "Tech Accessories",
    "Wallets",
    "Shop All Accessories",
  ]
  
  let gift_cards = [
    "Gift Cards",
    "E-Gift Cards",
    "Mail Gift Cards",
    "Sale",
    "Sneakers & Athletic",
    "Boots",
    "Shirts and Tops",
    "Denim",
    "Shorts",
    // "Sandals",
    "Shop All Sale",
  ]
  
  let featured = [
    "Featured",
    "The Style Room",
    "The Fan Shop",
    "Big and Tall",
    "UFC Shop",
    "Men's Golf Shoes & Clothing",
    "c9 Champion: $40 and Under",
    "Xero Shoes",
    "Milwaukee Boot Company",
    "Moral Code",
  ]
  
let women_cat = "dp_list_women";
let new_cat = "dp_list_new";
let men_cat = "dp_list_men";
let kids_cat = "dp_list_kids";
let dept_cat = "dp_list_dept";
let brand_cat = "dp_list_brands";
let sale_cat = "dp_list_sale";
let clothing_cat = "dp_list_clothing";

function new_d1() {
    let menuContent = document.getElementById("myDropdown-1");
    
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
        
    } else {
        menuContent.style.display = "block";
        // menuContent.innerHTML =null
        // window.location.reload();  
    }
    append(shoes, new_cat)
    append(clothing, new_cat)
    append(accessories, new_cat)
    append(gift_cards, new_cat)
    append(featured, new_cat)
    console.log("xxx");
}

function women_d2() {
    let menuContent = document.getElementById("myDropdown-2");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, women_cat)
    append(clothing, women_cat)
    append(accessories, women_cat)
    append(gift_cards, women_cat)
    append(featured, women_cat)
}

function men_d3() {
    let menuContent = document.getElementById("myDropdown-3");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, men_cat)
    append(clothing, men_cat)
    append(accessories, men_cat)
    append(gift_cards, men_cat)
    append(featured, men_cat)
}

function kids_d4() {
    let menuContent = document.getElementById("myDropdown-4");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, kids_cat)
    append(clothing, kids_cat)
    append(accessories, kids_cat)
    append(gift_cards, kids_cat)
    append(featured, kids_cat)
}

function dept_d5() {
    let menuContent = document.getElementById("myDropdown-5");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, dept_cat)
    append(clothing, dept_cat)
    append(accessories, dept_cat)
    append(gift_cards, dept_cat)
    append(featured, dept_cat)
}

function brands_d6() {
    let menuContent = document.getElementById("myDropdown-6");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, brand_cat)
    append(clothing, brand_cat)
    append(accessories, brand_cat)
    append(gift_cards, brand_cat)
    append(featured, brand_cat)
}

function sale_d7() {
    let menuContent = document.getElementById("myDropdown-7");

    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, sale_cat)
    append(clothing, sale_cat)
    append(accessories, sale_cat)
    append(gift_cards, sale_cat)
    append(featured, sale_cat)
}

function clothing_d8() {
    let menuContent = document.getElementById("myDropdown-8");
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
        // window.location.reload(); 
    }
    append(shoes, clothing_cat)
    append(clothing, clothing_cat)
    append(accessories, clothing_cat)
    append(gift_cards, clothing_cat)
    append(featured, clothing_cat)
}

// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         document.getElementsByClassName('dropdown-content')
//             .style.display = "none";
//     }
// } 

let append = (item, cont_item) => {
    let cont = document.getElementById(cont_item);

    let div = document.createElement("div");
    //let arr = ["wtops.html", "wshoes.html","waccessories.html","womens.html"]

    for (let i = 0; i <= 9; i++) {
        let a = document.createElement("a");
        a.innerHTML = item[i];
        if(item[i]==="Shirts & Tops"){
           a.href = "wtops.html" 
        }
        if(item[i]==="Sneakers & Athletic"){
            a.href = "wshoes.html" 
        }
        if(item[i]==="bags"){
            a.href = "waccessories.html" 
        }
        else{
            a.href = "womens.html" 
        }

        if(i===0){
            // a.setAttribute("class","title")
            a.style.fontWeight = 600
            a.style.fontSize = "16px"
            a.style.lineHeight = "normal"
        }
        div.append(a);
        // console.log(item[i]);
    }

    cont.append(div)
    // return cont
    
}

// document.getElementById("search_btn").addEventListener("click",search)

let search = () =>{

    let query =  document.getElementById("search").value;

    if(query === "dress"){
        window.location.href = "womens.html"
    }
    else if(query === "cloth"){
        window.location.href = "womens.html"
    }
    else if(query === "shoe"){
        window.location.href = "wshoes.html"
    }
    else if(query === "top"){
        window.location.href = "wtops.html"
    }
    console.log(query);
}

let login_data = JSON.parse(localStorage.getItem("login"));


// console.log(count_div);
// // if(login_data){
//     count_div.append ="y"
// }
// let count = JSON.parse(localStorage.getItem("count_items"))

// let count_div = document.getElementById("s3_p2_navbar")
// // console.log(count_div);
//  let append_count = ()=>{
//     let p = document.createElement("p");
//     p.innerText = count
//     count_div.append(p)
//  }
//   append_count()

let cart = ()=>{
    if(login_data){
       window.location.href = "cart.html" 
      
    }
    else{
        alert("Log in First")
    }
}

 //<div id="count_item">My Cart</div> 