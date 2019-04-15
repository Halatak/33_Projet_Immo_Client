import { Time } from '@angular/common';
import { Client } from './client';
import { Conseiller } from './conseiller';
import { BienImmobilier } from './bien-immobilier';

export class Visite {

  // Attributs de la classe
  public id: number;
  public dateVisite: Date;
  public heureVisite: Time;

  // Associations
  public client: Client;
  public conseiller: Conseiller;
  public bienImmobilier: BienImmobilier;

  // Constructeurs
  constructor() { }

}
