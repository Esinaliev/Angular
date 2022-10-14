import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input, Output} from "@angular/core";
import {Product} from "../../../entity/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined

  constructor() { }

  ngOnInit(): void {
  }
}
