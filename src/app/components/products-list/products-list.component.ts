import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  private subscriptions = new Subscription();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts(): void {
    this.subscriptions.add(
      this.productService.getProducts().subscribe({
        next: (data: Product[]) => {
          this.products = data;
        },
        error: (error) => {
          console.error('Error fetching products', error);
          // Implement your error handling logic here
        },
        complete: () => console.log('Product loading completed')
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
