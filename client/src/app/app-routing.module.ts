import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQueComponent } from './add-que/add-que.component';
import { ShowComponent} from './show/show.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent},
  {path: "dashboard", pathMatch: 'full', component: DashboardComponent},
  {path: "new_que", pathMatch: 'full', component: AddQueComponent},
  {path: "show_ans/:id", pathMatch: 'full', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
