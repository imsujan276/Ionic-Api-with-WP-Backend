import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuotesProvider } from '../../providers/quotes/quotes';

import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

	quotes;

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider, public loadingCtrl: LoadingController) {
  	this.quotesProvider.getQuotes().subscribe( data => {
  		console.log(data);
  		this.quotes = data;
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  showQuoteDetail(quote){

  	let loader = this.loadingCtrl.create({
      content: "Loading Quote...",
      duration: 2000
    });
    loader.present();
    
  	this.navCtrl.push('QuotesDetailPage', {quote: quote});
  }

  onCreateQuote(){
  	this.navCtrl.push('CreateQuotePage');
  }

}
