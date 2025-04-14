import { Component, OnInit } from '@angular/core';

interface JobMatch {
  id: number;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  skills: string[];
  matchPercentage: number;
  postedTime: string;
  bookmarked: boolean;
}

@Component({
  selector: 'app-job-matches',
  imports: [],
  templateUrl: './job-matches.component.html',
  styleUrl: './job-matches.component.scss'
})
export class JobMatchesComponent implements OnInit {
  jobMatches: JobMatch[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      isRemote: false,
      skills: ['React', 'TypeScript', 'Node.js'],
      matchPercentage: 95,
      postedTime: '2 days ago',
      bookmarked: false
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'Innovation Labs',
      location: '',
      isRemote: true,
      skills: ['React', 'Python', 'AWS'],
      matchPercentage: 92,
      postedTime: '1 day ago',
      bookmarked: false
    },
    {
      id: 3,
      title: 'UI/UX Developer',
      company: 'Design Masters',
      location: 'New York, NY',
      isRemote: false,
      skills: ['React', 'Figma', 'CSS'],
      matchPercentage: 89,
      postedTime: '3 days ago',
      bookmarked: false
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Global Tech Inc',
      location: '',
      isRemote: true,
      skills: ['JavaScript', 'React', 'MongoDB'],
      matchPercentage: 87,
      postedTime: '4 days ago',
      bookmarked: false
    },
    {
      id: 5,
      title: 'React Native Developer',
      company: 'Mobile First Co',
      location: 'Austin, TX',
      isRemote: false,
      skills: ['React Native', 'TypeScript', 'Redux'],
      matchPercentage: 85,
      postedTime: '1 week ago',
      bookmarked: false
    },
    {
      id: 6,
      title: 'Frontend Architect',
      company: 'Enterprise Solutions',
      location: '',
      isRemote: true,
      skills: ['React', 'Next.js', 'GraphQL'],
      matchPercentage: 83,
      postedTime: '5 days ago',
      bookmarked: false
    }
  ];

  filterOptions = {
    remoteOnly: false,
    location: 'All Locations',
    techStack: [],
    experienceLevel: '',
    sortBy: 'Match %'
  };

  currentPage = 1;
  totalPages = 5;

  constructor() { }

  ngOnInit(): void {
    // Component initialization logic here
  }

  applyForJob(jobId: number): void {
    console.log(`Applied for job with ID: ${jobId}`);
    // Implement application logic here
  }

  toggleBookmark(jobId: number): void {
    const job = this.jobMatches.find(j => j.id === jobId);
    if (job) {
      job.bookmarked = !job.bookmarked;
    }
  }

  toggleRemoteOnly(): void {
    this.filterOptions.remoteOnly = !this.filterOptions.remoteOnly;
    // Implement filtering logic here
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Implement pagination logic here
    }
  }

  goToPreviousPage(): void {
    this.changePage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.changePage(this.currentPage + 1);
  }
}
