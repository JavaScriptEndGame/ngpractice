import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'app/shared/validation.services';
import { ProductService } from 'app/products/product.service';


export interface Product {
    name: string,
    description: string,
    defaultLocale: string
}

@Component({
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html'
})
export class AddProductComponent implements OnInit {

  loading = false;
  productForm: FormGroup;
  productObj: Product;

  constructor(private fb: FormBuilder, public productService: ProductService) {
  }

  createForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
      defaultLocale: ['', [Validators.required, ValidationService.localeValidator]]
    });
  }

  prepareSaveSite(): Product {
    const formModel = this.productForm.value;
    const saveProduct: any = {
      name: formModel.name as string,
      description: formModel.description as string,
      defaultLocale: formModel.defaultLocale as string
    };
    return saveProduct;
  }

  ngOnInit(): void {
    this.createForm();
  }

  addProduct(): void {
    this.loading = true;
    this.productObj = this.prepareSaveSite();
    this.productService.addProduct(this.productObj);
    }

}
