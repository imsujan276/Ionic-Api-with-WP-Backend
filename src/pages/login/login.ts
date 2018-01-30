import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	username;
	password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {

  	if(localStorage.getItem('WpToken')){
  		this.navCtrl.setRoot('TabsPage');
  	}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    console.log("Username : "+this.username);

    	this.authProvider.postLogin(this.username, this.password).subscribe( data => {
	    	console.log( data);

	    	if(Object.keys(data).length > 0 && data.constructor === Object){
	    		localStorage.setItem('WpToken', data.token);
	    		this.navCtrl.setRoot('TabsPage');
	    	}
	    });
    
    
  }
}
