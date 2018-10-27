import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { SearchProfilesService } from './search-profiles.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }