
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { MyPartiesComponent } from './my-parties/my-parties.component';
import { FavoritePartiesComponent } from './favorite-parties/favorite-parties.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent, MyPartiesComponent, FavoritePartiesComponent]
})
export class ProfileModule { }
