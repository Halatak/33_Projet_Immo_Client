import { BienImmobilier } from './bien-immobilier';

export class Photo {

  // Attributs de la classe
  public id: number;
  public photo: any;

  // Associations
  public bienImmobilier: BienImmobilier;

  constructor() { }

}
