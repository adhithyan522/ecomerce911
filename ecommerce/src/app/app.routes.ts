import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Details } from './details/details';
export const routes: Routes = [
    {path:'', component: Home},
    // {path:'products/contact', redirectTo: 'contact', pathMatch: 'full'},
    {path:'products', component: Product},
    {path: 'product/:id', component: Details},
    {path:'contact', component: Contact},
];
