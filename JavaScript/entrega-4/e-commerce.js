'use strict';

//Array of items with prices
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
  // This function adds "item" to the cart.
  addToCart(item) {
    for (let i = 0; i < this.#cart.length; i++) {
      if (this.#cart[i].item.name === item.name) {
        this.#cart[i].units++;
        return;
      }
    }
    this.#cart.push(new CartItem(item));
  }
  // This function adds a random item (camisa, pantalon, calcetines) "amount" number of times.
  randomAddToCart(amount){
    for(let i = 0; i < amount; i++) {
      let randomItem = Math.floor(Math.random()*3);
      this.addToCart(new Item (itemNames[randomItem], itemPrices[randomItem]));
    }

  }
  // This function sends the value of the private key "#cart#" so it can be used outside the object.
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

const myUser = new User('Paco');
myUser.randomAddToCart(7);
console.log(myUser);
Shop.checkOut(myUser);
