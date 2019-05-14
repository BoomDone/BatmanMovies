import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { MovieComponent } from './movie-card/movie-card.component';
import { MovieCardMobileComponent } from './movie-card-mobile-info/movie-card-mobile-info.component';
import { MovieCardComponent } from './movie-card-info/movie-card-info.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviesPage, MovieComponent, MovieCardComponent, MovieCardMobileComponent]
})
export class MoviesPageModule {}
