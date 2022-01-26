import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultatRechercheComponent } from './components/resultat-recherche/resultat-recherche.component';
import { HeaderComponent } from './components/header/header.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultatRechercheComponent,
    HeaderComponent,
    RechercheComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
