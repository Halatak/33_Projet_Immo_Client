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

    this.cService.getAllContrat().subscribe((dataC) => {
      this.listeContrat = dataC;
    },
      (erreur) => {
        console.log(erreur);
      }
    );

    this.vService.getAllVisite().subscribe((dataVi) => {
      this.listeVisite = dataVi;
    },
      (erreur) => {
        console.log(erreur);
      }
    );

  }

  public deleteLienClient(idCl: number) {
    this.clService.supprClient(idCl).subscribe((result) => {
      this.listeClient = this.listeClient.filter(b => b.id !== idCl);
    });
  }

  public deleteLienBienImmo(idBi: number) {
    this.biService.supprBienImmobilier(idBi).subscribe((result) => {
      this.listeBienImmo = this.listeBienImmo.filter(b => b.id !== idBi);
    });
  }

  public deleteLienClasseStandard(idCs: number) {
    this.csService.supprClasseStandard(idCs).subscribe((result) => {
      this.listeClasseStandard = this.listeClasseStandard.filter(b => b.id !== idCs);
    });
  }

  public deleteLienContrat(idCont: number) {
    this.cService.supprContrat(idCont).subscribe((result) => {
      this.listeContrat = this.listeContrat.filter(b => b.id !== idCont);
    });
  }

  public deleteLienVisite(idV: number) {
    this.vService.supprVisite(idV).subscribe((result) => {
      this.listeVisite = this.listeVisite.filter(b => b.id !== idV);
    });
  }
}
