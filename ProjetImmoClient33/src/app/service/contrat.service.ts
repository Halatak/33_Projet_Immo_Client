import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from '../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/contrat/';

  // Constructeurs
  constructor(private http: HttpClient) { }


  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllContrat() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<Contrat> {
    return this.http.get<Contrat>(`${this.url}recherche?pId=${id}`);
  }

  // Ajout
  public ajoutContrat(contIn: Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(`${this.url}ajout`, contIn);
  }

  // Modification
  public modifContrat(contIn: Contrat): Observable<Contrat> {
    return this.http.put<Contrat>(`${this.url}modif`, contIn);
  }

  // Suppression
  public supprContrat(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
