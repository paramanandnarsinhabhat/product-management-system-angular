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

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Method to get a single product by its ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProductsByName(name: string): Observable<Product[]> {
    const searchUrl = `${this.apiUrl}/search?name=${encodeURIComponent(name)}`;
    return this.http.get<Product[]>(searchUrl);
  }

  getTotalCount(): Observable<number> {
    const totalCountUrl = `${this.apiUrl}/total-count`;
    return this.http.get<number>(totalCountUrl);
  }
  
  




}
