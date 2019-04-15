import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilBienImmobilierComponent } from './accueil-bien-immobilier/accueil-bien-immobilier.component';
import { AjoutAchatComponent } from './ajout-achat/ajout-achat.component';
import { AjoutLocationComponent } from './ajout-location/ajout-location.component';
import { ModifAchatComponent } from './modif-achat/modif-achat.component';
import { ModifLocationComponent } from './modif-location/modif-location.component';
import { SupprBienComponent } from './suppr-bien/suppr-bien.component';
import { RechercheBienImmobilierComponent } from './recherche-bien-immobilier/recherche-bien-immobilier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilConseillerComponent } from './accueil-conseiller/accueil-conseiller.component';

const routes: Routes = [ 
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component:AccueilComponent},
{path:'accConseiller', component:AccueilConseillerComponent},
{path:'accBienImmo', component:AccueilBienImmobilierComponent},
{path:'addAchat', component:AjoutAchatComponent},
{path:'addLocation', component:AjoutLocationComponent},
{path:'updateAchat', component:ModifAchatComponent},
{path:'updateLocation', component:ModifLocationComponent},
{path:'deleteBienImmo', component:SupprBienComponent},
{path:'findBienImmo', component:RechercheBienImmobilierComponent},

{path:'**', redirectTo:'home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 