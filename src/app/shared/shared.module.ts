import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from './components/login-modal/login-modal.component';



@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class SharedModule { }
