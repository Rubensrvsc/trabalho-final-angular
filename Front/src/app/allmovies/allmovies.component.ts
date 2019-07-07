import { ServiceMooviesService } from './../service-moovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  public lista_filmes = new Array<any>();

  constructor(private allmovies: ServiceMooviesService) { }

  ngOnInit() {
    return this.allmovies.getLatestMovies().subscribe(
      data=>{
        const response=(data as any);
        const retorno = JSON.parse(response._body)
        this.lista_filmes = retorno.results;
        console.log(retorno);
      },error=>{
        console.log(error)
      }
    );
  }

}
