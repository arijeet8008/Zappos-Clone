function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}

function new_d1() {
  document.getElementById("myDropdown-1").classList.toggle("show");
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}

function women_d2() {
  document.getElementById("myDropdown-2").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function men_d3() {
  document.getElementById("myDropdown-3").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function kids_d4() {
  document.getElementById("myDropdown-4").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function dept_d5() {
  document.getElementById("myDropdown-5").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function brands_d6() {
  document.getElementById("myDropdown-6").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function sale_d7() {
  document.getElementById("myDropdown-7").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function clothing_d8() {
  document.getElementById("myDropdown-8").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
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


let append_shoes = () =>{
  let item = shoes
  append(item,women_cat)
  append(item,new_cat)
  append(item,men_cat)
  append(item,kids_cat)
  append(item,dept_cat)
  append(item,brand_cat)
  append(item,sale_cat)
  append(item,clothing_cat)
}

let append_clothing = ()=>{
  let item = clothing
  append(item,women_cat)
  append(item,new_cat)
  append(item,men_cat)
  append(item,kids_cat)
  append(item,dept_cat)
  append(item,brand_cat)
  append(item,sale_cat)
  append(item,clothing_cat)
}

let append_acc = ()=>{
  let item = accessories
  append(item,women_cat)
  append(item,new_cat)
  append(item,men_cat)
  append(item,kids_cat)
  append(item,dept_cat)
  append(item,brand_cat)
  append(item,sale_cat)
  append(item,clothing_cat)
}

let append_gifts = ()=>{
  let item = gift_cards
  append(item,women_cat)
  append(item,new_cat)
  append(item,men_cat)
  append(item,kids_cat)
  append(item,dept_cat)
  append(item,brand_cat)
  append(item,sale_cat)
  append(item,clothing_cat)
}

let append_featured = ()=>{
  let item = featured
  append(item,women_cat)
  append(item,new_cat)
  append(item,men_cat)
  append(item,kids_cat)
  append(item,dept_cat)
  append(item,brand_cat)
  append(item,sale_cat)
  append(item,clothing_cat)
}

let append = (item,cont_item) =>{
  let cont = document.getElementById(`${cont_item}`);
  

  let div = document.createElement("div");
  // div.setAttribute("class","shoes")
  let arr = ["https://course.masaischool.com/assignments","https://www.zappos.com/?tgt=/zap&lt=true"]

  for(let i=0;i<=9;i++){
    let a = document.createElement("a");
    a.innerHTML = item[i];
    a.href =arr[i]
    div.append(a);
    console.log(item[i]);
  }

  cont.append(div)
}

append_shoes()
append_clothing()
append_acc()
append_gifts()
append_featured()

// export {new_d1,women_d2,men_d3,kids_d4,dept_d5,brands_d6,sale_d7,clothing_d8}
