import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrl: './product-sort.component.scss'
})


  export class ProductsSortComponent implements OnInit {
    products: Product[] = [];
    sortOrder: 'asc' | 'desc' = 'asc'; 

    sortBy: string = 'name'; // default sorting field
   
  
    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.loadSortedProducts();
    }
  
    loadSortedProducts(): void {
      this.productService.getSortedProducts(this.sortBy, this.sortOrder).subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        error => {
          console.error('Error occurred while fetching sorted products', error);
          // Handle error here
        }
      );
    }

    onSortChange(sortBy: string, sortOrder: string): void {
      if (sortOrder !== 'asc' && sortOrder !== 'desc') {
        console.error(`Invalid sortOrder value: ${sortOrder}`);
        // Default to 'asc' or 'desc', or handle the error as needed
        sortOrder = 'asc'; // Defaulting to 'asc'
      }
      
      this.sortBy = sortBy;
      this.sortOrder = sortOrder as 'asc' | 'desc'; // Now TypeScript knows sortOrder is either 'asc' or 'desc'
      this.loadSortedProducts();
    }
    



}
