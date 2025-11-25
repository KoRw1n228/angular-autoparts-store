import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list'; 
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';
import { CartComponent } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, 
  { path: 'about', component: About },  
  { path: 'contacts', component: Contacts },
  { path: 'cart', component: CartComponent }, 
  { path: '**', redirectTo: '' } 
];