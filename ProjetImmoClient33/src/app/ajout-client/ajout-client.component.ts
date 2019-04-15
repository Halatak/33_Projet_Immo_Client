import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  //Les attributs du composant
  cAjout: Client= new Client;
  indice: boolean;
  
  constructor(private cService:ClientService, private router: Router) { }

  ngOnInit() {
  }

  public ajouter() {
    this.cService.ajoutClient(this.cAjout).subscribe(
      (resultat) => {let cTest: Client = resultat;
        if (cTest.id != 0) {
          // si l'ajout a réussi, naviguer vers accueil
          this.router.navigate(['/accConseiller']);
          this.indice = false;
        } else {
          this.indice = true;
        }
      }
    )
  }


}
