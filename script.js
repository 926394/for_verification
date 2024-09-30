const mainBurMenu = document.querySelector(".mainBurMenu");
// меню сайта
const iconMenu = document.querySelector(".iconMenu");
// иконка меню сайта
const iconXmenu = document.querySelector(".iconXmenu");
// иконка меню крестик

function hiddenMenu() {
  mainBurMenu.classList.toggle("hidden");
}
// функция скрывает или показывает меню сайта

iconMenu.addEventListener("click", hiddenMenu);
// по клику на иконку срабатывает функция
iconXmenu.addEventListener("click", hiddenMenu);

// ПОДКЛЮЧАЕМ ДАННЫЕ из data.js
const dataPro = JSON.parse(dataProducts);
const dataBase = document.querySelector(".section3PositionCard");

dataPro.forEach((data) => {
  // Основной див <div class="card"></div>
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  // Вложенный див <div class="list__img">
  const divList__imgJs = document.createElement("div");
  divList__imgJs.classList.add("list__img");

  const img3_1 = document.createElement("img");
  // img3_1.classList.add('img3_1');
  img3_1.src = data.url;
  img3_1.alt = "logoSection3.1";
  // Вложенный див <div class="magik__butt">
  const divMagik__buttJs = document.createElement("div");
  divMagik__buttJs.classList.add("magik__butt");
  //Вложенная в див кнопка magik
  const buttonCard__butt = document.createElement("button");
  buttonCard__butt.classList.add("card__butt");
  buttonCard__butt.textContent = "Add to Cart";
  // Вложенный Фон кнопки
  const imgButBackground = document.createElement("img");
  imgButBackground.src = data.src;
  imgButBackground.alt = "basket";
  // Див cardBloсk
  const divCardBloсk = document.createElement("div");
  divCardBloсk.classList.add("cardBloсk");
  // Див cardBloсk Заголовок h1
  const titleCardHead = document.createElement("h1");
  titleCardHead.textContent = data.name;
  // Див cardBloсk Параграф p
  const parCardP = document.createElement("p");
  parCardP.textContent = data.description;
  // Див cardBloсk Заголовок h2 price;
  const parCardPrice = document.createElement("h2");
  parCardPrice.textContent = ` $${data.price}.00`;

  dataBase.appendChild(divCard);
  divCard.appendChild(divList__imgJs);
  divList__imgJs.appendChild(img3_1);
  divMagik__buttJs.appendChild(buttonCard__butt);
  divList__imgJs.appendChild(divMagik__buttJs);
  buttonCard__butt.appendChild(imgButBackground);
  divCard.appendChild(divCardBloсk);
  divCardBloсk.appendChild(titleCardHead);
  divCardBloсk.appendChild(parCardP);
  divCardBloсk.appendChild(parCardPrice);

  });

  // КОРЗИНА ТОВАРОВ Cart Items

const container7S = document.querySelector(".container7S");
const sec7CardItems = document.querySelector(".sec7CardItems");
const buttonEls = document.querySelectorAll(".card__butt");
const sec7divDiv = document.querySelectorAll('.sec7divDiv');
const deleteIcon = document.querySelectorAll('.deleteIcon');
const item = document.querySelector('.item');


  buttonEls.forEach((element) => {
    element.addEventListener("click", function (e) {
      const sec7CardItems = document.createElement("div");
      sec7CardItems.classList.add("sec7CardItems");

      const sec7Head = document.createElement("div");
      sec7Head.classList.add("sec7Head");
      const sec7HeadTitle = document.createElement("h1");
      sec7HeadTitle.classList.add("sec7HeadTitle");
      sec7HeadTitle.textContent = "Cart Items";

      const sec7divDiv = document.createElement("div");
      sec7divDiv.classList.add("sec7divDiv");
      const item = document.createElement("div");
      item.classList.add("item");

      const imgProduct = document.createElement("img");
      imgProduct.src = "imgSection3/logoSection3.1.png";
      // ДИВ с инфой
      // const itemContent = document.createElement('div');
      // itemContent.classList.add('itemContent');

      // const itemHeading = document.createElement('h3');
      // itemHeading.classList.add('itemHeading');
      // itemHeading.textContent = dataPro.name;
      // const itemText = document.createElement('p');
      // itemText.textContent = dataPro.description;
      // Price
      // const parCardPrice = document.createElement("h2");
      // parCardPrice.textContent = ` $${dataPro.price}.00`;

      // ДИВ с кнопкой
      const deleteDiv = document.createElement('div');
      deleteDiv.classList.add('deleteDiv');
      const sec7deleteDiv = document.createElement('button');
      sec7deleteDiv.classList.add('sec7deleteButt');
      const deleteIcon = document.createElement("img");
      deleteIcon.classList.add('deleteIcon');
      deleteIcon.src = "imgSection3/Vector.svg";



      container7S.appendChild(sec7CardItems);

      sec7CardItems.appendChild(sec7Head);
      sec7Head.appendChild(sec7HeadTitle);

      sec7CardItems.appendChild(sec7divDiv);

      sec7divDiv.appendChild(item);
      // Картинка продукта
      item.appendChild(imgProduct);
      // DIV с инфой
      // item.appendChild(itemContent);
      // itemContent.appendChild(itemHeading);
      // itemContent.appendChild(itemText);
      // itemContent.appendChild(parCardPrice);

      item.appendChild(deleteDiv);
      deleteDiv.appendChild(sec7deleteDiv);
      sec7deleteDiv.appendChild(deleteIcon);

  });
});


const sec7deleteDiv = document.querySelectorAll('.sec7divDiv');
const sec7deleteDi = document.querySelector('.sec7deleteButt');
const itemContent = document.querySelectorAll('.item__content');

sec7deleteDiv.forEach((element) => {
  element.addEventListener("click", function (e) {
    item.remove(item);

  });
});




// КНОПКА УДАЛЕНИЯ
// sec7deleteDiv.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     item.remove(item);

//   });
// });

