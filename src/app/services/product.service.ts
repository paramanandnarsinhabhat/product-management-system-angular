import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // TODO: Update this URL with actual URL
  
  private apiUrl = 'http://your-backend-api-url/api/products'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
