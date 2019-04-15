import { BienImmobilier } from './bien-immobilier';

export class BienImmobilierLocation extends BienImmobilier{

  // Attributs de la classe fille
  public caution: number;
  public loyerMensuel: number;
  public typeBail: string;
  public garniture: boolean;

  // Constructeur
  constructor() {
    super();
  }

}
