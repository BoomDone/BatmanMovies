import { Component, OnInit, Input } from '@angular/core';
import { IMovieDetails } from '../movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card-info.component.html',
  styleUrls: ['./movie-card-info.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieDetails: IMovieDetails;

  constructor() { }

  ngOnInit() {}

  viewOnImdb(): void {
    window.open(`https://www.imdb.com/title/${this.movieDetails.imdbID}/`, '_blank');
  }
}
