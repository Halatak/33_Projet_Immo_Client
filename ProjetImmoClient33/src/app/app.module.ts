import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    RechercheBienImmobilierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([])
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
