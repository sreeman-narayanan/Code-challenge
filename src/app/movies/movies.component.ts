import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
  providers: [DataService]
})
export class MoviesComponent implements OnInit {

 movies = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
    (data) => this.movies.push(data)
  );
  } 

   showProfile(movie) {
   alert('Here we can open a new window to show actor/actors profile');
  }



}
