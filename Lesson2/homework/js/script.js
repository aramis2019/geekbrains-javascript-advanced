'use strict';

class GoodsList {
    constructor(container='.goods-list') {
        this.container = container;
        this.goods = [];
        this._fetchGoods();
        this.render();
        console.log(this.totalPrice());
    }
    _fetchGoods() {
        this.goods = [
            { id:1, title: 'Shirt', price: 150, img:"https://via.placeholder.com/200x150" },
            { id:2, title: 'Socks', price: 50, img:"https://via.placeholder.com/200x150" },
            { id:3, title: 'Jacket', price: 350, img:"https://via.placeholder.com/200x150" },
            { id:4, title: 'Shoes', price: 250, img:"https://via.placeholder.com/200x150" }
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for(let product of this.goods){
            const goodItem = new GoodsItem(product);
            let renderedItem = goodItem.render();
            block.insertAdjacentHTML('beforeend', renderedItem);
        }
    }

    totalPrice(){
        let result = 0;
        this.goods.forEach(c=> result += c.price);
        return result;
    }
}

class GoodsItem {
    constructor(product , img ="https://via.placeholder.com/200x150") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Buy</button>
                </div>`;
    }
}

const list = new GoodsList();
