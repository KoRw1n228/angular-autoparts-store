import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.spec';
import { Part } from '../../models/part';

@Component({
  selector: 'app-product-list',
  standalone: true,
  // Імпортуємо картку, щоб використовувати її в HTML
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Мокові дані (імітація бази даних)
  parts: Part[] = [
    {
      id: 1,
      name: 'Гальмівні колодки Bosch',
      description: 'Високоякісні керамічні колодки для седанів.',
      price: 1200,
      imageUrl: 'https://placehold.co/300x200?text=Brakes',
      inStock: true
    },
    {
      id: 2,
      name: 'Моторне масло 5W-40',
      description: 'Синтетичне масло, 4 літри.',
      price: 1800,
      imageUrl: 'https://placehold.co/300x200?text=Oil',
      inStock: true
    },
    {
      id: 3,
      name: 'Акумулятор Varta',
      description: '12V 60Ah, пусковий струм 540A.',
      price: 3500,
      imageUrl: 'https://placehold.co/300x200?text=Battery',
      inStock: false
    },
    {
      id: 4,
      name: 'Фільтр масляний Mann',
      description: 'Для двигунів об’ємом 1.6 - 2.0.',
      price: 350,
      imageUrl: 'https://placehold.co/300x200?text=Filter',
      inStock: true
    }
  ];
}
describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
