import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent implements OnInit {
  // Profile sections
  activeSection = 'personal';
  sections = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  // Personal Information
  personalInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    profilePicture: 'assets/default-profile.png'
  };

  // Skills
  skills = {
    technical: ['JavaScript', 'Angular', 'React', 'Node.js'],
    soft: ['Communication', 'Teamwork', 'Problem Solving'],
    languages: ['English', 'Spanish']
  };
  newSkill = '';

  // Work Experience
  experience = [
    {
      id: 1,
      company: 'TechCorp',
      position: 'Senior Developer',
      startDate: '2020-01',
      endDate: '2023-12',
      current: false,
      description: 'Led frontend development team and implemented new features'
    }
  ];

  // Education
  education = [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      current: false
    }
  ];

  // Portfolio Projects
  portfolio = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      skills: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/example/ecommerce',
      image: 'assets/project1.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  // Navigation methods
  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  // Personal Info methods
  updatePersonalInfo(): void {
    console.log('Updating personal info:', this.personalInfo);
    // Would typically call a service to update the profile
  }

  // Skills methods
  addSkill(category: 'technical' | 'soft' | 'languages'): void {
    if (this.newSkill && !this.skills[category].includes(this.newSkill)) {
      this.skills[category].push(this.newSkill);
      this.newSkill = '';
    }
  }

  removeSkill(category: 'technical' | 'soft' | 'languages', skill: string): void {
    this.skills[category] = this.skills[category].filter(s => s !== skill);
  }

  // Experience methods
  addExperience(): void {
    this.experience.push({
      id: this.experience.length + 1,
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    });
  }

  removeExperience(id: number): void {
    this.experience = this.experience.filter(exp => exp.id !== id);
  }

  // Education methods
  addEducation(): void {
    this.education.push({
      id: this.education.length + 1,
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false
    });
  }

  removeEducation(id: number): void {
    this.education = this.education.filter(edu => edu.id !== id);
  }

  // Portfolio methods
  addProject(): void {
    this.portfolio.push({
      id: this.portfolio.length + 1,
      title: '',
      description: '',
      skills: [],
      link: '',
      image: 'assets/default-project.png'
    });
  }

  removeProject(id: number): void {
    this.portfolio = this.portfolio.filter(proj => proj.id !== id);
  }

  // File upload methods
  onFileSelected(event: any, type: 'profile' | 'project'): void {
    const file = event.target.files[0];
    if (file) {
      // Would typically upload to a server and get back a URL
      console.log('File selected:', file);
    }
  }
}