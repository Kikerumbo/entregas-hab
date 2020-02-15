'use strict';

//Datos de ejemplo para los items
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class CartItem {
  item = {};
  units = 1;

  constructor(item) {
    this.item = item;
  }

  increaseItemUnits(item) {
    item.units++;
    console.log('Unit added to item');
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static createItemList(arrayNames, arrayPrices) {
    const itemsList = [];
    for (let i = 0; i < arrayNames.length; i++) {
      itemsList.push(new Item(arrayNames[i], arrayPrices[i]));
    }
    return itemsList;
  }
}

class User {
  name = '';
  #cart = [];
  constructor(name) {
    this.name = name;
  }
  addToCart(item) {
    for (let i = 0; i < this.#cart.length; i++) {
      if (this.#cart[i].item.name === item.name) {
        this.#cart[i].units++;
        return;
      }
    }
    this.#cart.push(new CartItem(item));
  }
  pay() {
    return this.#cart;
  }
}

class Shop {
  inventory = [];
  constructor(inventory) {
    this.inventory = inventory;
  }
  static checkOut(user) {
    const userCart = user.pay();
    let totalAmount = [];
    console.log(userCart);
    for (let i = 0; i < userCart.length; i++) {
      totalAmount[i] = userCart[i].item.price * userCart[i].units;
      console.log(
        `Item:  ${userCart[i].item.name} - Price: ${userCart[i].item.price} - Quantity: ${userCart[i].units} - TotalPrice: ${totalAmount[i]}`
      );
    }
    console.log(
      `Total: `,
      totalAmount.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
  }
}

const myCamisas = new Item(itemNames[0], itemPrices[0]);
const myPantalones = new Item(itemNames[1], itemPrices[1]);
const myCalcetines = new Item(itemNames[2], itemPrices[2]);

const myUser = new User('Paco');

myUser.addToCart(myCamisas);
myUser.addToCart(myPantalones);
myUser.addToCart(myCalcetines);
myUser.addToCart(myCamisas);
myUser.addToCart(myPantalones);
myUser.addToCart(myCalcetines);
myUser.addToCart(myCamisas);
myUser.addToCart(myPantalones);
myUser.addToCart(myCalcetines);

console.log(myUser);

Shop.checkOut(myUser);
