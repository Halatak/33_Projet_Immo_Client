import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BienImmobilier } from '../model/bien-immobilier';
import { BienImmobilierAchat } from '../model/bien-immobilier-achat';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { Router } from '@angular/router';
import { Adresse } from '../model/adresse';

@Component({
  selector: 'app-ajout-achat',
  templateUrl: './ajout-achat.component.html',
  styleUrls: ['./ajout-achat.component.css']
})
export class AjoutAchatComponent implements OnInit {

  //Les attributs du composant
  monForm: FormGroup;
  baAjout: BienImmobilierAchat = new BienImmobilierAchat();
  adresse: Adresse = new Adresse();

  indice: boolean = false;

  constructor(private bService: BienImmobilierService, private router: Router) { }

  ngOnInit() {
    this.monForm = new FormGroup({
    });
  }

  ajoutBienAchat() {
    if (this.monForm.valid) {
      this.baAjout.adresse = this.adresse;
      //this.adresse = this.baAjout.adresse;
      this.bService.ajoutBienAchat(this.baAjout).subscribe((resultat) => {
        let baTemp: BienImmobilierAchat = resultat;
        if (baTemp.id !== 0) {
          // Si l'ajout a réussi: naviguer vers accueil
          this.router.navigate(['/home']);
          this.indice = false;
        } else {
          this.indice = true;
        }

      });
    }

  }

}
