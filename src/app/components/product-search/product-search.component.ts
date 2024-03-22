import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  imports: [],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  products: Product[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductService) {}

  searchProducts(): void {
    if (this.searchQuery) {
      this.productService.searchProductsByName(this.searchQuery).subscribe(
        (data: Product[]) => {
          this.products = data;
        },
        error => {
          // Handle error here, e.g., showing an error message
          console.error('Error occurred while searching for products', error);
        }
      );
    }

}
}
