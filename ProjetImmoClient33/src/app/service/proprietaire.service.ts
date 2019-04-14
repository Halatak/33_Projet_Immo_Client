import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from '../model/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/proprietaire/';

  // Constructeurs
  constructor(private http: HttpClient) { }

  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllProprietaire() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<Proprietaire> {
    return this.http.get<Proprietaire>(`${this.url}recherche?pId=${id}`);
  }

  // Ajout
  public ajoutProprietaire(pIn: Proprietaire): Observable<Proprietaire> {
    return this.http.post<Proprietaire>(`${this.url}ajout`, pIn);
  }

  // Modification
  public modifProprietaire(pIn: Proprietaire): Observable<Proprietaire> {
    return this.http.put<Proprietaire>(`${this.url}modif`, pIn);
  }

  // Suppression
  public supprProprietaire(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
