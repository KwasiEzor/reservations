import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserAbonnementComponent } from './components/user-abonnement/user-abonnement.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {path:"",component:UserProfileComponent},
  {path:"user-profile",component:ProfileComponent},
  {path:"user-abonnement",component:UserAbonnementComponent},
  {path:"user-edit",component:EditProfileComponent},
  {path:"user-shows",component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
