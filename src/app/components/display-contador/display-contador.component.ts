import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAappState } from 'src/app/store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent {

  constructor(private store:Store<{app: IAappState}>){

  }
  
  counter$ = this.store.select('app')
                      .pipe(
                        map(e => e.counter)
                      )
}
