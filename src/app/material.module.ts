import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, 
         MatCardModule, MatIconModule,
         MatTableModule, MatMenuModule,
         MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
            MatToolbarModule, 
            MatCardModule,
            MatIconModule,
            MatTableModule,
            MatMenuModule,
            MatInputModule,
            MatListModule],
  exports: [MatButtonModule, 
            MatToolbarModule, 
            MatCardModule,
            MatIconModule,
            MatTableModule,
            MatMenuModule,
            MatInputModule,
            MatListModule],
})
export class MaterialModule { }