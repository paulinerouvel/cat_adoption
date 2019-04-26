import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConstantesService } from './services/constantes/constantesservice';

@NgModule({
  imports: [],
  exports: [],
  providers: [ConstantesService],
  declarations: [HomeComponent, PageNotFoundComponent, AdminComponent]
})

export class CoreModule {}
