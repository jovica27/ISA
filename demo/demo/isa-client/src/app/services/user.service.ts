import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, Headers} from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/Rx'


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // getUsersByIdIn(admins : any){

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   alert(JSON.stringify(admins))
  //   return this.http.get("http://localhost:8080/public/getUserAdmins/" + JSON.stringify(admins), { headers : headers }).map(data => data.json())
  //   .catch((err:HttpErrorResponse) =>
  //   {
  //       alert(err.status + " " + err.error.error + " \n" + err.error.message);
  //       return Observable.throw(err);
  //   });
  
  // }

  getUsers(){
    return this.http.get("http://localhost:8080/getOnlyUsers").map(data => data.json())
    .catch((err:HttpErrorResponse) =>
    {
        alert(err.status + " " + err.error.error + " \n" + err.error.message);
        return Observable.throw(err);
    });
  
  }

  getFanZoneAdmins(){
    return this.http.get("http://localhost:8080/getFanZoneAdmins").map(data => data.json())
    .catch((err:HttpErrorResponse) =>
    {
        alert(err.status + " " + err.error.error + " \n" + err.error.message);
        return Observable.throw(err);
    });
  
  }

  getSystemAdmins(){
    return this.http.get("http://localhost:8080/getSystemAdmins").map(data => data.json())
    .catch((err:HttpErrorResponse) =>
    {
        alert(err.status + " " + err.error.error + " \n" + err.error.message);
        return Observable.throw(err);
    });
  
  }

  updateUserRole(user : any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert(JSON.stringify(user));
    return this.http.put('http://localhost:8080/changeUserRole', 
      JSON.stringify(user), { headers : headers }).map((data : Response) => data.json());
  }

  updateUserInfo(user : any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert("servis"+JSON.stringify(user));
    return this.http.put('http://localhost:8080/changeUserInfo', 
      JSON.stringify(user), { headers : headers }).map((data : Response) => data.json());
  }

  //SLUCAJNO SI BIO OVDE PROMENIO PUTANJU NA /user/getAllTickets" MOZDA SI JOS NESTO PROEMNIO
  reserveTicket(ReservationTicketDTO :any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert(JSON.stringify(ReservationTicketDTO));
    return this.http.get('http://localhost:8080/public/tickets/reserveTicket').map((data : Response) => data.json());
  }

  getAllTickets(){
    return this.http.get("http://localhost:8080/user/getAllTickets").map(data => data.json())
    .catch((err:HttpErrorResponse) =>
    {
        alert(err.status + " " + err.error.error + " \n" + err.error.message);
        return Observable.throw(err);
    });
  }
    cancleTicket(ticketId:any){
      return this.http.get("http://localhost:8080/user/cancleReservation/"+ticketId).map(data => data.json())
      .catch((err:HttpErrorResponse) =>
      {
          alert(err.status + " " + err.error.error + " \n" + err.error.message);
          return Observable.throw(err);
      });
    }
  
}
