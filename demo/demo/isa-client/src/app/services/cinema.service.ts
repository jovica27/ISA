import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';

@Injectable()
export class CinemaService {

  constructor(private http: Http) { 

  }

  getCinemas(){
    return this.http.get("http://localhost:8080/cinemas/getAll").map(data => data.json())
    .catch((err:HttpErrorResponse) =>
    {
        // alert(err.status + " " + err.error.error + " \n" + err.error.message);
        return Observable.throw(err);
    });
  
  }

  registerCinema(cinema : any) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert(JSON.stringify(cinema));
    return this.http.post('http://localhost:8080/public/cinemas/register', 
      JSON.stringify(cinema), { headers : headers }).map((data : Response) => data.json());
  }

}
