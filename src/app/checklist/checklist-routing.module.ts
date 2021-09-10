import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewChecklistComponent } from './view-checklist/view-checklist.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'all', component: ChecklistComponent },
      { path: 'view/:id', component: ViewChecklistComponent },
      {path:'',redirectTo:'all',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
