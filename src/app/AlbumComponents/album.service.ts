import { Injectable } from '@angular/core';
import {Album, Photo} from "../../entity/moduls";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) {
  }

  base_url = "https://jsonplaceholder.typicode.com/albums"

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.base_url}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.base_url}/${id}`);
  }

  addAlbum(album: Album): Observable<any> {
    return this.client.post<Album>(`${this.base_url}/`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.base_url}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.base_url}/${id}`)
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    let url = `${this.base_url}/${id}/photos`
    console.log(url);
    return this.client.get<Photo[]>(url);
  }

  checkStatus(): any {
    this.client.get(
      `${this.base_url}/`,
      {observe: 'response'}
    ).subscribe(response => {
      console.log(response.status)
    }, error => {
      console.log(error.status);
    });
  }
}
