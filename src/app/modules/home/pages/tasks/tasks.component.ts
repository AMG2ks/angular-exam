import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../core/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../core/models/product";
import {ProjectsService} from "../../../../core/services/projects.service";
import {Task} from "../../../../core/models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: any=[];
projectID: any
  constructor(private projectService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projectID = this.route.snapshot.params['id']
    this.loadTasks();
  }

  loadTasks(): void {
    this.projectService.getAllTasks(this.projectID).subscribe((data) => {
      this.tasks = data;
    });
  }


}
