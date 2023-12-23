let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function () {
  menus.classList.add("active");
})

closeBtn.addEventListener("click", function () {
  menus.classList.remove("active");
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  }
});

// Dynamic image

const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const Category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (MenuItem) {
      if (MenuItem.Category == Category) {
        return MenuItem;
      }
    });
    if (Category == "All") {
      displayMenusItem(menu);
    }
    else {
      displayMenusItem(menuCategory);
    }
  })
});

const menu = [
  {
    id: 1,
    title: "checken and chewes",
    Category: "Starter",
    price: 100,
    img: "../img/foodLover1.jpg"
  },
  {
    id: 2,
    title: "checken and chewes",
    Category: "Drinks",
    price: 100,
    img: "../img/foodlover2.jpg"
  },
  {
    id: 3,
    title: "checken and chewes",
    Category: "Lunch",
    price: 100,
    img: "../img/foodLover3.jpg"
  },
  {
    id: 4,
    title: "checken and chewes",
    Category: "Dinner",
    price: 100,
    img: "../img/foodLover4.jpg"
  },
  {
    id: 5,
    title: "checken and chewes",
    Category: "Dinner",
    price: 100,
    img: "../img/foodLover5.jpg"
  },
  {
    id: 6,
    title: "checken and chewes",
    Category: "Lunch",
    price: 100,
    img: "../img/foodLover6.jpg"
  },
  {
    id: 7,
    title: "checken and chewes",
    Category: "Drinks",
    price: 100,
    img: "../img/foodLover7.jpg"
  },
  {
    id: 8,
    title: "checken and chewes",
    Category: "Starter",
    price: 100,
    img: "../img/foodLover8.jpg"
  },
  {
    id: 9,
    title: "checken and chewes",
    Category: "Dinner",
    price: 100,
    img: "../img/foodLover9.jpg"
  },
]

window.addEventListener("DOMContentLoaded", function () {
  displayMenusItem(menu);
});

function displayMenusItem(MenuItem) {
  let displayMenusItem = MenuItem.map(function (item) {
    return ` <div class="img_cards">
        <img src=${item.img} alt="" //height="200px" //width="250px" />
        <div class="price">${item.price}</div>
        <p>${item.title}</p>
    </div>`
  })
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}

//static counter start
const counterE1 = document.querySelectorAll('.num');

counterE1.forEach((counterE1)=>{
  counterE1.innerText="0";
  increamentCounter();

  function increamentCounter(){
    let currentNum = +counterE1.innerText;
    const dataCeil = +counterE1.getAttribute("data-ceil");
    const increament = dataCeil / 15;
    currentNum = Math.ceil(currentNum+increament);

    if(currentNum<dataCeil){
      counterE1.innerText=currentNum;
      setTimeout(increamentCounter, 70);
    }
    else{
      counterE1.innerHTML=dataCeil
    }
  }
});
//static counter end 

//sticky menu start
const nav = document.querySelector("header");

window.addEventListener("scroll", function(){

  if(this.document.documentElement.scrollTop> 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
});
//sticky menu close

