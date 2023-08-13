import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import {RouterModule, Routes} from "@angular/router";

const MessageRoutes:Routes=[
  {path:'messages', component: MessageComponent,outlet:'popup'}
]
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(MessageRoutes)
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
