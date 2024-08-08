import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ListResourceDetails1Component } from './component/list-resource/list-resource-details-1/list-resource-details-1.component';

import { DetailsComponent } from './component/details/details.component'; 

import { ListResourceDetails2Component } from './component/list-resource/list-resource-details-2/list-resource-details-2.component';

import { Details2Component  } from './component/details/details2/details2.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:level', component: ListResourceDetails1Component },
  { path: 'Details__Establishment/:level', component: DetailsComponent },
  { path: 'Details__Branch/:level', component: Details2Component },
  { path: 'detailsbb/:level', component: ListResourceDetails2Component },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
