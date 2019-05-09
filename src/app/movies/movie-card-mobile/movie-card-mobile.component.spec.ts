import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardMobileComponent } from './movie-card-mobile.component';

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
describe('MovieCardMobileComponent', () => {
  let component: MovieCardMobileComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, MovieCardMobileComponent ],
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
