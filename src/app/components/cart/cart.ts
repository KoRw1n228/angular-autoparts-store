import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { Part } from '../../models/part';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html', 
  styleUrl: './cart.css'      
})
export class CartComponent implements OnInit {
  items: Part[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  checkout() {
    if (this.items.length === 0) return;
    window.alert('Дякуємо за замовлення! Менеджер звʼяжеться з вами.');
    this.items = this.cartService.clearCart();
    this.total = 0;
  }
}