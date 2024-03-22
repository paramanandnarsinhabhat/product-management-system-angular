import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
// Import your components
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
// Import your services
import { ProductService } from './services/product.service';
import { AllProductsDeleteComponent } from './components/all-products-delete/all-products-delete.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductsSortComponent } from './components/product-sort/product-sort.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductsTotalCountComponent } from './components/products-total-count/products-total-count.component';
import { SingleProductDeleteComponent } from './components/single-product-delete/single-product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    // Declare your components here
    AllProductsDeleteComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductSearchComponent,
    ProductsSortComponent,
    ProductsByCategoryComponent,
    ProductsListComponent,
    ProductsTotalCountComponent,
    SingleProductDeleteComponent
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // Add your services here
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
