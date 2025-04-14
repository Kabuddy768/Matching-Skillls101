// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-sign-in',
//   imports: [CommonModule, FormsModule,RouterModule,RouterLink],
//   templateUrl: './sign-up.component.html',
//   styleUrl: './sign-up.component.scss'
// })
// export class SignUpComponent {

// }
// signup.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports:[CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted', this.signupForm.value);
      // Handle form submission
    }
  }
}