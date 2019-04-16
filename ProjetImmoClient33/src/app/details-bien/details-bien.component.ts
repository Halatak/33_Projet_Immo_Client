import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-bien',
  templateUrl: './details-bien.component.html',
  styleUrls: ['./details-bien.component.css']
})
export class DetailsBienComponent implements OnInit {

  constructor(private bService: BienImmobilierService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
  

   //Récupérer l'id optionnel de la requete
 let idb; 
 this.ar.params.subscribe((params) => {
  idb = params.pId; 
  if(idb){
    this.bService.getById(idb).subscribe((result) => {
     
    });
  }
 });

}

}


