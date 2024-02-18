import {Project} from "./project";

export class Task{
  id!:number
  title!:string
  dateD!: string
  dateF!: string
  status!:string
  project!:Project
}
