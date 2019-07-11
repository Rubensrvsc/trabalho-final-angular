import { ServiceMooviesService } from './../service-moovies.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rating-movie',
  templateUrl: './rating-movie.component.html',
  styleUrls: ['./rating-movie.component.css']
})
export class RatingMovieComponent implements OnInit {

  constructor( private service_movie: ServiceMooviesService,
    private location: Location) { }

  ngOnInit() {
  }

  enviarNota(id_film: number,rate: number){
    this.service_movie.rateFilm(id_film,rate);
    this.location.back();
  }

}
