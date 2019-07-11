import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceMooviesService {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1){
      return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  getMovieDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey());
}

rateFilm(filmeid: number,nota: number){
  this.http.post(this.baseApiPath + `/movie/${filmeid}/rating?api_key=`+this.getApiKey(),
  {"value":nota})
}

  getApiKey(): string{

    return "d0ec1092678c868ebfe687360cc6a237";

  }
}
