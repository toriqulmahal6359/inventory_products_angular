import { Injectable } from '@angular/core';

import { Product } from './model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://localhost/inventory_products/resource"; 

  constructor(private httpclient:HttpClient) {}

    readProducts(): Observable<Product[]>{
      return this.httpclient.get<Product[]>(`${this.PHP_API_SERVER}/index.php`);
    }
    createProducts(product:Product): Observable<Product[]>{
      return this.httpclient.post<Product[]>(`${this.PHP_API_SERVER}/create_product.php`, product);
    }
    updateProducts(product:Product): Observable<Product[]>{
      return this.httpclient.put<Product[]>(`${this.PHP_API_SERVER}/update_product.php`, product);
    }
    deleteProduct(id:number){
      return this.httpclient.delete<Product>(`${this.PHP_API_SERVER}/delete_product.php/id?=${id}`);
    }
}
