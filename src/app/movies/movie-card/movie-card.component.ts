import { Component, OnInit, Input } from '@angular/core';
import { IMovie, IMovieDetails } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  movieDetails: IMovieDetails;
  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    if (this.movie) {
      this.movieService.getMovieDetails(this.movie.imdbID)
      .subscribe((data: IMovieDetails) => {
        this.movieDetails =  data;
      });
    }
  }

  getFilmPoster(poster: string): string {
    const index: number = poster.indexOf('/images/M/');
    const indexAt: number = poster.indexOf('@');
    const indexV1: number = poster.indexOf('._V1');

    let posterId: string;
    if (indexAt > -1) {
      posterId = poster.slice(index + 10, indexAt);
    } else {
      posterId = poster.slice(index + 10, indexV1);

    }
    const jpgIndex: number = poster.indexOf('.jpg');
    const str: string = poster.slice(jpgIndex, poster.length);
    return `assets/batmanImages/${posterId + str}`;
  }
}
