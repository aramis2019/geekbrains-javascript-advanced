'use strict';

const goods = [
    { id:1, title: 'Shirt', price: 150, img:"https://via.placeholder.com/200x150" },
    { id:2, title: 'Socks', price: 50, img:"https://via.placeholder.com/200x150" },
    { id:3, title: 'Jacket', price: 350, img:"https://via.placeholder.com/200x150" },
    { id:4, title: 'Shoes', price: 250, img:"https://via.placeholder.com/200x150" },
];

const renderGoodsItem = (item) => {
    return `<div class="goods-item">
            <img src="${item.img}">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button class="buy-btn">Buy</button>
            </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');

    console.log(goodsList);
    document.querySelector('.goods-list').innerHTML = goodsList;
}



renderGoodsList(goods);