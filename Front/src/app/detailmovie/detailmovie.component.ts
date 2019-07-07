import { Component, OnInit } from '@angular/core';
import { ServiceMooviesService } from './../service-moovies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.css']
})
export class DetailmovieComponent implements OnInit {

  public detail_filme = new Array<any>();

  constructor(private service_detail: ServiceMooviesService,private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getDetail(){
    const id =+ this.route.snapshot.paramMap.get('id');
    this.service_detail.getMovieDetails(id).subscribe(
      data=>{
        const response=(data as any);
        const retorno = JSON.parse(response._body)
        this.detail_filme = retorno.results;
        console.log(retorno);
      },error=>{
        console.log(error)
      }
    );
  }

}
