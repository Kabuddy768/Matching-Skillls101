import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-discovery',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './job-discovery.component.html',
  styleUrl: './job-discovery.component.scss'
})
export class JobDiscoveryComponent implements OnInit {
  // Sample data for the component
  jobTypes = ['Remote', 'Full-time', 'Tech', 'Design'];
  activeJobType = 'Tech';
  
  industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing'];
  activeIndustry = 'Technology';
  
  // Advanced filters
  showAdvancedFilters = false;
  minSalary = 30; // in thousands
  maxSalary = 150; // in thousands
  activeExperience = 'Mid Level';
  
  matchedCompanies = [
    {
      name: 'TechCorp',
      logo: 'assets/techcorp-logo.png',
      rating: 4.5,
      industry: 'Technology',
      openPositions: 12,
      matchPercentage: 95
    },
    {
      name: 'HealthCare',
      logo: 'assets/healthcare-logo.png',
      rating: 4.2,
      industry: 'Healthcare',
      openPositions: 8,
      matchPercentage: 88
    },
    {
      name: 'FinanceGroup',
      logo: 'assets/finance-logo.png',
      rating: 3.9,
      industry: 'Finance',
      openPositions: 5,
      matchPercentage: 75
    }
  ];
  
  careerPath = [
    {
      title: 'Junior Developer',
      skills: ['React', 'JavaScript', 'CSS'],
      salaryRange: '$60,000 - $80,000',
      experience: '1-2 years',
      active: true
    },
    {
      title: 'Senior Developer',
      skills: ['System Design', 'Team Lead', 'Architecture'],
      salaryRange: '$100,000 - $130,000',
      experience: '3-5 years',
      active: false
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }
  
  // Method to handle search
  searchJobs(event: any): void {
    const searchTerm = event.target.value;
    console.log('Searching for:', searchTerm);
    // This would typically call a service to search for jobs
  }
  
  // Methods to toggle filters
  toggleAdvancedFilters(): void {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }
  
  // Methods to handle user interactions
  setActiveJobType(type: string): void {
    this.activeJobType = type;
  }
  
  setActiveIndustry(industry: string): void {
    this.activeIndustry = industry;
  }
  
  setActiveExperience(level: string): void {
    this.activeExperience = level;
  }
  
  // Salary formatting and manipulation
  formatSalary(value: number): string {
    return value.toString();
  }
  
  // Filter actions
  resetFilters(): void {
    this.activeJobType = '';
    this.activeIndustry = '';
    this.activeExperience = '';
    this.minSalary = 0;
    this.maxSalary = 200;
  }
  
  applyFilters(): void {
    console.log('Applying filters');
    // Would typically call a service to filter jobs
  }
  
  // Navigation methods
  viewAllCompanies(): void {
    console.log('Viewing all companies');
    // Navigate to all companies view
  }
}