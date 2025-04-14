// job-posting.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {
  jobPostingForm!: FormGroup;
  skills: string[] = ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Unit Testing'];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.jobPostingForm = this.fb.group({
      jobTitle: ['Python Backend Developer', Validators.required],
      employmentType: ['Full-time', Validators.required],
      experienceLevel: ['Mid-level', Validators.required],
      location: ['Remote', Validators.required],
      companyName: ['Example Corp', Validators.required],
      jobDescription: ['', Validators.required],
      minSalary: [''],
      maxSalary: [''],
      responsibilities: ['', Validators.required],
      deadline: [''],
      maxApplicants: [''],
      howToApply: ['Apply through our website', Validators.required]
    });
  }

  saveAsDraft(): void {
    // Implement save draft functionality
    console.log('Saving draft...');
    console.log(this.jobPostingForm.value);
  }

  publishJob(): void {
    // Implement publish job functionality
    if (this.jobPostingForm.valid) {
      console.log('Publishing job...');
      console.log(this.jobPostingForm.value);
    } else {
      this.markFormGroupTouched(this.jobPostingForm);
    }
  }

  suggestSkills(): void {
    // Implement skill suggestion functionality
    console.log('Suggesting skills...');
    // Example of skills suggestion based on job title
    const jobTitle = this.jobPostingForm.get('jobTitle')!.value;
    if (jobTitle && jobTitle.toLowerCase().includes('python')) {
      const suggestedSkills = ['Flask', 'FastAPI', 'AWS', 'Docker', 'Kubernetes'];
      console.log('Suggested skills:', suggestedSkills);
    }
    // if (this.jobPostingForm.get('jobTitle').value?.toLowerCase().includes('python')) {
    //   // These would be suggested but not automatically added
    //   const suggestedSkills = ['Flask', 'FastAPI', 'AWS', 'Docker', 'Kubernetes'];
    //   console.log('Suggested skills:', suggestedSkills);
    // }
  }

  addSkill(skill: string): void {
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
    }
  }

  removeSkill(skill: string): void {
    this.skills = this.skills.filter(s => s !== skill);
  }

  goBack(): void {
    // Implement navigation back
    console.log('Going back...');
    // You would typically use the Router service here
    // this.router.navigate(['/jobs']);
  }

  // Helper method to mark all controls in a form group as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}