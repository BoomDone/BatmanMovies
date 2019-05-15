import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { MoviesPage } from './movies.page';
import { MoviesService } from './movies.service';
import { IMovie } from './movies.model';

describe('MoviesPage', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;
  const films: IMovie[] = [
    { Poster: 'test.jpg', Title: 'Test Movie', Type: 'movie', Year: '1984', imdbID: 'test1'},
    { Poster: 'test2.jpg', Title: 'Test2 Movie', Type: 'movie', Year: '1993', imdbID: 'test2'},
    { Poster: 'test3.jpg', Title: 'Test3 Movie', Type: 'movie', Year: '2002', imdbID: 'test3'},
    { Poster: 'test4.jpg', Title: 'Test4 Movie',  Type: 'movie', Year: '2012', imdbID: 'test4'},
    { Poster: 'test5.jpg',  Title: 'Test5 Movie',  Type: 'movie', Year: '2018', imdbID: 'test5'},
    { Poster: 'test6.jpg', Title: 'Test6 Movie', Type: 'movie', Year: '1974–1983', imdbID: 'test6'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MoviesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('getMovieDecades', () => {
    it('should create a list of decades', () => {
      component.movies = films;
      fixture.detectChanges();
      component.getMovieDecades();
      const decadesTestList = ['1970', '1980', '1990', '2000', '2010'];

      expect(component.decades).toEqual(decadesTestList);
    });
  });
  describe('filterDecade', () => {
    it('should get a list of movies by decade 1980', () => {
      component.movies = films;
      fixture.detectChanges();
      component.filterDecade({detail: {value: '1980'}});

      expect(component.filtered.length).toEqual(2);
    });
    it('should get a list of movies by decade 1970', () => {
      component.movies = films;
      fixture.detectChanges();
      component.filterDecade({detail: {value: '1970'}});

      expect(component.filtered.length).toEqual(1);
    });
    it('should get a list of all movies ', () => {
      component.movies = films;
      fixture.detectChanges();
      component.filterDecade({detail: {value: 'all'}});

      expect(component.filtered.length).toEqual(6);
    });
  });
  describe('detectChanges', () => {
    it('year is not in decade ', () => {
      component.movies = films;
      fixture.detectChanges();
      const isInDecade = component.isYearInDecade('1988', '1990');
      expect(isInDecade).toEqual(false);
    });
    it('year is not in decade range', () => {
      component.movies = films;
      fixture.detectChanges();
      const isInDecade = component.isYearInDecade('1990–2010', '1980');
      expect(isInDecade).toEqual(false);
    });
    it('year is in decade range', () => {
      component.movies = films;
      fixture.detectChanges();
      const isInDecade = component.isYearInDecade('1990–2010', '1990');
      expect(isInDecade).toEqual(true);
    });
  });
});


