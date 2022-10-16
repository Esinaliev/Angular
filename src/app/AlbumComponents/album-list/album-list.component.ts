import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../album.service";
import {Album} from "../../../entity/moduls";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private service: AlbumService) { }

  albums: Album[] | undefined;
  loaded: boolean | undefined;
  newAlbum: string | undefined;

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.service.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const album = {id:Date.now(), userId:Date.now()-1, title: this.newAlbum};
    console.log(album);
    this.loaded = false;
    this.service.addAlbum(album as Album).subscribe((value) => {
      this.albums?.unshift(value);
      this.newAlbum = "";
      this.loaded = true;
    })
  }

  deletePost(id: number) {
    this.albums = this.albums?.filter(x => x.id !== id);
    this.service.deleteAlbum(id).subscribe(() => {
      console.log("Post deleted", id);
    });
  }

  checkStatus() {
    this.service.checkStatus();
  }


}
