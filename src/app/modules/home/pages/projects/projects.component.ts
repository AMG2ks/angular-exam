import { Component } from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {ProjectsService} from "../../../../core/services/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any= []

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe((data) => {
      this.projects = data;
    });
  }

}
