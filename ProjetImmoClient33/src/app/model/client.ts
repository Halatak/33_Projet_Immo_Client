import { Adresse } from './adresse';
import { Contrat } from './contrat';
import { ClasseStandard } from './classe-standard';
import { BienImmobilier } from './bien-immobilier';
import { Visite } from './visite';

export class Client {

  // Attributs de la classe
  public id: number;
  public nom: string;
  public mail: string;
  public mdp: string;
  public telephone: string;

  // Associations
  public adresse: Adresse;
  public contrat: Contrat[];
  public classeStandard: ClasseStandard[];
  public bienImmobilier: BienImmobilier[];
  public visite: Visite[];

  // constructeur
  constructor() {}

}
