'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class GoodsList {
    constructor(container='.goods-list') {
        this.container = container;
        this.goods = [];
        this.filteredGoods = [];
        this._fetchGoods()
            .then(data => {
                this.goods = data;
                this.filteredGoods = data;
                console.log(data);
                this.render();
            })
        //console.log(this.totalPrice());

        document.querySelector('.search-form').addEventListener('submit',e=>{
            e.preventDefault();
            let ss = document.querySelector('.search-field').value;
            this.filterGoods(ss)
        });

    }

    _fetchGoods() {
        let result = fetch(`${API_URL}/catalogData.json`)
            .then(text => text.json())
            .catch(error=>{
                console.log(error)
            });

        return result;
    }


    filterGoods(value) {
        console.log(`filterGoods ${value}`);
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        console.log(this.filteredGoods);
        this.render();
    }

    render() {
        const block = document.querySelector(this.container);
        let listHtml = '';
        for(let product of this.filteredGoods){
            const goodItem = new GoodsItem(product);
            console.log(product)
            //let renderedItem = goodItem.render();
            listHtml += goodItem.render();
            //block.insertAdjacentHTML('beforeend', renderedItem);
        }

        block.innerHTML = listHtml;
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


class BasketItem{

    render(product, img='https://via.placeholder.com/50x50') {
        return `<div class="car-item" data-id="${product.id_product}">
                    <div class="product-bio">
                        <img src="${img}" alt="some image">
                        <div class="product-desc">    
                            <p class="product-title">${product.product_name}</p>
                            <p class="product-single-price">${product.price}</p>
                            <p class="product-quantity">Qauntity: ${product.quantity}</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${product.quantity * product.price}</p>
                        <button class="del-btn" data-id="${product.id_product}">&times;</button>
                    </div>
                </div>`;
    }
}

class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                console.log(data.contents);
                this.render();
            })
    }

    _getBasketItem() {
        let result = fetch(`${API_URL}/getBasket.json`)
            .then(text => text.json())
            .catch(error=>{
                console.log(error)
            });

        return result;
    }

    _clickBasket(){
        document.querySelector(".btn-cart").addEventListener('click', ()=>{
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const basketItem = new BasketItem();
            console.log(product)
            let renderedItem = basketItem.render(product);
            block.insertAdjacentHTML('beforeend', renderedItem);
        }
    }


}

const goodsList = new GoodsList();
const basketList = new Basket();