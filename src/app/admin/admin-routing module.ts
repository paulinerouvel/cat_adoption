import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../core/components/admin/admin.component';
import { AuthGuard } from '../core/guard/auth/auth.guard';


const routes: Routes = [
  { path : 'admin', 
    component : AdminComponent,
    canActivate : [AuthGuard]
  },
  {
  path: 'admin/:firstname/:lastname',
  component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
