import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // TODO: Update this URL with actual URL
  
  private apiUrl = 'http://your-backend-api-url/api/products'; // Replace with actual backend API URL

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
  
  getProductsByCategory(category: string): Observable<Product[]> {
    const categoryUrl = `${this.apiUrl}/category/${encodeURIComponent(category)}`;
    return this.http.get<Product[]>(categoryUrl);
  }
  
  getSortedProducts(sortBy: string, sortOrder: 'asc' | 'desc'): Observable<Product[]> {
    // Set HTTP Params
    let params = new HttpParams();
    params = params.append('sortBy', sortBy);
    params = params.append('sortOrder', sortOrder);

    return this.http.get<Product[]>(`${this.apiUrl}/sort`, { params });
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAllProducts(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}`);
  }
  

  
  



}
