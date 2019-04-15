export class Adresse {

  // Attributs de la classe
  public rue: string;
  public numero: number;
  public codePostal: number;
  public ville: string;

  // constructeurs
  constructor() {
  }

  // ToString
  public toString = (): string => {
    return `${this.numero} ${this.rue} ${this.codePostal} ${this.ville}`;
  }

}
