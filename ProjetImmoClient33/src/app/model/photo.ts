import { BienImmobilier } from './bien-immobilier';

export class Photo {

  // Attributs de la classe
  private _id: number;
  private _photo: string;

  // Associations
  private _bienImmobilier: BienImmobilier;

  constructor() { }

  // Getter et setter
  get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get photo(): string {
    return this._photo;
  }
  set photo(newPhoto: string) {
    this._photo = newPhoto;
  }

  get bienImmobilier(): BienImmobilier {
    return this._bienImmobilier;
  }
  set bienImmobilier(newBienImmobilier: BienImmobilier) {
    this._bienImmobilier = newBienImmobilier;
  }
}
