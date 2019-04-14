import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conseiller } from '../model/conseiller';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/conseiller/';

  // Constructeurs
  constructor(private http: HttpClient) { }


  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllConseiller() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<Conseiller> {
    return this.http.get<Conseiller>(`${this.url}recherche?pId=${id}`);
  }

  // Ajout
  public ajoutConseiller(consIn: Conseiller): Observable<Conseiller> {
    return this.http.post<Conseiller>(`${this.url}ajout`, consIn);
  }

  // Modification
  public modifConseiller(consIn: Conseiller): Observable<Conseiller> {
    return this.http.put<Conseiller>(`${this.url}modif`, consIn);
  }

  // Suppression
  public supprConseiller(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
