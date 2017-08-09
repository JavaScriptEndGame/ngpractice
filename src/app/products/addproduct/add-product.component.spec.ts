import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { TestBed, async, inject, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductService } from 'app/products/product.service';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationService } from 'app/shared/validation.services';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { Product, AddProductComponent } from 'app/products/addproduct/add-product.component';

const validProduct = {
  name: 'Product1',
  description: 'Product Description',
  defaultLocale: 'en',
};

const invalidProduct = {
  name: 'product2',
  description: 'Product Description',
  defaultLocale: 'enEndsad',
};

class MockProductService {
  products: Product[] = [{
    name: 'Test', defaultLocale: 'en', description: 'Test Description'
  }, {
    name: 'Test 1', defaultLocale: 'en', description: 'Test Description 3'
  }, {
    name: 'Test 2', defaultLocale: 'en', description: 'Test Description 2'
  }];

  addProduct(item: Product): Observable<any> {
    this.products.push(item);
    return Observable.of(item);
  }

  getAll(): Product[] {
     return this.products;
   }

}

describe('Add Product Component', () => {

   let fixture: ComponentFixture<AddProductComponent>;
   let component: AddProductComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddProductComponent
      ],
      imports: [FormsModule, ReactiveFormsModule ],
      providers: [
        FormBuilder
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .overrideComponent(AddProductComponent, {
        set: {
          providers: [
            { provide: ProductService, useClass: MockProductService }
          ]
        }
      }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddProductComponent);
        component = fixture.componentInstance;
      });
  }));

  function updateProduct(name, description, defaultLocale) {
    component.productForm.controls['name'].setValue(name);
    component.productForm.controls['description'].setValue(description);
    component.productForm.controls['defaultLocale'].setValue(defaultLocale);
  }

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('form value should update from form changes', fakeAsync(() => {
    fixture.componentInstance.ngOnInit();
    updateProduct(validProduct.name, validProduct.description, validProduct.defaultLocale);
    expect(component.productForm.value).toEqual(validProduct);
  }));

  it('isValid should be false when form is invalid', fakeAsync(() => {
    fixture.componentInstance.ngOnInit();
    updateProduct(invalidProduct.name, invalidProduct.description, invalidProduct.defaultLocale);
    expect(component.productForm.valid).toBeFalsy();
  }));

  it('should add product on submit', fakeAsync(() => {
    fixture.componentInstance.ngOnInit();
    updateProduct(validProduct.name, validProduct.description, validProduct.defaultLocale);
    component.addProduct();
    expect(component.productService.getAll().length).toEqual(4);
  }));
});

