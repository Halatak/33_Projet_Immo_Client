import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BienImmobilier } from '../model/bien-immobilier';
import { BienImmobilierAchat } from '../model/bien-immobilier-achat';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-achat',
  templateUrl: './ajout-achat.component.html',
  styleUrls: ['./ajout-achat.component.css']
})
export class AjoutAchatComponent implements OnInit {

   //Les attributs du composant 
   monForm: FormGroup;
  baAjout:BienImmobilierAchat= new BienImmobilierAchat();
 
   indice:boolean=false;

  constructor(private bService: BienImmobilierService, private router:Router) { }

  ngOnInit() {
  }

  ajoutBienAchat(){
    this.bService.ajoutBienAchat(this.baAjout).subscribe((resultat) => {
      let baTemp:BienImmobilierAchat = resultat;
    if(baTemp.id!=0){
      // Si l'ajout a réussi: naviguer vers accueil
      this.router.navigate(['/home']);
      this.indice=false;
    }else{
      this.indice=true;
    }

      });

  }

}
