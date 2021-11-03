import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { CardElementComponent } from './card-element/card-element.component';
import { DropdownFilterComponent } from './dropdown-filter/dropdown-filter.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayerComponent } from './player/player.component';
import { GenreArtistCardComponent } from './genre-artist-card/genre-artist-card.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistartionComponent } from './registartion/registartion.component';

@NgModule({
  declarations: [
    AlbumComponent,
    DropdownFilterComponent,
    InputFilterComponent,
    CardElementComponent,
    GalleryComponent,
    PlayerComponent,
    GenreArtistCardComponent,
    LoginComponent,
    LandingPageComponent,
    RegistartionComponent
  ],
  exports: [
    CommonModule,
    AlbumComponent,
    DropdownFilterComponent,
    InputFilterComponent,
    CardElementComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    FormsModule
  ]
})
export class ComponentsModule { }
