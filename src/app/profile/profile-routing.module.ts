import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { MyPartiesComponent } from './my-parties/my-parties.component';
import { FavoritePartiesComponent } from './favorite-parties/favorite-parties.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const profileRoutes: Routes = [
    {
      path: 'profile/:id',
      component: ProfileComponent,
      children: [
                  { path: '', redirectTo: 'my-parties', pathMatch: 'full' },
                  { path: 'my-parties', component: MyPartiesComponent },
                  { path: 'favorite-parties', component: FavoritePartiesComponent },
                  { path: 'edit', component: EditProfileComponent }
                ]
    },


];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ]
})
export class ProfileRoutingModule { }
