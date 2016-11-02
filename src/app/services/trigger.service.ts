import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Trigger } from '../model/trigger';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TriggerService {

  triggers: Trigger[];
  private heroesUrl = 'data/Downstream.json';  // URL to web api

  constructor(
    private http: Http
  ) {
  }

  getTriggers(): Promise<Trigger[]> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-id', '1');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.heroesUrl, headers)
      .toPromise()
      .then((response) => this.extractData(response))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    this.triggers = body.products as Trigger[];
    return body.products as Trigger[] || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTrigger(id: number | string): Trigger {
    let trigger = this.triggers.find(trigger => trigger.id === id);
    return trigger;
  }

}

