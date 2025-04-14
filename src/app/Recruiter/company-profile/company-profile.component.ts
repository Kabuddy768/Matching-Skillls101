import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface CompanyInfo {
  name: string;
  industry: string;
  size: string;
  founded: string;
  website: string;
  description: string;
  mission: string;
  values: string[];
  benefits: string[];
  locations: {
    city: string;
    country: string;
    isHeadquarters: boolean;
  }[];
  socialMedia: {
    platform: string;
    url: string;
  }[];
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
}

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  companyInfo: CompanyInfo = {
    name: '',
    industry: '',
    size: '',
    founded: '',
    website: '',
    description: '',
    mission: '',
    values: [],
    benefits: [],
    locations: [],
    socialMedia: []
  };

  teamMembers: TeamMember[] = [];
  activeTab: 'overview' | 'culture' | 'team' | 'locations' = 'overview';
  tabs: ('overview' | 'culture' | 'team' | 'locations')[] = ['overview', 'culture', 'team', 'locations'];
  setActiveTab(tab: 'overview' | 'culture' | 'team' | 'locations'): void {
    this.activeTab = tab}
  newValue: string = '';
  newBenefit: string = '';
  newLocation = {
    city: '',
    country: '',
    isHeadquarters: false
  };
  newSocialMedia = {
    platform: '',
    url: ''
  };
  newTeamMember: TeamMember = {
    name: '',
    role: '',
    department: '',
    bio: '',
    imageUrl: ''
  };

  ngOnInit() {
    this.loadCompanyInfo();
    this.loadTeamMembers();
  }

  loadCompanyInfo() {
    // In a real application, this would come from an API
    this.companyInfo = {
      name: 'TechCorp Solutions',
      industry: 'Technology',
      size: '100-500',
      founded: '2010',
      website: 'https://techcorp.com',
      description: 'A leading technology company specializing in innovative software solutions.',
      mission: 'To empower businesses through cutting-edge technology and exceptional service.',
      values: [
        'Innovation',
        'Integrity',
        'Collaboration',
        'Excellence'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work options',
        'Professional development'
      ],
      locations: [
        {
          city: 'San Francisco',
          country: 'USA',
          isHeadquarters: true
        },
        {
          city: 'London',
          country: 'UK',
          isHeadquarters: false
        }
      ],
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/company/techcorp'
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com/techcorp'
        }
      ]
    };
  }

  loadTeamMembers() {
    // In a real application, this would come from an API
    this.teamMembers = [
      {
        name: 'John Smith',
        role: 'CEO',
        department: 'Executive',
        bio: 'Visionary leader with 20+ years of experience in technology.',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sarah Johnson',
        role: 'CTO',
        department: 'Executive',
        bio: 'Technical expert driving innovation and product development.',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ];
  }

  addValue() {
    if (this.newValue.trim()) {
      this.companyInfo.values.push(this.newValue.trim());
      this.newValue = '';
    }
  }

  removeValue(index: number) {
    this.companyInfo.values.splice(index, 1);
  }

  addBenefit() {
    if (this.newBenefit.trim()) {
      this.companyInfo.benefits.push(this.newBenefit.trim());
      this.newBenefit = '';
    }
  }

  removeBenefit(index: number) {
    this.companyInfo.benefits.splice(index, 1);
  }

  addLocation() {
    if (this.newLocation.city.trim() && this.newLocation.country.trim()) {
      this.companyInfo.locations.push({...this.newLocation});
      this.newLocation = {
        city: '',
        country: '',
        isHeadquarters: false
      };
    }
  }

  removeLocation(index: number) {
    this.companyInfo.locations.splice(index, 1);
  }

  addSocialMedia() {
    if (this.newSocialMedia.platform.trim() && this.newSocialMedia.url.trim()) {
      this.companyInfo.socialMedia.push({...this.newSocialMedia});
      this.newSocialMedia = {
        platform: '',
        url: ''
      };
    }
  }

  removeSocialMedia(index: number) {
    this.companyInfo.socialMedia.splice(index, 1);
  }

  addTeamMember() {
    if (this.newTeamMember.name.trim() && this.newTeamMember.role.trim()) {
      this.teamMembers.push({...this.newTeamMember});
      this.newTeamMember = {
        name: '',
        role: '',
        department: '',
        bio: '',
        imageUrl: ''
      };
    }
  }

  removeTeamMember(index: number) {
    this.teamMembers.splice(index, 1);
  }

  setHeadquarters(index: number) {
    this.companyInfo.locations.forEach((location, i) => {
      location.isHeadquarters = i === index;
    });
  }

  saveChanges() {
    // In a real application, this would save to an API
    console.log('Saving company profile changes:', this.companyInfo);
  }
} 