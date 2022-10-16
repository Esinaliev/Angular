import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./productsCopmponents/product-list/product-list.component";
import {AlbumListComponent} from "./AlbumComponents/album-list/album-list.component";
import {AlbumDetailsComponent} from "./AlbumComponents/album-list/album-details/album-details.component";

const routes: Routes = [
  {path: "products", component: ProductListComponent},
  {path: "album-list", component: AlbumListComponent},
  {path: "album/:id", component: AlbumDetailsComponent},
  {path: "**", redirectTo: "album-list",  pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
