import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucsesSnackBarComponent } from './snack-bar/sucses-snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorSnackBarComponent } from './snack-bar/error-snack-bar.component';


@NgModule({
  declarations: [ErrorSnackBarComponent, SucsesSnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ErrorSnackBarComponent,
    SucsesSnackBarComponent
  ]
})
export class SharedModule { }
