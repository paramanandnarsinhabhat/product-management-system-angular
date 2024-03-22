import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    // Initialize the form group with form controls and validators
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  // Method to call the addProduct service method
  addProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;

      this.productService.addProduct(newProduct).subscribe(
        (product: Product) => {
          console.log('Product added:', product);
          // Handle the response, redirect or clear form
        },
        error => {
          // Handle error response
          console.error('Error adding product:', error);
        }
      );
    }
}
}
