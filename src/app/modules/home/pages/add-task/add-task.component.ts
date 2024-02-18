import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectsService} from "../../../../core/services/projects.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addTaskForm: FormGroup
  projectId: any
  constructor(private projectService: ProjectsService, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.addTaskForm = this.formBuilder.group({
        title: new FormControl(null, [Validators.required,]),
        dateD: new FormControl(null, [Validators.required]),
        dateF: new FormControl(null, [Validators.required]),
      },
      {
        validators: this.dateComparisonValidator
      }
    );
  }

  get title(){
    return this.addTaskForm.get('title')?.value;
  }

  get dateD() {
    return this.addTaskForm.get('dateD')?.value;
  }

  get dateF(){
    return this.addTaskForm.get('dateF')?.value;
  }

   dateComparisonValidator(group: FormGroup): { [key: string]: any } | null {
    const dateD = group.get('dateD')?.value;
    const dateF = group.get('dateF')?.value;

    if (dateD && dateF && dateF <= dateD) {
      return { 'invalidDateRange': true };
    }

    return null;
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
  }

  addTask() {
    const task = {
      title: this.title,
      dateD: this.dateD,
      dateF: this.dateF,
    };

    this.projectService.addTaskToProject(this.projectId, task).subscribe(
      (response) => {
        this.addTaskForm.reset();
        console.log('Task added:', response);
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.error('Add task failed:', error);
      }
    );
  }



}
