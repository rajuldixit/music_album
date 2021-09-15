import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { CardElementComponent } from './components/card-element/card-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    DropdownFilterComponent,
    InputFilterComponent,
    CardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
