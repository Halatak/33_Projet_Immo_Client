import { Adresse } from './adresse';
import { Contrat } from './contrat';
import { BienImmobilier } from './bien-immobilier';

export class Proprietaire {

  // Attributs de la classe
  public id: number;
  public nom: string;
  public mail: string;
  public mdp: string;
  public telephonePro: string;
  public telephonePrive: string;

  // Associations
  public adresse: Adresse;
  public contrat: Contrat[];
  public bienImmobilier: BienImmobilier[];

  // constructeur
  constructor() {}

}
