import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
 

@NgModule({
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    DragDropModule
  ],
  exports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    DragDropModule
  ],
})
export class MaterialModule { }
