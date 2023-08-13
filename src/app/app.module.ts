import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import {AppRoutingModule} from "./app-routing.module";
import {LottieModule} from "ngx-lottie";
import player from "lottie-web";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, {delay: 1000}),
    LottieModule.forRoot({player: playerFactory}),
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
