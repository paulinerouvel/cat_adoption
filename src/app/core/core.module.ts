import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [],
  exports: [],
  providers: [],
  declarations: [HomeComponent, PageNotFoundComponent, AdminComponent]
})

export class CoreModule {}
