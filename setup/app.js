const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steaks",
    category: "vegan",
    price: 36.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "indian meal",
    category: "dinner",
    price: 26.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//   generating multiple html for different menu items
function x(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="single-item">

          <img src=${item.img} class="item-photo" alt="menu-item">
          <div class="item-info">
            <div class="item-title">
              <h4 class="item-name">${item.title}</h4>
              <span class="item-price">$${item.price}</span>
            </div>
            <p class="item-discription">
              ${item.desc}
            </p>

          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// ================ loading dynamically all item==================

const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  x(menu);
  //      generate array of all different catogories
  const allcatogory = menu.reduce(
    function (accu, curr) {
      if (!accu.includes(curr.category)) {
        accu.push(curr.category);
      }
      return accu;
    },
    ["all"]
  );
  // ==========Dynamically loading menu buttons ===================

  const filterButtons = document.querySelector(".filter-buttons");
  let displayMenuButtons = allcatogory.map(function (x) {
    return `<button type="button" data-id=${x} class="btn ${x}-btn">${x}</button>`;
  });

  displayMenuButtons = displayMenuButtons.join(" ");
  filterButtons.innerHTML = displayMenuButtons;
  // end of loading initial page

  //  ========  find out the clicked button=======================

  const buttons = document.querySelectorAll(".btn");
  console.log(buttons);
  buttons.forEach(function (each) {
    each.addEventListener("click", function (e) {
      const clickedButton = e.currentTarget.dataset.id;
      console.log(clickedButton);
      // ----- get clicked category items ------------
      const clickedCategory = menu.filter(function (item) {
        if (item.category === clickedButton) {
          return item.category;
        }
      });

      // --------display clicked category-----------
      if (clickedButton === "all") {
        x(menu);
      } else {
        x(clickedCategory);
      }
    });
  });
});

  
  
  
  
  
  
  
  // // ===========================================================
  // let breakfast = menu.filter(function (item) {
  //   return item.category === "breakfast";
  // });
  // //  get element breakfast button and listening for click
  // const breakfastBtn = document.querySelector(".breakfast-btn");
  // console.log(breakfast);
  // breakfastBtn.addEventListener("click", function () {
  //   x(breakfast);
  // });

  // // ========= all ===================

  // // filtering menu items to new breakfast items

  // //  get element breakfast button and listening for click
  // const allBtn = document.querySelector(".all-btn");
  // console.log(menu);
  // allBtn.addEventListener("click", function () {
  //   x(menu);
  // });
  
  // // ========= lunch ===================

  // // filtering menu items to new lunch items
  // let lunch = menu.filter(function (item) {
  //   return item.category === "lunch";
  // });
  // //  get element breakfast button and listening for click
  // const lunchBtn = document.querySelector(".lunch-btn");
  // console.log(lunch);
  // lunchBtn.addEventListener("click", function () {
  //   x(lunch);
  // });
  // // ========= shakes ===================

  // // filtering menu items to new lunch items
  // let shakes = menu.filter(function (item) {
  //   return item.category === "shakes";
  // });
  // //  get element shakes button and listening for click
  // const shakesBtn = document.querySelector(".shakes-btn");
  // console.log(shakes);
  // shakesBtn.addEventListener("click", function () {
  //   x(shakes);
  // });








