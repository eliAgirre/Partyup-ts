import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Author } from '../author/author.model';
import { Party } from './party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  // endpoints
  private urlPartis: string = "http://localhost:3000/parties";
  private urlFav: string = "http://localhost:3000/author-favorites";

  constructor( private httpClient: HttpClient ) { }

  // llamadas GET
  getParties(): Observable<Party[]>{

    let parties: Party[] = [];

    return this.httpClient.get(this.urlPartis).pipe(
      map(dbPartyList => {
        for (let i in dbPartyList) {
          let party: Party = new Party(dbPartyList[i].id, 'localhost:4200/party/' + dbPartyList[i].id, new Author(dbPartyList[i].author), dbPartyList[i].content, dbPartyList[i].timestamp);
          parties.push(party);
        }
        return parties;
      }),
      catchError(this.handleError)
    );

  }

  setParty(party: Party): Observable<any> {
    let dbParty: any = {
      'id': party.id,
      'author': party.author.id,
      'by': party.author.fullName,
      'content': party.content,
      'timestamp': party.timestamp
    };

    return this.httpClient.post(this.urlPartis, dbParty).pipe(
      catchError(this.handleError)
    );
  }

  getFavByAuthor(idAuthor: string, idParty: string): Observable<boolean>{
    return this.httpClient.get(this.urlFav + '/' + idAuthor).pipe(
      map(response => {
        let favorites: string[] = response['parties'];
        if (favorites.indexOf(idParty) == -1) {
          return false;
        } else {
          return true;
        }
      }),
      catchError(this.handleError)
    );
  }

  // method for errors
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
