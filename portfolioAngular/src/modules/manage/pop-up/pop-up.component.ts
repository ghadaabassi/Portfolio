import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, CommonModule],
})
export class PopUpComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopUpComponent>
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onRegister() {
    if (this.signupForm.valid) {
      console.log('Form submitted', this.signupForm.value);
      this.closeDialog();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

/*
constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}

onNoClick(): void {
  this.dialogRef.close(false);
}

onYesClick(): void {
  this.dialogRef.close(true);
}
  
*/
