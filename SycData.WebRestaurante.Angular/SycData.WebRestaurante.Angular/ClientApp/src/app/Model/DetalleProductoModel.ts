export class DetalleProductoModel{

 
IdProducto:Number
Descripcion:string
Cantidad :number
Precio :any
Total :any

    constructor(IdProducto:number,Descripcion:string,Cantidad:number,Precio:any,Total:any){

        this.IdProducto=IdProducto
        this.Descripcion=Descripcion
        this.Cantidad=Cantidad
        this.Precio=Precio
        this.Total=Total

    }

}
