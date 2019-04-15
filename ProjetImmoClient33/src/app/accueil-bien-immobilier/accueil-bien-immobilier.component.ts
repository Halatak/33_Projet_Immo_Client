import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from '../service/bien-immobilier.service';

@Component({
  selector: 'app-accueil-bien-immobilier',
  templateUrl: './accueil-bien-immobilier.component.html',
  styleUrls: ['./accueil-bien-immobilier.component.css']
})
export class AccueilBienImmobilierComponent implements OnInit {

    // Déclarer des attributs du composants
    listeBienImmo: any;

  constructor(private bService: BienImmobilierService) { }

  ngOnInit() {
    this.bService.getAllBien().subscribe((data) => {
      this.listeBienImmo = data;
    },
      (erreur) => {
        console.log(erreur);
      }
      );
  }

  public deleteLien(idb:number){
    this.bService.supprBienImmobilier(idb).subscribe((result) => {
      this.listeBienImmo = this.listeBienImmo.filter(b => b.id != idb);
    });
  }


}
