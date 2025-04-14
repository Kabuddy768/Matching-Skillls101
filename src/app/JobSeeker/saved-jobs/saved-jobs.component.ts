import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Job {
  id: number;
  title: string;
  matchPercentage: number;
  company: string;
  location: string;
  locationType?: string;
  postedDays: number | string;
  jobType: string;
  salaryRange: string;
  skills: string[];
}

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.scss'
})
export class SavedJobsComponent implements OnInit {
  jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      matchPercentage: 90,
      company: 'Acme Inc.',
      location: 'Remote',
      postedDays: 2,
      jobType: 'Full-Time',
      salaryRange: '$120,000 - $150,000',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      matchPercentage: 85,
      company: 'Tech Solutions',
      location: 'New York',
      locationType: 'Hybrid',
      postedDays: 3,
      jobType: 'Full-Time',
      salaryRange: '$100,000 - $130,000',
      skills: ['Python', 'React', 'AWS']
    },
    {
      id: 3,
      title: 'UI/UX Developer',
      matchPercentage: 75,
      company: 'Design Co',
      location: 'San Francisco',
      postedDays: '1 week',
      jobType: 'Full-Time',
      salaryRange: '$90,000 - $120,000',
      skills: ['Figma', 'React', 'CSS']
    },
    {
      id: 4,
      title: 'Frontend Engineer',
      matchPercentage: 80,
      company: 'StartUp Inc',
      location: 'Remote',
      postedDays: 5,
      jobType: 'Full-Time',
      salaryRange: '$80,000 - $110,000',
      skills: ['Vue.js', 'JavaScript', 'CSS']
    },
    {
      id: 5,
      title: 'React Developer',
      matchPercentage: 88,
      company: 'Tech Corp',
      location: 'Austin',
      locationType: 'Hybrid',
      postedDays: '1 week',
      jobType: 'Full-Time',
      salaryRange: '$95,000 - $125,000',
      skills: ['React', 'Redux', 'GraphQL']
    },
    {
      id: 6,
      title: 'Software Engineer',
      matchPercentage: 82,
      company: 'Global Tech',
      location: 'Remote',
      postedDays: 3,
      jobType: 'Full-Time',
      salaryRange: '$110,000 - $140,000',
      skills: ['Java', 'Spring', 'React']
    }
  ];

  activeTab: string = 'saved';
  userName: string = 'Sarah Wilson';

  constructor() { }

  ngOnInit(): void {
    // Component initialization logic
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  viewJobDetails(jobId: number): void {
    console.log(`Viewing details for job ${jobId}`);
    // Implement navigation to job details page
  }

  applyForJob(jobId: number): void {
    console.log(`Applying for job ${jobId}`);
    // Implement job application logic
  }

  removeJob(jobId: number): void {
    console.log(`Removing job ${jobId}`);
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }

  closeNotification(): void {
    // Logic to close the notification banner
    const notification = document.querySelector('.notification-bar');
    if (notification) {
      notification.classList.add('hidden');
    }
  }

  formatLocation(job: Job): string {
    return job.locationType ? `${job.location}, ${job.locationType}` : job.location;
  }

  formatPosted(days: number | string): string {
    if (typeof days === 'number') {
      return `Posted ${days} days ago`;
    }
    return `Posted ${days} ago`;
  }
}