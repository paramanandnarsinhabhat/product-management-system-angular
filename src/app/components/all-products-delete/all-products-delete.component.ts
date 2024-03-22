import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-all-products-delete',
  templateUrl: './all-products-delete.component.html',
  styleUrl: './all-products-delete.component.scss'
})

export class AllProductsDeleteComponent {
  constructor(private productService: ProductService) {}

  deleteAllProducts(): void {
    this.productService.deleteAllProducts().subscribe({
      next: () => {
        console.log('All products deleted successfully');
        // Handle successful deletion, such as refreshing the list or showing a message
      },
      error: (error) => {
        console.error('Error deleting all products', error);
        // Handle errors, such as showing an error message to the user
      }
    });
  }
}
