import {Component, enableProdMode} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';

enableProdMode();

@Component({
  template: `
<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
}

ionicBootstrap(MyApp);
