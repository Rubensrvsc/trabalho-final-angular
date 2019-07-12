import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  email = 'rubens@gmail.com';
  password = '1234';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  Login() {
    console.log("Você está logado")
    this.authService.login(this.email, this.password)
    this.router.navigate(['filmes']);
     
    }

  Logout(){
    console.log("Você não está logado")
    this.authService.logout();
  }

}
