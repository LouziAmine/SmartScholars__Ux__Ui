import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { Conteneur1Component } from './component/home/conteneur-1/conteneur-1.component';
import { Conteneur2Component } from './component/home/conteneur-2/conteneur-2.component';
import { AdvertisingNetworkComponent } from './component/advertising-network/advertising-network.component';
import { ResearchResourceComponent } from './component/research-resource/research-resource.component';
import { ListResourceComponent } from './component/list-resource/list-resource.component';



import {DataServiceService} from './Service/data-service.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Conteneur1Component,
    Conteneur2Component,
    AdvertisingNetworkComponent,
    ResearchResourceComponent,
    ListResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataServiceService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
