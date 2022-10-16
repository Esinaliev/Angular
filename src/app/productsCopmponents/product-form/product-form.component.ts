import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category, Product} from "../../../entity/moduls";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //id: number;
  //name: string;
  //price: number;
  //description: string;
  //category: Category;
  newProduct = {
    id: Date.now(),
    name: "",
    description: "",
    price: 0,
    category: Category.nothing,
  }

  addProduct(form: NgForm) {
    console.log(form);
    let pr:Product = {id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, category: this.newProduct.category}
    this.add.emit(pr);
  }

  onChange() {
    console.log(this.newProduct.name);
  }

  models = Object.values(Category);

}
