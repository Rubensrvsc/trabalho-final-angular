import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { DetailmovieComponent } from './detailmovie/detailmovie.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AllmoviesComponent,
    DetailmovieComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',  component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'filmes', component: AllmoviesComponent },
      { path: 'detail-filme', component: DetailmovieComponent }
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
