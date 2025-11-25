import { Injectable } from '@angular/core';
import { Part } from '../models/part';

@Injectable({
  providedIn: 'root' 
})
export class CartService {
  private items: Part[] = [];

  // Метод додати товар
  addToCart(product: Part) {
    this.items.push(product);
  }

  // Метод отримати всі товари (для сторінки кошика)
  getItems() {
    return this.items;
  }

  // Метод очистити кошик (після покупки)
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Метод порахувати загальну суму
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}