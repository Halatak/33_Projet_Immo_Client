import { Proprietaire } from './proprietaire';
import { Client } from './client';

export class Contrat {

  // Attributs de la classe
  public id: number;
  public prixAchat: number;
  public dateAchat: Date;

  // Associations
  public proprietaire: Proprietaire;
  public client: Client;

  // Constructeurs
  constructor(){}

}
