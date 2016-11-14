import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     MaterialModule.forRoot(),
     RouterModule.forRoot([
      {path: 'games',  component: GamesComponent},
        {path: 'movies',  component: MoviesComponent},
       {path: '',  component: MoviesComponent}
    ])
   ],
     exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
