import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from '../service/bien-immobilier.service';

@Component({
  selector: 'app-accueil-location',
  templateUrl: './accueil-location.component.html',
  styleUrls: ['./accueil-location.component.css']
})
export class AccueilLocationComponent implements OnInit {

   // Déclarer des attributs du composants
   listeBienLocation: any;


  constructor(private bService: BienImmobilierService) { }

  ngOnInit() {
    this.bService.getAllLocation().subscribe((data) => {
      this.listeBienLocation = data;
    },
      (erreur) => {
        console.log(erreur);
      }
      );
  }

}
 