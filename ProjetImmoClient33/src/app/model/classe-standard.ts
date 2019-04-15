import { BienImmobilier } from './bien-immobilier';
import { Client } from './client';

export class ClasseStandard {

  // Attributs de la classe
  public id: number;
  public typeBien: string;
  public modeOffre: string;
  public prixMax: number;
  public superficieMin: number;

  // associations
  public bienImmobilier: BienImmobilier[];
  public client: Client[];

  // constructeur
  constructor() {}

}
