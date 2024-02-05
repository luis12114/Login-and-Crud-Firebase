import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
