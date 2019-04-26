import {NgModule} from '@angular/core';
import { AdminRoutingModule } from './admin-routing module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [AdminRoutingModule],
  providers: [AuthenticationService]
})

export class AdminModule {}
