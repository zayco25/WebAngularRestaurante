import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() oldname = ""; 
  @Output() close = new EventEmitter<string>(); 
  newname = ""; 

  ngOnInit() { 
   // copy all inputs to avoid polluting them 
   this.newname = this.oldname; 
  } 

  ok() { 
   this.close.emit(this.newname); 
  } 

  cancel() { 
   this.close.emit(null); 
  } 
}
