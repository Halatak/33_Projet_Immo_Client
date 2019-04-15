import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../model/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url = "http://localhost:8080/33_Projet_Immo_WS/rest/photo/";

  constructor(private http: HttpClient) { }

    // Methode pour ajouter un bien Achat
    public ajoutPhoto(phIn: Photo): Observable<Photo> {
      return this.http.post<Photo>(`${this.url}ajout`, phIn);
    }
  
}
