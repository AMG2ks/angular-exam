import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = "http://localhost:3000/projects";

  constructor(private _http: HttpClient) { }

  getAllProjects() {
    return this._http.get(this.apiUrl);
  }

  addTaskToProject(projectId: number, task: any): Observable<any> {
    const url = `${this.apiUrl}/${projectId}/tasks`;
    return this._http.post(url, task);
  }

  getAllTasks(projectId: number): Observable<any> {
    const url = `${this.apiUrl}/${projectId}/tasks`;
    return this._http.get(url);
  }
}
