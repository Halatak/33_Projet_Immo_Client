import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/client/';

  // Constructeurs
  constructor(private http: HttpClient) { }

  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllClient() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}recherche?pId=${id}`);
  }

  // Get by Classe Standard
  public getByClasse(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}rechercheClasse?pId=${id}`);
  }

  // Get by Bien Immobilier
  public getByBienImmobilier(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}rechercheBienImmo?pId=${id}`);
  }

  // Ajout
  public ajoutClient(clIn: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}ajout`, clIn);
  }

  // Modification
  public modifClient(clIn: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}modif`, clIn);
  }

  // Suppression
  public supprClient(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
