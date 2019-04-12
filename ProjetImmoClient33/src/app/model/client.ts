import { Adresse } from './adresse';
import { Contrat } from './contrat';
import { ClasseStandard } from './classe-standard';
import { BienImmobilier } from './bien-immobilier';
import { Visite } from './visite';

export class Client {

  // Attributs de la classe
  private _id: number;
  private _nom: string;
  private _mail: string;
  private _mdp: string;
  private _telephone: string;

  // Associations
  private _adresse: Adresse;
  private _contrat: Contrat[];
  private _classeStandard: ClasseStandard[];
  private _bienImmobilier: BienImmobilier[];
  private _visite: Visite[];

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

  get telephone(): string {
    return this._telephone;
  }
  set telephone(newTelephone: string) {
    this._telephone = newTelephone;
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

  get classeStandard(): ClasseStandard[] {
    return this._classeStandard;
  }
  set classeStandard(newClasseStandard: ClasseStandard[]) {
    this._classeStandard = newClasseStandard;
  }

  get bienImmobilier(): BienImmobilier[] {
    return this._bienImmobilier;
  }
  set bienImmobilier(newBienImmobilier: BienImmobilier[]) {
    this._bienImmobilier = newBienImmobilier;
  }

  get visite(): Visite[] {
    return this._visite;
  }
  set visite(newVisite: Visite[]) {
    this._visite = newVisite;
  }
}
