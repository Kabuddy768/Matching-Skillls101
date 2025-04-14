import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-jobseeker-dashboard',
  imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterLink,RouterModule],
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.scss']
})
export class JobseekerDashboardComponent {
  userName = 'Alex';
  jobMatchRate = 85;
  appliedJobs = 24;
  interviews = 8;
  profileViews = 156;
  
  recentJobMatches = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      matchPercentage: 95,
      skills: ['React', 'TypeScript', 'UI/UX']
    },
    {
      title: 'Full Stack Engineer',
      company: 'InnovateLabs',
      location: 'Remote',
      matchPercentage: 88,
      skills: ['Node.js', 'React', 'MongoDB']
    },
    {
      title: 'UI Developer',
      company: 'DesignStudio',
      location: 'New York, NY',
      matchPercentage: 85,
      skills: ['React', 'Figma', 'CSS']
    }
  ];
  
  upcomingInterviews = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      date: 15,
      month: 'Dec',
      time: '10:00 AM',
      type: 'Technical'
    },
    {
      title: 'Full Stack Engineer',
      company: 'InnovateLabs',
      date: 18,
      month: 'Dec',
      time: '2:00 PM',
      type: 'Cultural Fit'
    }
  ];
  
  skillsDevelopment = [
    { name: 'React', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Node.js', percentage: 75 }
  ];
  
  applicationStatus = [
    { status: 'Applied', count: 24 },
    { status: 'In Review', count: 12 },
    { status: 'Interviews', count: 8 }
  ];
  
  nextSteps = [
    { task: 'Complete skill assessments' },
    { task: 'Update portfolio' },
    { task: 'Prepare for technical interview' }
  ];
}