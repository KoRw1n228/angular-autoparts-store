import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // <--- Імпорт Роутера
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  // Прибираємо ProductListComponent з імпортів, додаємо RouterOutlet
  imports: [CommonModule, RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'autoparts-store';
}