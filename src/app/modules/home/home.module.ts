import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductsComponent } from './pages/products/products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import {RouterLink} from "@angular/router";
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ProductsComponent,
    EditProductComponent,
    ProjectsComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class HomeModule { }
