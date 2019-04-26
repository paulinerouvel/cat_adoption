import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AdminComponent } from './core/components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path : 'admin', loadChildren:'./admin/admin.module#AdminModule'},
  { path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
