import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
 
   @Output() changeNumber:EventEmitter<any> = new EventEmitter()


  alteraNumero(): void {
    this.changeNumber.emit()
    alert('-----------------> também executa o FirstComponentComponent.onChangeNumber')
  }

}
