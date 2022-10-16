import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../../entity/moduls";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Output() selected = new EventEmitter()

  categories = Object.values(Category)

  constructor() { }

  ngOnInit(): void {
    console.log(this.categories.length)
  }

  onClick(id:string){
    this.selected.emit(id)
  }
}
