import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadFileService {

  private postUrl: string = "";  

  constructor(private http: Http) { }

  result: string;

  /*
	Upload file method that simply uploads file, does not return a string

	JSON object is of the form 
	{
		base64,
		tableName,
		description,
		title,
    ext,
    featured,
    chartTypes
	}
  */
  uploadFile(jsonObj: Object, callback: (data) => void) {
    return this.http.post(this.postUrl, JSON.stringify(jsonObj))
    .map(res => this.result = res.text())
    .catch(error => Observable.throw(error))
    .subscribe(
      data => callback(data),
      // error => console.log(error)
    );
  }

}
