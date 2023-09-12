import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const URL = 'https://api-interno.www.gov.co/api/';

@Injectable( {
    providedIn: 'root'
  })
export class ApiInternoService {
  constructor(public httpClient: HttpClient) {}

  /**
   * 
   * @param key Url final para obtener informacion del api
   */
  getInformation(key: string): Observable<any> {
    return this.httpClient.get(`${URL}${key}`).pipe(
        map((res:any)=>{
            
            if(res.succeeded)
                return res.data
            else
                throw res.errors || 'error'    
            
        }),
        catchError(error=> throwError(error))
    );
  }
}
