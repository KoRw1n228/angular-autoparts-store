import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part } from '../../models/part';
import { CartService } from '../../services/cart'; // <--- Імпорт сервісу

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() part!: Part;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.part);
    window.alert('Товар додано в кошик!'); 
  }
}