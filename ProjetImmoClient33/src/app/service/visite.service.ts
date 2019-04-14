import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visite } from '../model/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/visite/';

  // Constructeurs
  constructor(private http: HttpClient) { }

  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllVisite() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<Visite> {
    return this.http.get<Visite>(`${this.url}recherche?pId=${id}`);
  }

  // Get by Conseiller
  public getByConseiller(id: number): Observable<Visite> {
    return this.http.get<Visite>(`${this.url}rechercheByConseiller?pId=${id}`);
  }

  // Get by Client
  public getByClient(id: number): Observable<Visite> {
    return this.http.get<Visite>(`${this.url}rechercheByClient?pId=${id}`);
  }

  // Get by Bien Immobilier
  public getByBienImmobilier(id: number): Observable<Visite> {
    return this.http.get<Visite>(`${this.url}rechercheByBienImmo?pId=${id}`);
  }

  // Ajout
  public ajoutVisite(vIn: Visite): Observable<Visite> {
    return this.http.post<Visite>(`${this.url}ajout`, vIn);
  }

  // Modification
  public modifVisite(vIn: Visite): Observable<Visite> {
    return this.http.put<Visite>(`${this.url}modif`, vIn);
  }

  // Suppression
  public supprVisite(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
