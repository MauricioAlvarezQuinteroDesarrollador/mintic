import { Component } from '@angular/core';
import { ApiInternoService } from 'src/app/services/api-interno/apiIntero.service';
import { mergeMap,  } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent {

  description:any;
  news:any = [];
  constructor(public apiInternoService: ApiInternoService){

  }

  ngOnInit(){
    forkJoin([
      this.getPresent(),
      this.getCategories()
    ]).subscribe((res:any)=>{
      this.description = res[0];
      this.news = res[1];
      
    })
  }

  getPresent():Observable<any>{
    return this.apiInternoService.getInformation('ficha-tramites-y-servicios/secciones/los-mas-consultados-en-home').pipe(
      mergeMap((res:any)=> of(res))
    );
  }
  getCategories(){
    return this.apiInternoService.getInformation('noticias/Noticias/categorias/0').pipe(
      mergeMap((res:any)=> of(res))
    );
  }
}
