import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { ContratService } from '../service/contrat.service';
import { VisiteService } from '../service/visite.service';
import { ClasseStandard } from '../model/classe-standard';
import { ClasseStandardService } from '../service/classe-standard.service';

@Component({
  selector: 'app-accueil-conseiller',
  templateUrl: './accueil-conseiller.component.html',
  styleUrls: ['./accueil-conseiller.component.css']
})
export class AccueilConseillerComponent implements OnInit {

  // Attributs de la classe
  listeClient: any;
  listeBienImmo: any;
  listeClasseStandard: any;
  listeContrat: any;
  listeVisite: any;

  constructor(private clService: ClientService, private biService: BienImmobilierService,
    private csService: ClasseStandardService, private cService: ContratService,
    private vService: VisiteService) { }

  ngOnInit() {
    this.clService.getAllClient().subscribe((dataCl) => {
      this.listeClient = dataCl;
    },
      (erreur) => {
        console.log(erreur);
      }
    );

    this.biService.getAllBien().subscribe((dataBi) => {
      this.listeBienImmo = dataBi;
    },
      (erreur) => {
        console.log(erreur);
      }
    );

    this.csService.getAllClasseStandard().subscribe((dataCs) => {
      this.listeClasseStandard = dataCs;
    },
      (erreur) => {
        console.log(erreur);
      }
      );
  }

}
