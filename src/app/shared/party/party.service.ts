import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Author } from '../author/author.model';
import { Party } from './party.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  // endpoints
  private urlParties: string = environment.url + 'parties';
  private urlFav: string = environment.url + 'author-favorites';

  constructor( private httpClient: HttpClient ) { }

  // llamadas GET
  getParties(): Observable<Party[]>{

    let parties: Party[] = [];

    return this.httpClient.get(this.urlParties).pipe(
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

    return this.httpClient.post(this.urlParties, dbParty).pipe(
      catchError(this.handleError)
    );
  }

  getAuthorParties(idAuthor: string): Observable<Party[]> {
    let parties: Party[] = [];

    return this.httpClient.get(this.urlParties).pipe(
      map(dbPartyList => {
        for (let i in dbPartyList) {
          if (dbPartyList[i].author === idAuthor) {
            let party: Party = new Party(dbPartyList[i].id, 'localhost:4200/party/' + dbPartyList[i].id, new Author(dbPartyList[i].author), dbPartyList[i].content, dbPartyList[i].timestamp);
            parties.push(party);
          }
        }
        return parties;
      }),
      catchError(this.handleError)
    );
  }

  getFavoritesParties(idAuthor: string): Observable<any> {
    return this.httpClient.get(this.urlFav + '/' + idAuthor).pipe(
      map(dbFavorites => {
        return dbFavorites['parties'];
      }),
      catchError(this.handleError)
    );
  }


  setFavoriteParties(idAuthor: string, partyList: any): Observable<any> {
    let dbFavoriteParties: any = {
      'id': idAuthor,
      'parties': partyList
    };

    return this.httpClient.patch(this.urlFav + '/' + idAuthor, dbFavoriteParties).pipe(
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
