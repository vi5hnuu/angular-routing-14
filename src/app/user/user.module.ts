import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';

import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from "./user-routing.module";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    RouterLink
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule {
}
