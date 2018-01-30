import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

	api_url = environment.site_url + environment.quotes_url;

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }

  getQuotes(){
  	return this.http.get(this.api_url);
  }

  

  postQuote(content, author){

  		let data = {
  				title : content,
  				content : content,
  				writer: author,
  				status : 'published'
  			};

  		let token = localStorage.getItem('WpToken');

  		console.log(data , token);
  	
  		let headers = new HttpHeaders({
  			'Content-Type': 'application/json',
  			'Authorization': 'Bearer ${token}'
  		});

  		return this.http.post(this.api_url, data, { headers: headers} );
  }

}
