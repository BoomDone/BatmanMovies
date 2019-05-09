import { Component, OnInit, Input } from '@angular/core';
import { IMovieDetails } from '../movies.model';

@Component({
  selector: 'app-movie-card-mobile',
  templateUrl: './movie-card-mobile.component.html',
  styleUrls: ['./movie-card-mobile.component.scss'],
})
export class MovieCardMobileComponent implements OnInit {
  @Input() movieDetails: IMovieDetails;

  constructor() { }

  ngOnInit() {}

}
