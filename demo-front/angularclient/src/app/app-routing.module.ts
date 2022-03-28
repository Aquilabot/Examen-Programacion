import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { ListComponent } from './student/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'estudiante', pathMatch: 'full' },
  //{ path: '**', pathMatch   : 'full', component: NotFoundComponent},
  { path: 'estudiante', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
