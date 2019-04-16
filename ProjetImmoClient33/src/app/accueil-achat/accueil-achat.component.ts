import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from '../service/bien-immobilier.service';

@Component({
  selector: 'app-accueil-achat',
  templateUrl: './accueil-achat.component.html',
  styleUrls: ['./accueil-achat.component.css']
})
export class AccueilAchatComponent implements OnInit {

     // Déclarer des attributs du composants
     listeBienAchat: any;

  constructor(private bService: BienImmobilierService) { }

  ngOnInit() {
    this.bService.getAllAchat().subscribe((data) => {
      this.listeBienAchat = data;
    },
      (erreur) => {
        console.log(erreur);
      }
      );
  }

}
 