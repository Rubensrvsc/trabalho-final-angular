import { ServiceMooviesService } from './../service-moovies.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  public lista_filmes = new Array<any>();

  constructor(private allmovies: ServiceMooviesService,private authService: AuthService,
    private router: Router) { }

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

  Logout(){
    console.log("Você não está logado")
    this.authService.logout();
    this.router.navigate(['']);
  }

  darNota(){
    this.router.navigate(['rating']);
  }

}
