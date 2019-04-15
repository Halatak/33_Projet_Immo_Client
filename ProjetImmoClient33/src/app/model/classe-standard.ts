import { BienImmobilier } from './bien-immobilier';
import { Client } from './client';

export class ClasseStandard {

  // Attributs de la classe
  private _id: number;
  private _typeBien: string;
  private _modeOffre: string;
  private _prixMax: number;
  private _superficieMin: number;

  // associations
  private _bienImmobilier: BienImmobilier[];
  private _client: Client[];

  // constructeur
  constructor() {}

  // getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get typeBien(): string {
    return this._typeBien;
  }
  set typeBien(newTypeBien: string) {
    this._typeBien = newTypeBien;
  }

  get modeOffre(): string {
    return this._modeOffre;
  }
  set modeOffre(newModeOffre: string) {
    this._modeOffre = newModeOffre;
  }

  get prixMax(): number {
    return this._prixMax;
  }
  set prixMax(newPrixMax: number) {
    this._prixMax = newPrixMax;
  }

  get superficieMin(): number {
    return this._superficieMin;
  }
  set superficieMin(newSuperficieMin: number) {
    this._superficieMin = newSuperficieMin;
  }

  get bienImmobilier(): BienImmobilier[] {
    return this._bienImmobilier;
  }
  set bienImmobilier(newBienImmobilier: BienImmobilier[]) {
    this._bienImmobilier = newBienImmobilier;
  }

  get client(): Client[] {
    return this._client;
  }
  set client(newClient: Client[]) {
    this._client = newClient;
  }
}
