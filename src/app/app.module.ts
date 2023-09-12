import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerModule } from './components/banner/banner.module';
import { HeaderComponent } from './components/header/header.component';
import { ApiInternoService } from './services/api-interno/apiIntero.service';
import { PresentComponent } from './components/present/present.component';
import { InformationComponent } from './components/present/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TramiteComponent } from './components/tramite/tramite.component';
//import { ComponentLibraryModule } from 'component-library';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentComponent,
    InformationComponent,
    ContactComponent,
    FooterComponent,
    TramiteComponent,
    
  ],
  imports: [
    BrowserModule,
    BannerModule,
    HttpClientModule,
    //ComponentLibraryModule,
    NgImageSliderModule,
    CarouselModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { } 
