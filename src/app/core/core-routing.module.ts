import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';

const routes: Routes = [{ path: '', component: CoreComponent,
children:[
  { path: 'checklist', loadChildren: () => import('../checklist/checklist.module').then(m => m.ChecklistModule) },
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
