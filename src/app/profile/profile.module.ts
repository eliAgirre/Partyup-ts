
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { MyPartiesComponent } from './my-parties/my-parties.component';
import { FavoritePartiesComponent } from './favorite-parties/favorite-parties.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, MyPartiesComponent, FavoritePartiesComponent, EditProfileComponent]
})
export class ProfileModule { }
