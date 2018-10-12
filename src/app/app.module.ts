import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

import { AccueilComponent } from './accueil/accueil.component';
import { AccueilBanniereComponent } from './accueil/accueil-banniere/accueil-banniere.component';

import { Link1Component } from './link1/link1.component';
import { Link1BanniereComponent } from './link1/link1-banniere/link1-banniere.component';

import { Link2Component } from './link2/link2.component';
import { Link2BanniereComponent } from './link2/link2-banniere/link2-banniere.component';

import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signin', component: AccueilBanniereComponent, outlet: 'banniere' },

  {path: 'accueil', component: AccueilComponent},
  {path: 'accueil', component: AccueilBanniereComponent, outlet: 'banniere' },

  {path: 'link1', canActivate: [AuthGuardService], component: Link1Component},
  {path: 'link1', canActivate: [AuthGuardService], component: Link1BanniereComponent, outlet: 'banniere' },

  {path: 'link2', canActivate: [AuthGuardService], component: Link2Component},
  {path: 'link2', canActivate: [AuthGuardService], component: Link2BanniereComponent, outlet: 'banniere' },


  {path: '', redirectTo: '/accueil(banniere:accueil)', pathMatch: 'full' },
  {path: '**', redirectTo: '/accueil(banniere:accueil)' }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    MenuComponent,
    AccueilComponent,
    AccueilBanniereComponent,
    Link1Component,
    Link1BanniereComponent,
    Link2Component,
    Link2BanniereComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
