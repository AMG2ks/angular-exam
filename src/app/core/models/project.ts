import {Task} from "./task";

export class Project{
  id!:number
  title!:string
  description!:string
  tasks!:Task[]
}
