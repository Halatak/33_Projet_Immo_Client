import { Adresse } from './adresse';
import { ClasseStandard } from './classe-standard';
import { Proprietaire } from './proprietaire';
import { Client } from './client';
import { Visite } from './visite';
import { Photo } from './photo';

export class BienImmobilier {

  // Attributs de la classe mère
  public id: number;
  public statut: string;
  public dateSoumission: Date;
  public dateDispo: Date;
  public revenu: number;
  public coordonneePersAgence: string;
  public nombreChambres: number;
  public latitude: string;
  public longitude: string;

  // Associations
  public adresse: Adresse;
  public classeStandard: ClasseStandard;
  public proprietaire: Proprietaire;
  public client: Client[];
  public visite: Visite;
  public photo: Photo[];

  // Constructeur
  constructor() {}

  // getter et setter
  /*get id(): number {
    return this._id;
  }
  set id(newId: number) {
    this._id = newId;
  }

  get statut(): string {
    return this._statut;
  }
  set statut(newStatut: string) {
    this._statut = newStatut;
  }

  get dateSoumission(): Date {
    return this._dateSoumission;
  }
  set dateSoumission(newDateSoumission: Date) {
    this._dateSoumission = newDateSoumission;
  }

  get dateDispo(): Date {
    return this._dateDispo;
  }
  set dateDispo(newDateDispo: Date) {
    this._dateDispo = newDateDispo;
  }

  get revenu(): number {
    return this._revenu;
  }
  set revenu(newRevenu: number) {
    this._revenu = newRevenu;
  }

  get coordonneePersAgence(): string {
    return this._coordonneePersAgence;
  }
  set coordonneePersAgence(newCoordonneePersAgence: string) {
    this._coordonneePersAgence = newCoordonneePersAgence;
  }

  get nombreChambres(): number {
    return this._nombreChambres;
  }
  set nombreChambres(newNombreChambres: number) {
    this._nombreChambres = newNombreChambres;
  }

  get latitude(): string {
    return this._latitude;
  }
  set latitude(newLatitude: string) {
    this._latitude = newLatitude;
  }

  get longitude(): string {
    return this._longitude;
  }
  set longitude(newLongitude: string) {
    this._longitude = newLongitude;
  }

  get adresse(): Adresse {
    return this._adresse;
  }
  set adresse(newAdresse: Adresse) {
    this._adresse = newAdresse;
  }

  get classeStandard(): ClasseStandard {
    return this._classeStandard;
  }
  set classeStandard(newClasseStandard: ClasseStandard) {
    this._classeStandard = newClasseStandard;
  }

  get proprietaire(): Proprietaire {
    return this._proprietaire;
  }
  set proprietaire(newProprietaire: Proprietaire) {
    this._proprietaire = newProprietaire;
  }

  get client(): Client[] {
    return this._client;
  }
  set client(newClient: Client[]) {
    this._client = newClient;
  }

  get visite(): Visite {
    return this._visite;
  }
  set visite(newVisite: Visite) {
    this._visite = newVisite;
  }

  get photo(): Photo[] {
    return this._photo;
  }
  set photo(newPhoto: Photo[]) {
    this._photo = newPhoto;
  }*/
}
