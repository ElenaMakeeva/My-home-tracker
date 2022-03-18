const { Category_store } = require("./db/models");

const categoryBaraholka=[
  {
    title: 'Без категории',
    link: 'https://www.jde.ru/img/article/podgotovka-knig-k-perevozke_02.jpg'
  },
  {
    title: 'Мебель',
    link: 'https://mebelpokarmanu.com/upload/iblock/70e/70eb15673ef49e573fddcdd0d54356de.jpg'
  },
  {
    title: 'Игрушки',
    link: 'https://www.pngkit.com/png/detail/385-3856632_ted-laying-down-ted-love.png'
  },
  {
    title: 'Техника',
    link: 'https://st2.depositphotos.com/1001877/8712/i/600/depositphotos_87121732-stock-photo-delivery-or-moving-concept-home.jpg'
  },
  {

    title: 'Одежда',
    link: 'https://st.depositphotos.com/1177973/3041/i/600/depositphotos_30413835-stock-photo-beautiful-girl-with-lots-clothes.jpg'
  },
  {

    title: 'Прочее',
    link: 'https://st2.depositphotos.com/1258191/11997/i/600/depositphotos_119973774-stock-photo-desktop-with-piles-of-paperwork.jpg'
  },
]


async function addCategoryBarah(obj) {
  await Category_store.create({
    title: obj.title,
    link: obj.link,
  })
}

categoryBaraholka.map((el) => {
  addCategoryBarah(el)
});