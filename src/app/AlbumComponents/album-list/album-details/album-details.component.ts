import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../../../entity/moduls";
import {AlbumService} from "../../album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AlbumService) { }

  ngOnInit(): void {
    this.getPost();
  }

  loaded: boolean | undefined;
  album: Album | undefined;

  getPost() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get("id"));
      this.loaded = false;
      this.service.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })
  }

  updatePost() {
    this.loaded = false;
    this.service.updateAlbum(this.album as Album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }
}
