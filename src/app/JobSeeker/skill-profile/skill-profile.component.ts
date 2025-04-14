// skill-profile.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  percentage: number;
  lastUpdated: string;
  status?: string;
}

interface RecommendedSkill {
  name: string;
  icon: string;
  matchPercentage: number;
  forPositions: string;
}

@Component({
  selector: 'app-skill-profile',
  imports:[CommonModule],
  templateUrl: './skill-profile.component.html',
  styleUrls: ['./skill-profile.component.scss']
})
export class SkillProfileComponent implements OnInit {
  skills: Skill[] = [
    { name: 'React', icon: 'assets/icons/react.svg', percentage: 90, lastUpdated: '2 weeks ago', status: 'High demand' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg', percentage: 85, lastUpdated: '1 month ago', status: 'Top skill' },
    { name: 'AWS', icon: 'assets/icons/aws.svg', percentage: 75, lastUpdated: '3 weeks ago', status: 'In demand' },
    { name: 'Docker', icon: 'assets/icons/docker.svg', percentage: 80, lastUpdated: '1 week ago', status: 'Trending' },
    { name: 'Python', icon: 'assets/icons/python.svg', percentage: 70, lastUpdated: '2 months ago', status: 'Popular' },
    { name: 'Vue.js', icon: 'assets/icons/vuejs.svg', percentage: 65, lastUpdated: '3 months ago', status: 'Growing' }
  ];

  recommendedSkills: RecommendedSkill[] = [
    { name: 'GraphQL', icon: 'assets/icons/graphql.svg', matchPercentage: 15, forPositions: 'Full Stack roles' },
    { name: 'Kubernetes', icon: 'assets/icons/kubernetes.svg', matchPercentage: 20, forPositions: 'DevOps positions' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg', matchPercentage: 25, forPositions: 'Frontend roles' }
  ];

  categories = {
    frontend: { percentage: 85, skills: ['React', 'TypeScript', 'Vue.js'] },
    backend: { percentage: 75, skills: ['Node.js', 'Python', 'SQL'] },
    devops: { percentage: 65, skills: ['Docker', 'AWS', 'CI/CD'] },
    softSkills: { percentage: 90, skills: ['Leadership', 'Communication', 'Teamwork'] }
  };

  lastUpdated: string = 'Today';

  constructor() { }

  ngOnInit(): void {
  }

  addSkill(): void {
    // Function to add a new skill
    console.log('Add skill clicked');
  }

  exportProfile(): void {
    // Function to export skills profile
    console.log('Export profile clicked');
  }
  getStatusClass(status: string | undefined): string {
    if (!status) return '';
    return status.toLowerCase().split(' ').join('-');
  }
}