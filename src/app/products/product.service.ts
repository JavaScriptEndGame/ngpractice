import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from 'app/products/addproduct/add-product.component';


@Injectable()
export class ProductService {

    private products: Product[] = [];
    constructor(private _http: Http) {  }

    addProduct(product: any): void {
        this.products.push(product);
        console.log(this.products);
    }

    getAll(): Product[] {
        return this.products;
    }
}
