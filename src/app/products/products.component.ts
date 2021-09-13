import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Product } from '../model/product';

@Component({
  selector: 'router-outlet',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  selectedProduct: Product = { id:null!, category_id:null!, name:null!, price:null!, brand:null!, added_on:null!, status: null!, category:null! };

  constructor(private api_service:ApiService) { 
    this.api_service.readProducts().subscribe((products:Product[])=>{
        this.products = products;
    })
  }

  ngOnInit(): void {
  }

  create_or_update_product(form:any){
    form.value.id = this.selectedProduct.id;
    form.value.name = this.selectedProduct.name;
    form.value.price = this.selectedProduct.price;
    form.value.brand = this.selectedProduct.brand;
    form.value.added_on = this.selectedProduct.added_on;

    if(this.selectedProduct && this.selectedProduct.id){
      this.api_service.updateProducts(form.value).subscribe((product:Product[])=>{
        console.log("Product Updated", product);
        this.api_service.readProducts().subscribe((products:Product[])=>{
          this.products = products;
        });
      });
    }else{
      this.api_service.createProducts(form.value).subscribe((product:Product[])=>{
        console.log("Product Created", product);
        this.api_service.readProducts().subscribe((products:Product[])=>{
          this.products = products;
        })
      });
    }
  }

  select_product(product:Product){
    this.selectedProduct = product;
  }

  delete_product(id:any){
    this.api_service.deleteProduct(id).subscribe((product:Product)=>{
      console.log("Product Deleted", product);
      this.api_service.readProducts().subscribe((products:Product[])=>{
        this.products = products;
      })
    })
  }

}
