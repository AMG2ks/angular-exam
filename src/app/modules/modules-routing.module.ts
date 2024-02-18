import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./home/pages/landing-page/landing-page.component";
import {LoginComponent} from "./authentication/pages/login/login.component";
import {RegisterComponent} from "./authentication/pages/register/register.component";
import {ProductsComponent} from "./home/pages/products/products.component";
import {EditProductComponent} from "./home/pages/edit-product/edit-product.component";
import {ProjectsComponent} from "./home/pages/projects/projects.component";
import {TasksComponent} from "./home/pages/tasks/tasks.component";
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";
import {AddTaskComponent} from "./home/pages/add-task/add-task.component";

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'addTask/:id', component: AddTaskComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
