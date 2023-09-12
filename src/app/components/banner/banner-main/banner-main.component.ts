import { Component } from '@angular/core';
import { ApiInternoService } from 'src/app/services/api-interno/apiIntero.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner-main',
  templateUrl: './banner-main.component.html',
  styleUrls: ['./banner-main.component.scss']
})
export class BannerMainComponent {


  banner = {
    textoBienvenida: '',
    textoBuscador: '',
    textoAuxiliar: '',
    textoBotonAuxiliar: '',
    listaImagenes: []
  };

  image:any = {
    urlImagen:'',
    
  }


  intervalImage:any;

  currentIndexListImage=0
  constructor(public apiInternoService: ApiInternoService,private sanitization: DomSanitizer) {
    
  }

  ngOnInit(){
    this.apiInternoService.getInformation('home/BannerPrincipal').subscribe((res:any) =>{
      this.banner = res;
      this.image = this.banner.listaImagenes[this.currentIndexListImage];
      this.initTimmer();
    })
  }

  initTimmer(){
    this.intervalImage = setInterval(()=>{
      if(this.currentIndexListImage >=this.banner.listaImagenes?.length-1)
        this.currentIndexListImage=0
      else
        this.currentIndexListImage++
      this.image = this.banner.listaImagenes[this.currentIndexListImage];
    }, 5000);
  }

  // Return trust style
  getSafeUrl(){
    if(this.image.urlImagen){
      return this.sanitization.bypassSecurityTrustStyle('url(\'' + this.image.urlImagen + '\')');
    }
    return ''
    
  }  

  onDestroy(){
    clearInterval(this.intervalImage)
  }


}
