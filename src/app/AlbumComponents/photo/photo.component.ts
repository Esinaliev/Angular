import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Photo} from "../../../entity/moduls";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AlbumService) { }

  ngOnInit(): void {
    this.getComments();
  }

  photos: Photo[] | undefined;

  getComments() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.parent?.snapshot.paramMap;
      // использовать parent
      const id = Number(routeParams?.get("id"));
      this.service.getAlbumPhotos(id).subscribe((photos) => {
        this.photos = photos;
        console.log(this.photos);
      })
    });
  }
}
