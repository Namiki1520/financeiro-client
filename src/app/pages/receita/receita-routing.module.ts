import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaComponent } from './receita.component';

const routes: Routes = [{
    path: '',
    component: ReceitaComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ReceitaRoutingModule{}