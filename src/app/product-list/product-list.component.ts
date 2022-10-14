import {Component} from '@angular/core';
import {Product, products} from "../../entity/product";
import {Category} from "../../entity/category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products

  onSelected(id:string){
    console.log(id)
    if(id != Category.nothing)
      this.products = products.filter(x=> x.category == id)
    else
      this.products = products
  }
  addProduct(pr:Product) {
    this.products.push(pr);
  }
}
