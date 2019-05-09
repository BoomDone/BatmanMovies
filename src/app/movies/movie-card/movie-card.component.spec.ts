import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';

@Component({
    selector: 'test-component-wrapper',
    template: '<app-movie-card [movieDetails]="filmDetails"></app-movie-card>'
  })
  class TestWrapperComponent {
    filmDetails = {
        Actors: 'Smokey, Bandit, Eevee',
        Awards: 'Oscar',
        Country: 'USA',
        Director: 'Me',
        Genre: 'humor',
        Language: 'English',
        Metascore: '',
        Plot: 'Cats sleeping, cats meowing, cats playing',
        Poster: 'test.jpg',
        Rated: 'PG-13',
        Ratings: ['na'],
        Released: 'June 24, 2019',
        Response: '',
        Runtime: '120min',
        Title: 'Cats Meow',
        Type: 'test',
        Writer: 'me',
        Year: '2019',
        imdbID: 'testCat',
        imbdRating: 'test',
        imbdVotes: 'teat',
        totalSeasons: 'test'
    };
  }
describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, MovieCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
