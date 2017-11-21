import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQueComponent } from './add-que/add-que.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent},
  {path: "dashboard", pathMatch: 'full', component: DashboardComponent},
  {path: "new_que", pathMatch: 'full', component: AddQueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
