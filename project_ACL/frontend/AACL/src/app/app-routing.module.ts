import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GroupComponent } from './group/group.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { UsergroupComponent } from './usergroup/usergroup.component';


const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent ,runGuardsAndResolvers: 'always',},
  { path : 'createuser' ,component:CreateuserComponent },
  { path : 'home' ,component: HomeComponent  },
  { path : 'userlist' , component: UserlistComponent  },
  { path : 'group' , component : GroupComponent },
   { path : 'grouplist' , component : GrouplistComponent },
   { path : 'usergroup' , component : UsergroupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
