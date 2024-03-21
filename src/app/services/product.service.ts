import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO: Update this URL with actual URL
  private apiUrl = 'http://localhost:5000/api/products';  // Update with your actual API URL


  constructor() { }
}
