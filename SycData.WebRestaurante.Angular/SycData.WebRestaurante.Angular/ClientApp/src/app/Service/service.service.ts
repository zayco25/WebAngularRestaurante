import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MesaViewModel } from '../Model/MesaModel';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = environment.BaseUrl;


  constructor(private http:HttpClient) {
  
   }

   
   getUserLogin(clave:string){

    let  Url = this.baseUrl+'Usuario/Login?Clave='+clave;
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json' };
    return this.http.get(Url,httpOptions);

   }


   getMesasbyNivel(Nivel:number):Observable<any>{
    const token = localStorage.getItem('Tokken');
    let  Url = this.baseUrl+'Mesa/GetMesa?IdNivel='+Nivel;
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': 'Bearer '+ token}), responseType: 'text' as 'json' };
    // const headers: Headers = new Headers();
    // headers.append('Authorization', localStorage.getItem("Tokken"));
    // // const requestOptions: RequestOptions = new RequestOptions();
    // // requestOptions.headers = headers; 
    return this.http.get(Url,httpOptions)

   }

   
   getProductos():Observable<any>{
    const token = localStorage.getItem('Tokken');
    let  Url = this.baseUrl+'Producto/getProductos/'
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': 'Bearer '+ token}), responseType: 'text' as 'json' };
    // const headers: Headers = new Headers();
    // headers.append('Authorization', localStorage.getItem("Tokken"));
    // // const requestOptions: RequestOptions = new RequestOptions();
    // // requestOptions.headers = headers; 
    return this.http.get(Url,httpOptions)

   }


 
}
