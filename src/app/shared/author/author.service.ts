import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private urlAuthors: string = 'http://localhost:3000/authors';
  private urFav: string = 'http://localhost:3000/author-favorites';

  constructor(private httpClient: HttpClient) { }

  getAuthor(id: string): Observable<Author> {
    let author: Author = null;

    return this.httpClient.get<Author>(this.urlAuthors + '/' + id).pipe(
      map(dbAuthor => {
        author = new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        author.url = 'http://localhost:4200/author/'+dbAuthor.id;
        return author;
      })
    );
  }

  setAuthor(idAuthor: string, fullName: string, image: string): Observable<any> {
    let dbAuthor: any = { 'id': idAuthor, 'fullName': fullName, 'image': image };

    return this.httpClient.post(this.urlAuthors, dbAuthor).pipe(
      catchError(this.handleError)
    );
  }

  createFavorite(idAuthor: string): Observable<any> {
    let dbAuthorFav: any = { 'id': idAuthor, 'parties': [] };

    return this.httpClient.post(this.urFav, dbAuthorFav).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
