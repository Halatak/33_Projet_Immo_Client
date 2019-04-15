import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutAchatComponent } from './ajout-achat/ajout-achat.component';
import { AjoutLocationComponent } from './ajout-location/ajout-location.component';
import { ModifAchatComponent } from './modif-achat/modif-achat.component';
import { ModifLocationComponent } from './modif-location/modif-location.component';
import { SupprBienComponent } from './suppr-bien/suppr-bien.component';
import { AccueilBienImmobilierComponent } from './accueil-bien-immobilier/accueil-bien-immobilier.component';
import { RechercheBienImmobilierComponent } from './recherche-bien-immobilier/recherche-bien-immobilier.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilClasseStandardComponent } from './accueil-classe-standard/accueil-classe-standard.component';
import { AccueilConseillerComponent } from './accueil-conseiller/accueil-conseiller.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AjoutAchatComponent,
    AjoutLocationComponent,
    ModifAchatComponent,
    ModifLocationComponent,
    SupprBienComponent,
    AccueilBienImmobilierComponent,
    RechercheBienImmobilierComponent,
    AccueilComponent,
    AccueilClasseStandardComponent,
    AccueilConseillerComponent,
    AjoutClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
