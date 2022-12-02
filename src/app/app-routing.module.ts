import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './util/authentication.guard';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'add', component: AddComponent, canActivate: [AuthenticationGuard] },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}
