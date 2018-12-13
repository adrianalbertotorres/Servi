import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiComponent } from './servi/servi.component';

import {EquipoService} from'./equipo.service';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'Home', component:HomeComponent },
  { path: 'servi', component:ServiComponent },

  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
