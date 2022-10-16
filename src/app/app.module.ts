import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './productsCopmponents/product-list/product-list.component';
import { ProductItemComponent } from './productsCopmponents/product-list/product-item/product-item.component';
import { ProductFilterComponent } from './productsCopmponents/product-filter/product-filter.component';
import { ProductFormComponent } from './productsCopmponents/product-form/product-form.component';
import {FormsModule} from "@angular/forms";
import { AlbumDetailsComponent } from './AlbumComponents/album-list/album-details/album-details.component';
import { AlbumListComponent } from './AlbumComponents/album-list/album-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFilterComponent,
    ProductFormComponent,
    AlbumDetailsComponent,
    AlbumListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
