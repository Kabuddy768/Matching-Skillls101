import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recruiter-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './recruiter-dashboard.component.html',
  styleUrl: './recruiter-dashboard.component.scss'
})
export class RecruiterDashboardComponent {
  userName = 'Jane';
  totalCandidates = 1234;
  candidatesGrowth = '+12.5%';
  openPositions = 42;
  positionsGrowth = '+5.8%';
  interviewsToday = 8;
  interviewsGrowth = '-2.3%';
  timeToHire = '12d';
  timeToHireGrowth = '-8.4%';
  
  activeJobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      skills: ['React', 'TypeScript', 'Node.js'],
      candidates: 45,
      daysLeft: 5
    },
    {
      title: 'UX Designer',
      company: 'Design Studio',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      candidates: 28,
      daysLeft: 8
    }
  ];
}
