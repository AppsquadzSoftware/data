import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist/checklist.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { ViewChecklistComponent } from './view-checklist/view-checklist.component';


@NgModule({
  declarations: [ChecklistComponent, LayoutComponent, ViewChecklistComponent],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    MaterialModule
  ]
})
export class ChecklistModule { }
