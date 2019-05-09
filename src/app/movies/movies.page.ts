import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from './movies.model';
import { pluck, each, contains , sortBy} from 'underscore';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: IMovie[];
  filtered: IMovie[];
  decades: string[] = [];
  constructor(private movieService: MoviesService) {
    this.movieService.getMovies()
    .subscribe((data: any) => {
      this.movies = data.Search;
      this.filtered = this.movies;
      this.getMovieDecades();
    });
  }

  ngOnInit() {
  }

  filterDecade(event: any) {
    this.filtered = this.movies.filter(movie => this.isYearInDecade(movie.Year, event.detail.value));
  }

  isYearInDecade(year: string, decade: string): boolean {
    if (decade === 'all') {
      return true;
    } else if (year.indexOf('–') > -1) { // If range get both years
      const indexHyphen: number = year.indexOf('–');
      let firstYear: string = (year.slice(0, indexHyphen));
      firstYear = firstYear.slice(0, firstYear.length - 1) + '0';

      let secondYear: string =  year.slice(indexHyphen + 1, year.length);
      secondYear = secondYear.slice(0, secondYear.length - 1) + '0';

      return firstYear === decade || secondYear === decade;
    } else {
      return (year.slice(0, year.length - 1) + '0') === decade;
    }
  }


  getMovieDecades(): void {
    const years: string[] = pluck(this.movies, 'Year');
    each(years, (year: string) => {
      if (year.indexOf('–') > -1) {
        const decadeRanges: string[] = this.getDecadesFromRange(year);
        each(decadeRanges, (decade) => {
          if (!contains(this.decades, decade)) {
            this.decades.push(decade);
          }
        });
      } else {
        const decade = year.slice(0, year.length - 1) + '0';
        if (!contains(this.decades, decade)) {
          this.decades.push(decade);
        }
      }
      this.decades = sortBy(this.decades, (decade) => {
        return parseInt(decade, 10);
      });
    });
  }

  private getDecadesFromRange(range: string): string[] {
    const indexHyphen: number  = range.indexOf('–');
    let firstYear = range.slice(0, indexHyphen);
    firstYear = firstYear.slice(0, firstYear.length - 1) + '0';

    let secondYear = range.slice(indexHyphen + 1, range.length);
    secondYear = secondYear.slice(0, secondYear.length - 1) + '0';

    return [firstYear, secondYear];
  }
}
