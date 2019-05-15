import { Injectable } from '@angular/core';
// import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieDetails } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = '9bfc98b7';
  constructor(private http: HttpClient) { }

  getMovies()  { // Observable<>
    return this.http.get(`https://www.omdbapi.com/?s=Batman&apikey=${this.apiKey}`);
  }

  getMovieDetails(id: string): Observable<IMovieDetails> {
     return this.http.get<IMovieDetails>(`https://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`);
  }
}
