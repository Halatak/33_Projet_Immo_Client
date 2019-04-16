import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BienImmobilier } from '../model/bien-immobilier';
import { Observable } from 'rxjs';
import { BienImmobilierAchat } from '../model/bien-immobilier-achat';
import { BienImmobilierLocation } from '../model/bien-immobilier-location';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierService {

  url = "http://localhost:8080/33_Projet_Immo_WS/rest/bienImmobilier/";

  constructor(private http: HttpClient) { }

  // La methode pour récupérer la liste
  public getAllBien() {
    return this.http.get(`${this.url}liste`);
  }

  
  // La methode pour récupérer la liste Location
  public getAllLocation() {
    return this.http.get(`${this.url}listeLocation`);
  }

  
  // La methode pour récupérer la liste Achat
  public getAllAchat() {
    return this.http.get(`${this.url}listeAchat`);
  }

  // La methode pour get by Id
  public getById(id: number): Observable<BienImmobilier> {
    return this.http.get<BienImmobilier>(`${this.url}recherche?pId=${id}`);
  }

  // La methode recherche par Classe standard
  public getByClasse(id: number): Observable<BienImmobilier> {
    return this.http.get<BienImmobilier>(`${this.url}rechercheClassStandard?pId=${id}`);
  }

  // La methode recherche par Propriétaire
  public getByProprietaire(id: number): Observable<BienImmobilier> {
    return this.http.get<BienImmobilier>(`${this.url}rechercheProprietaire?pId=${id}`);
  }

  // Methode pour ajouter un bien Achat
  public ajoutBienAchat(baIn: BienImmobilierAchat): Observable<BienImmobilierAchat> {
    return this.http.post<BienImmobilierAchat>(`${this.url}ajoutAchat`, baIn);
  }

  // Methode pour ajouter un bien Location
  public ajoutBienLocation(blIn: BienImmobilierLocation): Observable<BienImmobilierLocation> {
    return this.http.post<BienImmobilierLocation>(`${this.url}ajoutLocation`, blIn);
  }

  // Methode pour modifier un bien Achat
  public modifBienAchat(baIn: BienImmobilierAchat): Observable<BienImmobilierAchat> {
    return this.http.put<BienImmobilierAchat>(`${this.url}modifAchat`, baIn);
  }

  // Methode pour modifier un bien Location
  public modifBienLocation(blIn: BienImmobilierLocation): Observable<BienImmobilierLocation> {
    return this.http.put<BienImmobilierLocation>(`${this.url}modifLocation`, blIn);
  }

  // Methode pour supprimer un bien
  public supprBienImmobilier(id: number) {
    return this.http.delete(`${this.url}suppr/${id}`);
  }


}
