import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from '../service/classe-standard.service';

@Component({
  selector: 'app-accueil-classe-standard',
  templateUrl: './accueil-classe-standard.component.html',
  styleUrls: ['./accueil-classe-standard.component.css']
})
export class AccueilClasseStandardComponent implements OnInit {

  // Attribut de la classe
  listeClasseStandard: any;

  constructor(private clService: ClasseStandardService) { }

  ngOnInit() {
    this.clService.getAllClasseStandard().subscribe((data) => {
      this.listeClasseStandard = data;
    },  (erreur) => {
      console.log(erreur);
    }
    );
  }

  public deleteLien(idb:number){
    this.clService.supprClasseStandard(idb).subscribe((result) => {
      this.listeClasseStandard = this.listeClasseStandard.filter(b => b.id != idb);
    });
  }

}
