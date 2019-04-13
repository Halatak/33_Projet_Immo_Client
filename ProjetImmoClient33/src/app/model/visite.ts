import { Time } from '@angular/common';
import { Client } from './client';
import { Conseiller } from './conseiller';
import { BienImmobilier } from './bien-immobilier';

export class Visite {

  // Attributs de la classe
  private _id: number;
  private _dateVisite: Date;
  private _heureVisite: Time;

  // Associations
  private _client: Client;
  private _conseiller: Conseiller;
  private _bienImmobilier: BienImmobilier;

  // Constructeurs
  constructor() { }

  // Getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get dateVisite(): Date {
    return this._dateVisite;
  }
  set dateVisite(newDateVisite: Date) {
    this._dateVisite = newDateVisite;
  }

  get heureVisite(): Time {
    return this._heureVisite;
  }
  set heureVisite(newHeureVisite: Time) {
    this._heureVisite = newHeureVisite;
  }

  get client(): Client {
    return this._client;
  }
  set client(newClient: Client) {
    this._client = newClient;
  }

  get conseiller(): Conseiller {
    return this._conseiller;
  }
  set conseiller(newConseiller: Conseiller) {
    this._conseiller = newConseiller;
  }

  get bienImmobilier(): BienImmobilier {
    return this._bienImmobilier;
  }
  set bienImmobilier(newBienImmobilier: BienImmobilier) {
    this._bienImmobilier = newBienImmobilier;
  }
}
