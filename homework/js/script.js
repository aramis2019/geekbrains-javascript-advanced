'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class GoodsList {
    constructor(container='.goods-list') {
        this.container = container;
        this.goods = [];
        this._fetchGoods()
            .then(data => {
                this.goods = data;
                console.log(data);
                this.render();
            })
        //console.log(this.totalPrice());
    }

    _fetchGoods() {
        let result = fetch(`${API_URL}/catalogData.json`)
            .then(text => text.json())
            .catch(error=>{
                console.log(error)
            });

        return result;
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const goodItem = new GoodsItem(product);
            console.log(product)
            let renderedItem = goodItem.render();
            block.insertAdjacentHTML('beforeend', renderedItem);
        }
    }

    totalPrice(){
        let result = 0;
        this.goods.forEach(c=> result += c.price);

        // Вариант 2
        // for(let product of this.goods){
        //     result += product.price;
        // }
        // return result;
    }
}

class GoodsItem {
    constructor(product , img ="https://via.placeholder.com/200x150") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
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


class Basket{
    addGood(){
    }

    removeGood(){

    }

    changeGood(){

    }

    render(){

    }
}

class BasketItem{
    constructor(item) {
        this.title = item.product_name;
        this.price = item.price;
        this.id = item.id_product;
        this.quantity = item.quantity;
    }
    render() {
        return `<div class="basket-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <p>${this.quantity}</p>
                </div>`;
    }
}

class BasketList {
    constructor(container = '.basket-list') {
        this.container = container;
        this.basketList = [];
        this._fetchBasketList()
            .then(data => {
                this.basketList = data.contents;
                console.log(data.contents);
                this.render();
            })
    }

    _fetchBasketList() {
        let result = fetch(`${API_URL}/getBasket.json`)
            .then(text => text.json())
            .catch(error=>{
                console.log(error)
            });

        return result;
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.basketList){
            const basketItem = new BasketItem(product);
            console.log(product)
            let renderedItem = basketItem.render();
            block.insertAdjacentHTML('beforeend', renderedItem);
        }
    }


}

const goodsList = new GoodsList();
const basketList = new BasketList();