import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-single-product-delete',
  templateUrl: './single-product-delete.component.html',
  styleUrl: './single-product-delete.component.scss'
})

export class SingleProductDeleteComponent {
  productId!: number; // Initialize this with the ID of the product to delete

  constructor(private productService: ProductService) {}

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        // Handle successful deletion, e.g., refreshing the list or showing a message
      },
      error: (error) => {
        console.error('Error deleting product', error);
        // Handle errors, such as showing an error message to the user
      }
    });
  }
}
