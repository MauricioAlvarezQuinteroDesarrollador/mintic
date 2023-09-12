import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerMainComponent } from './banner-main/banner-main.component';

import { BannerSecondComponent } from './banner-second/banner-second.component';


@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    BannerMainComponent,
    BannerSecondComponent 
  ],
  exports: [
    BannerMainComponent,
    BannerSecondComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class BannerModule { }