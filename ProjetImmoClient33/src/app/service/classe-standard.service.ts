import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClasseStandard } from '../model/classe-standard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseStandardService {

  // Attributs de la classe
  url = 'http://localhost:8080/33_Projet_Immo_WS/rest/classeStandard/';


  // Constructeurs
  constructor(private http: HttpClient) { }

  /* ********************* */
  /* Méthodes métiers      */
  /* ******************** */

  // Get all
  public getAllClasseStandard() {
    return this.http.get(`${this.url}liste`);
  }

  // Get by ID
  public getById(id: number): Observable<ClasseStandard> {
    return this.http.get<ClasseStandard>(`${this.url}recherche?pId=${id}`);
  }

  // Get by Client
  public getByClient(id: number): Observable<ClasseStandard> {
    return this.http.get<ClasseStandard>(`${this.url}rechercheClient?pId=${id}`);
  }

  // Ajout
  public ajoutClasseStandard(csIn: ClasseStandard): Observable<ClasseStandard> {
    return this.http.post<ClasseStandard>(`${this.url}ajout`, csIn);
  }

  // Modification
  public modifClasseStandard(csIn: ClasseStandard): Observable<ClasseStandard> {
    return this.http.put<ClasseStandard>(`${this.url}modif`, csIn);
  }

  // Suppression
  public supprClasseStandard(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }
}
