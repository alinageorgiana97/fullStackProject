import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {WineService} from './services/wine.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  // {path: 'checkout', component: CheckoutComponent},
  // {path: 'cart-details', component: CartDetailsComponent},
  // {path: 'products/:id', component: ProductDetailsComponent},
  // {path: 'search/:keyword', component: ProductListComponent},
  // {path: 'category/:id', component: ProductListComponent},
  // {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
