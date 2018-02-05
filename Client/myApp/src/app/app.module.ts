import {RouterModule,Routes} from '@angular/router';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//partials
import {SideBarComponent} from './../_partials/nav/sidebar.component';

import { NavFirstComponent } from './../pages/nav-first.component'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const appRoutes:Routes = [
  {path:'',component:MyApp}
  
]

@NgModule({
  declarations: [
    MyApp,
    NavFirstComponent,
    // partials / nav
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
