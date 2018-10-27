import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchProfilesService {

  private getUserDetailsEndPoint = 'https://api.github.com/users/';
  searchProfilesEndPoint: any;
  getProfileDetailsEndPoint: any;
  constructor(private http: Http) { }

  getProfilesByPlace(place: string) {
    const url = `${this.searchProfilesEndPoint}location:${place}`;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDetailsByUserName(username: string) {
    if (username) {
      const url = `${this.getProfileDetailsEndPoint}${username}`;
      return this.http.get(url)
        .map(this.newMethod())
        .catch(this.handleError);
    }
  }

  private newMethod(): (res: Response) => any {
    return (res: Response) => res.json();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}