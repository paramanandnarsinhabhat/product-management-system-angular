import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products-total-count',
  imports: [],
  templateUrl: './products-total-count.component.html',
  styleUrl: './products-total-count.component.scss'
})
export class ProductsTotalCountComponent implements OnInit  {

  totalCount: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getTotalCount().subscribe({
      next: (count: number) => {
        this.totalCount = count;
      },
      error: (error) => {
        console.error('Error fetching total count of products', error);
        // Implement your error handling logic here
      },
      complete: () => console.log('Fetch total count completed') // Optional
    });
  }
  
}
