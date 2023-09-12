import { Component } from '@angular/core';
import { ApiInternoService } from 'src/app/services/api-interno/apiIntero.service';
import { mergeMap,  } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.scss']
})
export class TramiteComponent {

  titulo: string = "";
  imagenes:any=[];
  imagenesDos:any=[];
  
  constructor(public apiInternoService: ApiInternoService){
    
  }

  ngOnInit(){
    const myElement:any = document.getElementById('body');
    console.log("myElement.getBoundingClientRect().width",window.innerWidth);
    const items = window.innerWidth>=1024 ? 6 : 2
    forkJoin([
      this.getData('ficha-tramites-y-servicios/secciones/los-mas-consultados-en-home'),
      this.getData('ficha-tramites-y-servicios/LoMasConsultado/ObtenerLoMasConsultado')
    ]).subscribe((res:any)=>{
      let array:any = [];
      let contador=0;
      this.titulo = res[0].titulo;
      
      this.imagenesDos = res[1];
      res[1].forEach((res:any, index:number)=>{
        if(res.iconoCategoria){
          contador++;
          array.push({
            title: res.nombre,
            image: res.iconoCategoria,
            alt: res.nombre,
          });
          
        }
        if(contador === items || index === this.imagenesDos.length-1){
          this.imagenes.push(array);
          array = [];
          contador=0;
        }
      });

      
      
    })
    
  }

  getData(url:string):Observable<any>{
    return this.apiInternoService.getInformation(url).pipe(
      mergeMap((res:any)=> of(res))
    );
  }
}
