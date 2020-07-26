import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepoComponent } from './list-repo/list-repo.component';
const routes: Routes = [
  { path: '', redirectTo: '/listRepo', pathMatch: 'full' },
  { path: 'listRepo', component: ListRepoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
