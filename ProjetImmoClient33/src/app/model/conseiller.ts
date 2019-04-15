import { Visite } from './visite';

export class Conseiller {

  // Attributs de la classe
  private _id: number;
  private _mail: string;
  private _mdp: string;

  // Associations
  private _visite: Visite;

  // constructeur
  constructor() {}

  // getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get mail(): string {
    return this._mail;
  }
  set mail(newMail: string) {
    this._mail = newMail;
  }

  get mdp(): string {
    return this._mdp;
  }
  set mdp(newMdp: string) {
    this._mdp = newMdp;
  }

  get visite(): Visite {
    return this._visite;
  }
  set visite(newVisite: Visite) {
    this._visite = newVisite;
  }
}
