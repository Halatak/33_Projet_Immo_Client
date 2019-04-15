import { BienImmobilier } from './bien-immobilier';

export class BienImmobilierAchat extends BienImmobilier{

  // Attributs de la classe fille
  public prix: number;
  public etat: string;

  // Constructeur
  constructor() {
    super();
  }


}
