export class Adresse {

  // Attributs de la classe
  private _rue: string;
  private _numero: number;
  private _codePostal: number;
  private _ville: string;

  // constructeurs
  constructor() {
  }

  // getter et setter
  get rue(): string {
    return this._rue;
  }
  set rue(newRue: string) {
    this._rue = newRue;
  }

  get numero(): number {
    return this._numero;
  }
  set numero(newNumero: number) {
    this._numero = newNumero;
  }

  get codePostal(): number {
    return this._codePostal;
  }
  set codePostal(newCodePostal: number) {
    this._codePostal = newCodePostal;
  }

  get ville(): string {
    return this._ville;
  }
  set ville(newVille: string) {
    this._ville = newVille;
  }

}
