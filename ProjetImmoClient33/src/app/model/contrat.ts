import { Proprietaire } from './proprietaire';
import { Client } from './client';

export class Contrat {

  // Attributs de la classe
  private _id: number;
  private _prixAchat: number;
  private _dateAchat: Date;

  // Associations
  private _proprietaire: Proprietaire;
  private _client: Client;

  // Constructeurs
  constructor(){}

  // Getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get prixAchat(): number {
    return this._prixAchat;
  }
  set prixAchat(newPrixAchat: number) {
    this._prixAchat = newPrixAchat;
  }

  get dateAchat(): Date {
    return this._dateAchat;
  }
  set dateAchat(newDateAchat: Date) {
    this._dateAchat = newDateAchat;
  }

  get proprietaire(): Proprietaire {
    return this._proprietaire;
  }
  set proprietaire(newProprietaire: Proprietaire) {
    this._proprietaire = newProprietaire;
  }

  get client(): Client {
    return this._client;
  }
  set client(newClient: Client) {
    this._client = newClient;
  }
}
