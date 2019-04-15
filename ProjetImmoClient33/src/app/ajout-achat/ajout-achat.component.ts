import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BienImmobilier } from '../model/bien-immobilier';
import { BienImmobilierAchat } from '../model/bien-immobilier-achat';
import { BienImmobilierService } from '../service/bien-immobilier.service';
import { Router } from '@angular/router';
import { Adresse } from '../model/adresse';
import { Photo } from '../model/photo';
import { PhotoService } from '../service/photo.service';

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
  photo: Photo = new Photo();
  photo2: Photo = new Photo();
  photo3: Photo = new Photo();

  indice: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private bService: BienImmobilierService, private pService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.monForm = new FormGroup({
    });
  }

  ajoutBienAchat() {
    if (this.monForm.valid) {
      const formModel = this.prepareSave();
      this.pService.ajoutPhoto(this.photo);
      // this.pService.ajoutPhoto(this.photo2);
      // this.pService.ajoutPhoto(this.photo3);
      //this.baAjout.photo.push(this.photo);
      // this.baAjout.photo.push(this.photo2);
      //  this.baAjout.photo.push(this.photo3);
      this.baAjout.adresse = this.adresse;
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.monForm.get('photo').setValue(file);
      //this.monForm.get('photo2').setValue(file);
      //  this.monForm.get('photo3').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
   // input.append('name', this.monForm.get('name').value);
    input.append('photo', this.monForm.get('photo').value);
    return input;
  }



}