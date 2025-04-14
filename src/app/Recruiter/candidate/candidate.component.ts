// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// interface Candidate {
//   id: number;
//   name: string;
//   position: string;
//   skills: string[];
//   location: string;
//   matchPercentage: number;
//   imagePlaceholder: string;
// }

// interface SuggestedCandidate {
//   id: number;
//   name: string;
//   skills: string[];
//   yearsOfExperience: number;
//   matchScore: number;
//   links: {
//     portfolio?: boolean;
//     cv?: boolean;
//     backendDeveloper?: boolean;
//   };
//   imagePlaceholder: string;
// }
// @Component({
//   selector: 'app-candidate',
//   imports:[CommonModule,FormsModule],
//   templateUrl: './candidate.component.html',
//   styleUrls: ['./candidate.component.scss']
// })
// export class CandidateComponent implements OnInit {
//   searchQuery: string = 'python backend developer django';
  
//   filterOptions = {
//     any: 'Any',
//     applicability: 'Applicability',
//     matsScore: 'Mats 5core'
//   };
  
//   aiSuggestedCandidates: Candidate[] = [
//     {
//       id: 1,
//       name: 'Ethan Williams',
//       position: 'Backend Developer',
//       skills: ['Django', 'Python', 'AWS'],
//       location: 'New York, NY',
//       matchPercentage: 95,
//       imagePlaceholder: 'ethan-image'
//     },
//     {
//       id: 2,
//       name: 'Sofia Johnson',
//       position: 'Software Engineer',
//       skills: ['Python', 'Java', 'S6'],
//       location: 'Austin, TX',
//       matchPercentage: 92,
//       imagePlaceholder: 'sofia-image'
//     },
//     {
//       id: 3,
//       name: 'William Brown',
//       position: 'Python Developer',
//       skills: ['Django', 'SQL', 'JWT'],
//       location: 'Seattle, WA',
//       matchPercentage: 90,
//       imagePlaceholder: 'william-image'
//     },
//     {
//       id: 4,
//       name: 'Olivia Martin',
//       position: 'Full Stack Developer',
//       skills: ['Python', 'Node.js', 'Docker'],
//       location: 'Chicago, IL',
//       matchPercentage: 89,
//       imagePlaceholder: 'olivia-image'
//     }
//   ];
  
//   suggestedCandidates: SuggestedCandidate[] = [
//     {
//       id: 1,
//       name: 'John Smith',
//       skills: ['Python', 'Django', 'Java'],
//       yearsOfExperience: 5,
//       matchScore: 82,
//       links: { portfolio: true },
//       imagePlaceholder: 'john-image'
//     },
//     {
//       id: 2,
//       name: 'Emma Davis',
//       skills: ['SQL', 'React', 'Java'],
//       yearsOfExperience: 3,
//       matchScore: 87,
//       links: { cv: true },
//       imagePlaceholder: 'emma-image'
//     },
//     {
//       id: 3,
//       name: 'Michael Wilson',
//       skills: ['Python', 'AWS', 'Flask'],
//       yearsOfExperience: 4,
//       matchScore: 85,
//       links: { portfolio: true },
//       imagePlaceholder: 'michael-image'
//     },
//     {
//       id: 4,
//       name: 'Emily Taylor',
//       skills: ['Django', 'PostgreSQL', 'API'],
//       yearsOfExperience: 5,
//       matchScore: 85,
//       links: { backendDeveloper: true },
//       imagePlaceholder: 'emily-image'
//     }
//   ];
  
//   currentPage: number = 1;
//   totalResults: number = 50;
//   resultsPerPage: number = 4;
  
//   constructor() { }
  
//   ngOnInit(): void {
//   }
  
//   search(): void {
//     // Implement search functionality
//     console.log('Searching for:', this.searchQuery);
//   }
  
//   goToPage(page: number): void {
//     if (page > 0 && page <= Math.ceil(this.totalResults / this.resultsPerPage)) {
//       this.currentPage = page;
//     }
//   }
  
//   previousPage(): void {
//     this.goToPage(this.currentPage - 1);
//   }
  
//   nextPage(): void {
//     this.goToPage(this.currentPage + 1);
//   }
// }
import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  class: string;
}

interface Candidate {
  id: number;
  name: string;
  jobTitle: string;
  matchPercentage: number;
  skills: Skill[];
  location: string;
  profileImage?: string;
}

interface TableCandidate {
  id: number;
  name: string;
  matchScore: number;
  skills: Skill[];
  experience: string;
  links: {
    text: string;
    url: string;
  }[];
  profileImage?: string;
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  searchQuery: string = 'python backend developer django';
  
  aiSuggestedCandidates: Candidate[] = [
    {
      id: 1,
      name: 'Ethan Williams',
      jobTitle: 'Backend Developer',
      matchPercentage: 95,
      skills: [
        { name: 'Django', class: 'django' },
        { name: 'Python', class: 'python' },
        { name: 'AWS', class: 'aws' }
      ],
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Sofia Johnson',
      jobTitle: 'Software Engineer',
      matchPercentage: 92,
      skills: [
        { name: 'Python', class: 'python' },
        { name: 'Java', class: 'java' },
        { name: 'S6', class: 's6' }
      ],
      location: 'Austin, TX'
    },
    {
      id: 3,
      name: 'William Brown',
      jobTitle: 'Python Developer',
      matchPercentage: 90,
      skills: [
        { name: 'Django', class: 'django' },
        { name: 'SQL', class: 'sql' },
        { name: 'JWT', class: 'jwt' }
      ],
      location: 'Seattle, WA'
    },
    {
      id: 4,
      name: 'Olivia Martin',
      jobTitle: 'Full Stack Developer',
      matchPercentage: 89,
      skills: [
        { name: 'Python', class: 'python' },
        { name: 'Node.js', class: 'nodejs' },
        { name: 'Docker', class: 'docker' }
      ],
      location: 'Chicago, IL'
    }
  ];
  
  suggestedCandidates: TableCandidate[] = [
    {
      id: 1,
      name: 'John Smith',
      matchScore: 82,
      skills: [
        { name: 'Python', class: 'python' },
        { name: 'Django', class: 'django' },
        { name: 'Java', class: 'java' }
      ],
      experience: '5 years',
      links: [
        { text: 'Portfolio', url: '#' }
      ]
    },
    {
      id: 2,
      name: 'Emma Davis',
      matchScore: 87,
      skills: [
        { name: 'SQL', class: 'sql' },
        { name: 'React', class: 'react' },
        { name: 'Java', class: 'java' }
      ],
      experience: '3 years',
      links: [
        { text: 'CV', url: '#' }
      ]
    },
    {
      id: 3,
      name: 'Michael Wilson',
      matchScore: 85,
      skills: [
        { name: 'Python', class: 'python' },
        { name: 'AWS', class: 'aws' },
        { name: 'Flask', class: 'flask' }
      ],
      experience: '4 years',
      links: [
        { text: 'Portfolio', url: '#' }
      ]
    },
    {
      id: 4,
      name: 'Emily Taylor',
      matchScore: 85,
      skills: [
        { name: 'Django', class: 'django' },
        { name: 'PostgreSQL', class: 'postgresql' },
        { name: 'API', class: 'api' }
      ],
      experience: '5 years',
      links: [
        { text: 'Backend Developer', url: '#' }
      ]
    }
  ];
  
  totalResults: number = 50;
  currentPage: number = 1;
  resultsPerPage: number = 4;
  
  filters = {
    anyFilter: 'Any',
    applivatility: 'Applvatility',
    matsScore: 'Mats 5core'
  };
  
  constructor() { }

  ngOnInit(): void {
    // Initialize any component data or make API calls here
  }
  
  search(): void {
    // Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }
  
  viewProfile(candidateId: number): void {
    // Implement view profile functionality
    console.log('Viewing profile for candidate ID:', candidateId);
  }
  
  goToPage(page: number): void {
    if (page >= 1 && page <= Math.ceil(this.totalResults / this.resultsPerPage)) {
      this.currentPage = page;
      // Fetch data for this page
    }
  }
  
  get paginationInfo(): string {
    const start = (this.currentPage - 1) * this.resultsPerPage + 1;
    const end = Math.min(start + this.resultsPerPage - 1, this.totalResults);
    return `Showing ${start} to ${end} of ${this.totalResults} results`;
  }
  
  get totalPages(): number {
    return Math.ceil(this.totalResults / this.resultsPerPage);
  }
}