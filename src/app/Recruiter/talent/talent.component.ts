import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent',
  imports: [],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.scss'
})
export class TalentComponent implements OnInit {
  // Dashboard data
  stats = {
    activeJobs: 24,
    matches: 156,
    interviews: 12,
    inPipeline: 8
  };

  topMatches = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'Senior UX Designer',
      image: 'assets/candidate1.png',
      matchPercentage: 95
    },
    {
      id: 2,
      name: 'David Rodriguez',
      position: 'Full Stack Developer',
      image: 'assets/candidate2.png',
      matchPercentage: 88
    }
  ];

  activeJobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      department: 'Design Team',
      candidates: 34,
      days: 5,
      status: 'green'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Engineering',
      candidates: 28,
      days: 3,
      status: 'orange'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      candidates: 16,
      days: 7,
      status: 'green'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component data or fetch from service
  }

  viewProfile(candidateId: number): void {
    // Handle view profile action
    console.log('View profile for candidate:', candidateId);
  }

  bookmarkCandidate(candidateId: number): void {
    // Handle bookmark action
    console.log('Bookmark candidate:', candidateId);
  }

  messageCandidate(candidateId: number): void {
    // Handle message action
    console.log('Message candidate:', candidateId);
  }

  viewJobDetails(jobId: number): void {
    // Handle view job details action
    console.log('View job details:', jobId);
  }

  askAI(query: string): void {
    // Handle AI assistant query
    console.log('AI query:', query);
  }
}
