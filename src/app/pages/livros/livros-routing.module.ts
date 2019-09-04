import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosListComponent } from './livros-list/livros-list.component';


const routes: Routes = [
  { path: '', component: LivrosListComponent },
  { path: ':id', component: LivrosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
