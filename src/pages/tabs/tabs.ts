import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'QuotesPage';
  tab2Root = 'ContactPage';

  constructor() {

  }
}
