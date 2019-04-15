import { BienImmobilier } from './bien-immobilier';

export class BienImmobilierLocation extends BienImmobilier{

  // Attributs de la classe fille
  private _caution: number;
  private _loyerMensuel: number;
  private _typeBail: string;
  private _garniture: boolean;

  // Constructeur
  constructor() {
    super();
  }

  // Getter et setter
  get caution(): number {
    return this._caution;
  }
  set caution(newCaution: number) {
    this._caution = newCaution;
  }

  get loyerMensuel(): number {
    return this._loyerMensuel;
  }
  set loyerMensuel(newLoyerMensuel: number) {
    this._loyerMensuel = newLoyerMensuel;
  }

  get typeBail(): string {
    return this._typeBail;
  }
  set typeBail(newTypeBail: string) {
    this._typeBail = newTypeBail;
  }

  get garniture(): boolean {
    return this._garniture;
  }
  set garniture(newGarniture: boolean) {
    this._garniture = newGarniture;
  }
}
