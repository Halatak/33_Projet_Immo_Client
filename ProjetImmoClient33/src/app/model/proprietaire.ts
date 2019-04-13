import { Adresse } from './adresse';
import { Contrat } from './contrat';
import { BienImmobilier } from './bien-immobilier';

export class Proprietaire {

  // Attributs de la classe
  private _id: number;
  private _nom: string;
  private _mail: string;
  private _mdp: string;
  private _telephonePro: string;
  private _telephonePrive: string;

  // Associations
  private _adresse: Adresse;
  private _contrat: Contrat[];
  private _bienImmobilier: BienImmobilier[];

  // constructeur
  constructor() {}

  // getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get nom(): string {
    return this._nom;
  }
  set nom(newNom: string) {
    this._nom = newNom;
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

  get telephonePro(): string {
    return this._telephonePro;
  }
  set telephonePro(newTelephonePro: string) {
    this._telephonePro = newTelephonePro;
  }

  get adresse(): Adresse {
    return this._adresse;
  }
  set adresse(newAdresse: Adresse) {
    this._adresse = newAdresse;
  }

  get contrat(): Contrat[] {
    return this._contrat;
  }
  set contrat(newContrat: Contrat[]) {
    this._contrat = newContrat;
  }

  get bienImmobilier(): BienImmobilier[] {
    return this._bienImmobilier;
  }
  set bienImmobilier(newBienImmobilier: BienImmobilier[]) {
    this._bienImmobilier = newBienImmobilier;
  }
}
