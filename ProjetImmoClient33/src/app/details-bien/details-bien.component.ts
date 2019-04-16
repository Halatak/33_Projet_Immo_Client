import { Component, OnInit, Input } from '@angular/core';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BienImmobilier } from '../model/bien-immobilier';

@Component({
  selector: 'app-details-bien',
  templateUrl: './details-bien.component.html',
  styleUrls: ['./details-bien.component.css']
})
export class DetailsBienComponent implements OnInit {

  private bienId:number;
  @Input() bien: BienImmobilier; 
  @Input() searchTerm: string; 

  constructor(private bService: BienImmobilierService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {

    this.bienId= +this.ar.snapshot.paramMap.get('id');
  

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

details(bienId:number){
  this.router.navigate(['/details', this.bien.id], 
  { queryParams: {'searchTerm': this.searchTerm}
  });
}

}


