import { Component } from '@angular/core';
import { ApiInternoService } from 'src/app/services/api-interno/apiIntero.service';

@Component({
  selector: 'app-banner-second',
  templateUrl: './banner-second.component.html',
  styleUrls: ['./banner-second.component.scss']
})
export class BannerSecondComponent {
  titulo:string ='';
  subtitulo:string = '';
  constructor(public apiInternoService: ApiInternoService) {
    
  }
  ngOnInit(){
    this.apiInternoService.getInformation('home/BannerInformativo').subscribe((res:any) =>{
      this.titulo= res.texto;
      this.subtitulo = res.textoAuxiliar;
    })
  }
}
