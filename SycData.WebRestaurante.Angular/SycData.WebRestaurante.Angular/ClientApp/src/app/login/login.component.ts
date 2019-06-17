import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Clave:string;
  public Mostrar:boolean;
  constructor(private ServiceLogin : ServiceService ,private router:Router) { }

  ngOnInit() {
    this.Mostrar=false;
    this.Clave="";
  }

  BotonNumero(texto):void{    
    this.Clave =this.Clave+texto;
  }

  Borrar():void{
    console.log(this.Clave);
    this.Clave ="";
  }

  Ingresar(){ 
    this.Mostrar=true;
    this.ServiceLogin.getUserLogin(this.Clave).subscribe( (data:any)=>{       
        this.Mostrar=false;
        // let Respuesta=x;
        // console.log(data[0].Result);        
        // var Info = JSON.parse(data)
        // console.log(Info)
        //   console.log(JSON.parse(data)['Result'])
        let resultado = JSON.parse(data)['Tokken']
        let Usaurio = JSON.parse(data)['Result'][0]  

        localStorage.setItem("Tokken",resultado );
        localStorage.setItem("IdUsuario",Usaurio.IdUsuario );
        localStorage.setItem("Usuario",Usaurio.NombreUsuario );
        
      if(resultado!=""){
        this.router.navigate(['\PanelMesas'])
      }else{
       this.RespuestaError("Usuario No Extiste")
      }

       },error=>{
        console.log(error);
        this.RespuestaError(error);
        this.Mostrar=false;
       }    
          
    );
  }

  RespuestaError(Texto){
    $.alert({
      title: 'Alerta',
      content: Texto,
      type: 'red',
      icon: 'fa fa-danger',
      buttons: {
          aceptar: {

              text: 'Aceptar',
              btnClass: 'btn-red'
          }

      }


  });
  }

}
