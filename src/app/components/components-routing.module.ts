import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthGuard } from '../shared/guards/auth.guard';

const routes:Routes=[
  {
    path:'',
    children:[
     {
      path:'dashboard',
      component:DashboardComponent,
      // canActivate:[AuthGuard]
     },
     {
      path:'**',
      redirectTo:'dashboard'
     }
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModule { }
