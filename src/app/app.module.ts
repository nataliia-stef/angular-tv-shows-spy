import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TvshowsComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
