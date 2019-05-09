import { Injectable } from '@angular/core';
// import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = '9bfc98b7';
  constructor(private http: HttpClient) { }
  films =
    {Search: [{
      Poster: 'movie1.JPG',
      Title: 'batman1',
      Type: 'type',
      Year: '1988',
      imdbID: '12345'
      },
      {
        Poster: 'movie1.JPG',
      Title: 'batman2',
      Type: 'type',
      Year: '1998',
      imdbID: '123456'
      },
      {
        Poster: 'movie1.JPG',
      Title: 'batman2',
      Type: 'type',
      Year: '2098',
      imdbID: '1234566'
      }
    ]};

  getMovies() {
    return this.http.get(`https://www.omdbapi.com/?s=Batman&apikey=${this.apiKey}`);
  }

  getMovieDetails(id: string) {
     return this.http.get(`https://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`);
  }
}
