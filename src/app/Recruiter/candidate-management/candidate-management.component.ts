import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  currentRole: string;
  experience: number;
  skills: string[];
  status: 'new' | 'reviewed' | 'shortlisted' | 'interviewed' | 'offered' | 'hired' | 'rejected';
  appliedDate: Date;
  lastUpdated: Date;
  jobId: string;
  jobTitle: string;
  resumeUrl: string;
  coverLetter: string;
  notes: string;
  interviews: Interview[];
}

interface Interview {
  id: string;
  date: Date;
  type: 'phone' | 'video' | 'onsite';
  interviewer: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback: string;
  rating: number;
}

@Component({
  selector: 'app-candidate-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.scss']
})
export class CandidateManagementComponent implements OnInit {
  candidates: Candidate[] = [];
  filteredCandidates: Candidate[] = [];
  activeTab: 'all' | 'new' | 'reviewed' | 'shortlisted' | 'interviewed' | 'offered' | 'hired' | 'rejected' = 'all';
  searchQuery: string = '';
  sortBy: 'date' | 'name' | 'status' = 'date';
  sortOrder: 'asc' | 'desc' = 'desc';
  selectedCandidate: Candidate | null = null;
  showCandidateDetails: boolean = false;

  ngOnInit() {
    // Initialize with sample data
    this.candidates = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8901',
        location: 'New York, NY',
        currentRole: 'Senior Frontend Developer',
        experience: 5,
        skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        status: 'new',
        appliedDate: new Date('2024-03-15'),
        lastUpdated: new Date('2024-03-15'),
        jobId: '1',
        jobTitle: 'Senior Frontend Developer',
        resumeUrl: 'https://example.com/resume1.pdf',
        coverLetter: 'I am excited to apply for the Senior Frontend Developer position...',
        notes: 'Strong Angular experience, good communication skills',
        interviews: []
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 234 567 8902',
        location: 'San Francisco, CA',
        currentRole: 'Product Manager',
        experience: 7,
        skills: ['Product Management', 'Agile', 'Scrum', 'JIRA', 'User Research'],
        status: 'shortlisted',
        appliedDate: new Date('2024-03-10'),
        lastUpdated: new Date('2024-03-12'),
        jobId: '2',
        jobTitle: 'Product Manager',
        resumeUrl: 'https://example.com/resume2.pdf',
        coverLetter: 'I am writing to express my interest in the Product Manager role...',
        notes: 'Previous experience in fintech, strong leadership skills',
        interviews: [
          {
            id: '1',
            date: new Date('2024-03-20'),
            type: 'video',
            interviewer: 'Sarah Johnson',
            status: 'scheduled',
            feedback: '',
            rating: 0
          }
        ]
      }
    ];
    this.filteredCandidates = [...this.candidates];
  }

  filterCandidates() {
    this.filteredCandidates = this.candidates.filter(candidate => {
      const matchesSearch = this.searchQuery === '' || 
        candidate.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        candidate.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        candidate.jobTitle.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesStatus = this.activeTab === 'all' || candidate.status === this.activeTab;
      
      return matchesSearch && matchesStatus;
    });

    this.sortCandidates();
  }

  sortCandidates() {
    this.filteredCandidates.sort((a, b) => {
      let comparison = 0;
      
      switch (this.sortBy) {
        case 'date':
          comparison = a.appliedDate.getTime() - b.appliedDate.getTime();
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  updateCandidateStatus(candidate: Candidate, newStatus: Candidate['status']) {
    candidate.status = newStatus;
    candidate.lastUpdated = new Date();
    this.filterCandidates();
  }

  viewCandidateDetails(candidate: Candidate) {
    this.selectedCandidate = candidate;
    this.showCandidateDetails = true;
  }

  closeCandidateDetails() {
    this.selectedCandidate = null;
    this.showCandidateDetails = false;
  }

  scheduleInterview(candidate: Candidate) {
    const newInterview: Interview = {
      id: Date.now().toString(),
      date: new Date(),
      type: 'video',
      interviewer: '',
      status: 'scheduled',
      feedback: '',
      rating: 0
    };
    
    candidate.interviews.push(newInterview);
    this.updateCandidateStatus(candidate, 'interviewed');
  }

  updateInterviewFeedback(interview: Interview, feedback: string, rating: number) {
    interview.feedback = feedback;
    interview.rating = rating;
    interview.status = 'completed';
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getStatusColor(status: Candidate['status']): string {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      reviewed: 'bg-purple-100 text-purple-800',
      shortlisted: 'bg-green-100 text-green-800',
      interviewed: 'bg-yellow-100 text-yellow-800',
      offered: 'bg-indigo-100 text-indigo-800',
      hired: 'bg-emerald-100 text-emerald-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status];
  }
} 