import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import {Router,Event,NavigationStart,NavigationEnd,NavigationCancel,NavigationError} from "@angular/router";
import {slideInAnimation} from "./app.animation";
import {MessageService} from "./messages/message.service";

@Component({
  selector: 'vi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading=false;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService,private router:Router,private messageService:MessageService) {
    this.router.events.subscribe((routerEvent:Event)=>{
      this.checkRouterEvent(routerEvent);
    })
  }

  get isMessageDisplayed(){
    return this.messageService.isDisplayed;
  }
  checkRouterEvent(routerEvent:Event){
    if(routerEvent instanceof NavigationStart){
      this.loading=true;
    }
    if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
      this.loading=false;
    }
  }
  toggleMessages(){
    if(this.messageService.isDisplayed){
      this.messageService.isDisplayed=false;
      this.router.navigate([{outlets:{'popup':null}}])
      return;
    }
    this.messageService.isDisplayed=true;
    this.router.navigate([{outlets:{'popup':['messages']}}])
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
