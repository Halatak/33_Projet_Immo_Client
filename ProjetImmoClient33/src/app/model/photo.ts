import { BienImmobilier } from './bien-immobilier';

export class Photo {

  // Attributs de la classe
  public id: number;
  public photo: string;

  // Associations
  public bienImmobilier: BienImmobilier;

  constructor() { }

}
