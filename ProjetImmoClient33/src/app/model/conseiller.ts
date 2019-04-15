import { Visite } from './visite';

export class Conseiller {

  // Attributs de la classe
  public id: number;
  public mail: string;
  public mdp: string;

  // Associations
  public visite: Visite;

  // constructeur
  constructor() {}

}
