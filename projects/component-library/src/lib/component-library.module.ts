import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';


@NgModule({
  declarations: [
    
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    
    
    ...DIRECTIVES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule { }
