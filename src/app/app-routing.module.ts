import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ChatComponent } from './users/chat/chat.component';
import { updatePasswordComponent } from './users/update-password/update-password.component';


const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: '' ,component: HomeComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'users' ,component: AdminUsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'chat',component:ChatComponent},
  {path: 'update', component:updatePasswordComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  HomeComponent,
  AdminComponent,
  AdminUsersComponent,
  ProfileComponent,
  AdminSidebarComponent,
  AdminFooterComponent,
  AdminHeaderComponent,
  updatePasswordComponent,
  

];