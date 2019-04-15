import { BienImmobilier } from './bien-immobilier';

export class BienImmobilierAchat extends BienImmobilier{

  // Attributs de la classe fille
  private _prix: number;
  private _etat: string;

  // Constructeur
  constructor() {
    super();
  }

  // Getter et setter
  get prix(): number {
    return this._prix;
  }
  set prix(newPrix: number) {
    this._prix = newPrix;
  }

  get etat(): string {
    return this._etat;
  }
  set etat(newEtat: string) {
    this._etat = newEtat;
  }
}
