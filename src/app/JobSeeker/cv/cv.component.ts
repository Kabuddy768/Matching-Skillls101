import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface CvVersion {
  name: string;
  date: string;
}

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  lastUploaded: string = 'Mar 10, 2025';
  fileSize: string = '2.4 MB';
  fileName: string = 'resume.pdf';
  currentStep: number = 2;
  steps: number[] = [1, 2, 3, 4, 5, 6];
  
  previousVersions: CvVersion[] = [
    { name: 'CV_March_2025.pdf', date: 'Mar 10, 2025' },
    { name: 'CV_February_2025.pdf', date: 'Feb 15, 2025' },
    { name: 'CV_January_2025.pdf', date: 'Jan 20, 2025' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  uploadNewCV(): void {
    console.log('Upload new CV clicked');
    // Implement file upload logic here
  }

  viewCV(): void {
    console.log('View CV clicked');
    // Implement CV view logic here
  }

  downloadCV(version: CvVersion): void {
    console.log(`Downloading ${version.name}`);
    // Implement download logic here
  }

  copyCV(version: CvVersion): void {
    console.log(`Copying ${version.name}`);
    // Implement copy logic here
  }

  goBack(): void {
    console.log('Going back');
    // Implement navigation logic here
  }

  saveAndContinue(): void {
    console.log('Save and continue');
    // Implement save and navigation logic here
  }
}
