import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/shared/components/login-modal/login-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.form = new FormGroup ({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  send() {
    if (this.form.valid) {
      const isAuth = this.authService.login(
        this.form.get('login').value,
        this.form.get('password').value
      );
      if (isAuth) {
            this.router.navigate(['/products']);

      } else {
        alert('wrong password');
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
