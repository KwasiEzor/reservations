import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserAbonnementComponent } from './components/user-abonnement/user-abonnement.component';
import { UserShowsComponent } from './components/user-shows/user-shows.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    UserAbonnementComponent,
    UserShowsComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ],
  exports:[
    ProfileComponent,
    EditProfileComponent,
    UserAbonnementComponent,
    UserShowsComponent
  ]
})
export class UserProfileModule { }
