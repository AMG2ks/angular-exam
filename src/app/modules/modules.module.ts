import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {AuthenticationModule} from "./authentication/authentication.module";
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthenticationModule,
    BrowserModule,
    HomeModule
  ]
})
export class ModulesModule { }
