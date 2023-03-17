import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServiceExemploService } from 'src/app/services/service-exemplo.service';
import { decrementaContador, IAappState, incrementaContador } from 'src/app/store/app.state';
import { InterfaceAnimal } from './../../interfaces/Animal';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(
    private serviceExemploService: ServiceExemploService,
    private store:Store<{app: IAappState}>
  ) {
      //this.getAnimais()
  }
  ngOnInit(): void {
    console.log('--------------------------->' + this.titleParaFilho)
    this.getAnimais()
  }

  name: string = 'Thiago'
  namee: string = 'Artur'
  @Input() titleParaFilho = ''
  size: number = 40
  font: string = 'Arial'
  color: string = 'red'
  nameForm: string = 'vazio some'
  classes: [string, string] = ['green-title', 'smal-title']
  canShow: boolean = true
  showPevent: boolean = true
  myOnChangeNumber: number = 40
  amimalsNames = ['gato', 'cachorro', 'urso', 'leão', 'macaco', 'tigre']
  amimals = [
    { name: 'Michel', type: 'Gato' },
    { name: 'Branco', type: 'Cachorro' },
    { name: 'Lobo', type: 'Urso' },
    { name: 'Fanster', type: 'Leão' },
    { name: 'Nora', type: 'Gato' },
    { name: 'Enerst', type: 'Humano' },

  ]
  amimalsWithInterface: InterfaceAnimal[] = [
    { id: 1 ,name: 'Michel', type: 'Gato' },
    { id: 2 ,name: 'Branco', type: 'Cachorro' },
    { id: 3 ,name: 'Lobo', type: 'Urso' },
    { id: 4 ,name: 'Fanster', type: 'Leão' },
    { id: 5 ,name: 'Nora', type: 'Gato' },
    { id: 6 ,name: 'Enerst', type: 'Humano' },
  ]
  showAnimal: InterfaceAnimal = { id: 0 ,name: '', type: '' };

  amimalsWithInterfaceVazio: InterfaceAnimal[] = []

  datecase: Date = new Date("2019-01-16");
  today: Date = new Date();


 

  counter$ = this.store.select('app')
                      .pipe(
                        map(e => e.counter)
                      )

   incrementaContador(){
    this.store.dispatch(incrementaContador())
   }

   decrementaContador(){
    this.store.dispatch(decrementaContador())
   }

  showPeventClick(): void {
    this.showPevent = !this.showPevent
  }

  onChangeNumber(): void {
    this.myOnChangeNumber = Math.floor(Math.random() * 10000)
  }

  removeAnimal(interfaceAnimal: InterfaceAnimal): void {
    this.amimalsWithInterface = this.serviceExemploService.removeAnimal(this.amimalsWithInterface, interfaceAnimal)
  }
  removeAnimalArray(amimal: string): void {
    this.amimalsNames = this.serviceExemploService.removeAnimalArray(this.amimalsNames, amimal)
  }

  removeAnimalVazio(array: InterfaceAnimal): void {
    this.amimalsWithInterface = this.serviceExemploService.removeAnimal(this.amimalsWithInterface, array)
  }
  getAnimais(): void {
    this.serviceExemploService.getAll().subscribe((a) => (this.amimalsWithInterfaceVazio = a))
  }

  getAnimal(n:number): void {
    this.serviceExemploService.getAnimal(n).subscribe((a) => (this.showAnimal = a))
  }



}
