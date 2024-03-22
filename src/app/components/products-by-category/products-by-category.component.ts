import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})

export class ProductsByCategoryComponent implements OnInit {
  products: Product[] = [];
  category: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if (this.category) {
        this.loadProductsByCategory(this.category);
      }
    });
  }

  loadProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category).subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error) => {
        console.error(`Error occurred while fetching products for category ${category}`, error);
        // Handle the error state here, e.g., set products to an empty array or show an error message
      },
      complete: () => console.log('Completed fetching products for category')
    });
  }
  
  
}
