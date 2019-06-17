import {  Component,  OnInit,  ViewChild,  ElementRef,  TemplateRef} from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
// import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { ServiceService } from "../Service/service.service";
import { MesaViewModel } from "../Model/MesaModel";
import { ModalDirective } from "ngx-bootstrap/modal";
declare var $: any;


@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"],
  providers: [ModalComponent]
})
export class PanelComponent implements OnInit {
  @ViewChild("RegistroMesas") RegistroMesas: ModalDirective;
  modalRef: BsModalRef;
  name = "old name";
  public Mostrar: boolean;
  public ListaMesas: any;
  showIt = false;
  // @ViewChild("Registrar") public registrar;
  constructor(
    private AppModal: ModalComponent,
    private modalService: BsModalService,
    private route: Router,
    private Servicio: ServiceService
  ) {}

  ngOnInit() {
    this.Mostrar = false;
  }

  AbrirRegistrarMesa() {
    this.MostrarMesas();
    this.RegistroMesas.show();
  }

  CerrarModal() {
    this.RegistroMesas.hide();
  }

  Salir() {
    this.route.navigate(["Login"]);
  }

  showModal() {
    this.showIt = true;
  }
  closeModal(newName: string) {
    this.showIt = false;
    if (newName) this.name = newName;
  }

  openModal(template: TemplateRef<any>) {
    this.MostrarMesas();
    this.modalRef = this.modalService.show(template);
  }

  GuardarMesa() {
    this.RegistroMesas.hide();

    this.route.navigate(["/RegistrarComanda"]);
  }

  MostrarMesas() {
    this.Mostrar = true;
    this.Servicio.getMesasbyNivel(0).subscribe(
      Mesas => {
        console.log(Mesas);
        this.Mostrar = false;
        this.ListaMesas = JSON.parse(Mesas);
      },
      error => {
        this.Mostrar = false;
        console.log(error);
        this.RespuestaError(error.status); 
        if (error === 'Unauthorized') { this.route.navigateByUrl('/login')};
      }
    );
  }

  RespuestaError(Texto) {
    $.alert({
      title: "Alerta",
      content: Texto,
      type: "red",
      icon: "fa fa-danger",
      buttons: {
        aceptar: {
          text: "Aceptar",
          btnClass: "btn-red"
        }
      }
    });
  }
}
