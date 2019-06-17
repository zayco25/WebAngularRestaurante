import { Component, OnInit,Pipe,ViewChild,ElementRef, AfterContentInit} from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { DetalleProductoModel } from '../Model/DetalleProductoModel';
@Pipe({
  name: 'filter'
})
@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent implements OnInit   {

  constructor(private service:ServiceService)  { }
  @ViewChild('TxtBusqueda') TxtBusqueda: ElementRef;
  @ViewChild('TxtPedido') TxtPedido: ElementRef;
  @ViewChild('TxtItems') TxtItems: ElementRef;
  @ViewChild('TxtMonto') TxtMonto: ElementRef;

  public Busqueda:string
  public Productos:any[]
  public Seleccionada:any
  public ProductosProductosFilter:any[]
  public ProductosDetalle:Array<DetalleProductoModel>=[]
  public ProductoSeleccionado:any
  public Mostrar:boolean
  ngOnInit() {
    this.Mostrar=false;
  this.Seleccionada=false
  this.Busqueda=''
   this.CargarProductos()
   this.TxtBusqueda.nativeElement.focus()
  }



  Todos(){
    this.CargarProductos()
  }
  BorrarProducto(item){

    this.ProductosDetalle.splice(item, 1);
    this.CargarTotales()
  }

  AgregarProducto(){
  console.log(this.ProductoSeleccionado)

//   var donut: DetalleProductoModel = {
//     dimension: 1,
//     innerRadius: 2
// };

    console.log(this.ProductoSeleccionado.IdProducto)

    // let ProductoSelect = new DetalleProductoModel(this.ProductoSeleccionado.IdProducto,this.ProductoSeleccionado.Descripcion,1,0,0); 
    let Cantidad = this.TxtPedido.nativeElement.value;
    var ProductoSelect: DetalleProductoModel = {
    IdProducto: this.ProductoSeleccionado.IdProducto,
    Descripcion:this.ProductoSeleccionado.Descripcion,
    Cantidad: Cantidad,
    Precio :this.ProductoSeleccionado.Precio ,
    Total:this.ProductoSeleccionado.Precio * Cantidad
    };
    console.log(ProductoSelect)
    //ProductoSelect.IdProducto=ProductoSeleccionado.IdProducto
    this.ProductosDetalle.push(ProductoSelect)

    this.CargarTotales()

  }


  CargarTotales(){
 

    let Total = this.ProductosDetalle.filter((item) =>item.Total)
    .map((item) => +item.Total)
    .reduce((sum, current) => sum + current);

    this.TxtMonto.nativeElement.value=Total;
    this.TxtItems.nativeElement.value=this.ProductosDetalle.length;
  }

  SeleccionarFila(i,items){
    this.Seleccionada=i;
    this.ProductoSeleccionado = items 
  }
  
  ngAfterViewInit() {
    this.TxtBusqueda.nativeElement.focus();
  }

  CargarProductos(){

    this.Mostrar=true
    this.service.getProductos().subscribe(x=> {
        this.Productos = JSON.parse(x)
        this.ProductosProductosFilter= JSON.parse(x)
        console.log(x)
        this.Mostrar=false
    },error=>
    {
      this.Mostrar=false
      console.log(error)
    })
  }


  FiltrarProductosbyLeter(Letra :string){   
    this.ProductosProductosFilter = this.Productos.filter(producto=> producto.Descripcion.toLowerCase().lastIndexOf(Letra.toLowerCase(),0)===0)
  
  }

  FiltrarbyText(){   

 
   
    if(this.Busqueda==''){

      this.ProductosProductosFilter= this.Productos
    }else{
      this.ProductosProductosFilter = this.Productos.filter(producto=> producto.Descripcion.toLowerCase().indexOf(this.Busqueda.toLowerCase())!==-1)
     
    }
    
  }

}


