import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, IAappState, incrementaContador } from './store/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(){

   }

  titleParaFilho  = 'curso-angular'
  title = 'curso-angular'

  

}
