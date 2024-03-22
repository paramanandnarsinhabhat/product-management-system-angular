import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your components

import { AllProductsDeleteComponent } from './components/all-products-delete/all-products-delete.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductsSortComponent } from './components/product-sort/product-sort.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsTotalCountComponent } from './components/products-total-count/products-total-count.component';
import { SingleProductDeleteComponent } from './components/single-product-delete/single-product-delete.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
  { path: 'products/:id/delete', component: SingleProductDeleteComponent },
  { path: 'search', component: ProductSearchComponent },
  { path: 'sort', component: ProductsSortComponent },
  { path: 'category/:category', component: ProductsByCategoryComponent },
  { path: 'total-count', component: ProductsTotalCountComponent },
  { path: 'delete-all', component: AllProductsDeleteComponent },

  // Wildcard route for a 404 page not found
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
