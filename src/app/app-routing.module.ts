import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DisplayContadorComponent } from './components/display-contador/display-contador.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
  {path: '', component:FirstComponentComponent},
  {path: 'count', component:DisplayContadorComponent},
  {path: 'change', component:ChangeNumberComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
