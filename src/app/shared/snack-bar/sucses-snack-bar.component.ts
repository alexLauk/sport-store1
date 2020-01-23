import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sucses-snack-bar',
  template: '<span class="default-color text-white">{{data}}</span>',
  styles: [`
  .default-color
  .text-white
  `]

})

export class SucsesSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
