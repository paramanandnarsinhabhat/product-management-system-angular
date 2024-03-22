import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})

export class ProductEditComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;


  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder here
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize productForm within the constructor using formBuilder
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      price: [null, Validators.required]
    });
    this.productId = 0; 

  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails(this.productId);
    });


  }

  loadProductDetails(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  product: Product = {
    id: 1, // Example ID
    name: 'Updated Product Name',
    description: 'Updated Description',
    price: 99.99,
    category: 'Updated Category'
  };

  updateProduct(): void {
    if (typeof this.product.id === 'number') {
      this.productService.updateProduct(this.product.id, this.product).subscribe({
        next: (response) => {
          console.log('Product updated successfully', response);
          // Handle successful update
        },
        error: (error) => {
          console.error('Error updating product', error);
          // Handle error
        }
      });
    } else {
      console.error('Product ID is undefined');
      // Handle the undefined ID case, such as showing an error message
    }
  }
  
  

  
}
