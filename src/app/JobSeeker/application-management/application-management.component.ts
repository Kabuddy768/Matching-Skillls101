import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './application-management.component.html',
  styleUrl: './application-management.component.scss'
})
export class ApplicationManagementComponent implements OnInit {
  // Application statuses
  applicationStatuses = ['All', 'Applied', 'In Review', 'Interview', 'Offer', 'Rejected'];
  activeStatus = 'All';
  
  // Sorting options
  sortOptions = ['Date applied', 'Company', 'Status'];
  activeSort = 'Date applied';
  
  // Applications data
  applications = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'TechCorp',
      companyLogo: 'assets/techcorp-logo.png',
      location: 'San Francisco, CA',
      dateApplied: '2023-03-15',
      status: 'Interview',
      nextStep: 'Technical Interview',
      nextStepDate: '2023-04-05',
      salary: '$120K - $160K',
      favorite: true,
      skillMatch: 95,
      applicationProgress: 65
    },
    {
      id: 2,
      position: 'UX/UI Designer',
      company: 'Google',
      companyLogo: 'assets/techcorp-logo.png',
      location: 'Mountain View, CA',
      dateApplied: '2023-03-10',
      status: 'In Review',
      nextStep: 'Waiting for feedback',
      nextStepDate: null,
      salary: '$110K - $140K',
      favorite: false,
      skillMatch: 88,
      applicationProgress: 35
    },
    {
      id: 3,
      position: 'Full Stack Engineer',
      company: 'HealthTech',
      companyLogo: 'assets/healthcare-logo.png',
      location: 'Remote',
      dateApplied: '2023-03-05',
      status: 'Offer',
      nextStep: 'Review offer letter',
      nextStepDate: '2023-04-02',
      salary: '$100K - $130K',
      favorite: true,
      skillMatch: 92,
      applicationProgress: 95
    },
    {
      id: 4,
      position: 'Software Engineer',
      company: 'Microsoft',
      companyLogo: 'assets/healthcare-logo.png',
      location: 'Remote',
      dateApplied: '2023-03-01',
      status: 'Rejected',
      nextStep: null,
      nextStepDate: null,
      salary: '$120K - $150K',
      favorite: false,
      skillMatch: 82,
      applicationProgress: 100
    }
  ];

  filteredApplications = [...this.applications];
  
  constructor() { }

  ngOnInit(): void {
    this.filterApplications(this.activeStatus);
  }
  
  // Filter applications by status
  filterApplications(status: string): void {
    this.activeStatus = status;
    
    if (status === 'All') {
      this.filteredApplications = [...this.applications];
    } else {
      this.filteredApplications = this.applications.filter(app => app.status === status);
    }
  }
  
  // Sort applications
  sortApplications(option: string): void {
    this.activeSort = option;
    
    switch(option) {
      case 'Date applied':
        this.filteredApplications.sort((a, b) => new Date(b.dateApplied).getTime() - new Date(a.dateApplied).getTime());
        break;
      case 'Company':
        this.filteredApplications.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'Status':
        this.filteredApplications.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }
  }
  
  // Toggle favorite status
  toggleFavorite(id: number): void {
    const application = this.applications.find(app => app.id === id);
    if (application) {
      application.favorite = !application.favorite;
    }
  }
  
  // Format date for display
  formatDate(dateString: string | null): string {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  
  // Get status class for styling
  getStatusClass(status: string): string {
    switch(status) {
      case 'Applied': return 'status-applied';
      case 'In Review': return 'status-review';
      case 'Interview': return 'status-interview';
      case 'Offer': return 'status-offer';
      case 'Rejected': return 'status-rejected';
      default: return '';
    }
  }
} 