import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MesaViewModel } from '../Model/MesaModel';
import { Observable,throwError } from 'rxjs';
import { Router } from '@angular/router'; 
import { catchError} from 'rxjs/operators'
import { ServiceService } from './service.service';

@Injectable()
export class InspectorService  implements HttpInterceptor{

    constructor(private  service:ServiceService, private router:Router){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          return next.handle(request).pipe(
            catchError( (error) => {
              console.log(error);
              if (error instanceof HttpErrorResponse) {
                  if (error.error instanceof ErrorEvent) {
                      console.error("Error Event");
                  } else {
                      console.log(`error status : ${error.status} ${error.statusText}`);
                      switch (error.status) {
                          case 401:      //login
                              this.router.navigateByUrl("/Login");
                              break;
                          case 403:     //forbidden
                              this.router.navigateByUrl("/unauthorized");
                              break;
                      }
                  } 
              } else {
                  console.error("some thing else happened");
              }
              return throwError(error);
               
 


             
         })
       )





          
      }
    
}
