import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  joinedDate: string;
  lastLogin: string;
  notifications: boolean;
  twoFactorAuth: boolean;
  language: string;
  timezone: string;
}

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  profile: AdminProfile = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@skillmatch.com',
    role: 'System Administrator',
    department: 'IT',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    bio: 'Experienced system administrator with a focus on security and performance optimization.',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff',
    joinedDate: '2023-01-15',
    lastLogin: '2024-03-20 14:30:00',
    notifications: true,
    twoFactorAuth: true,
    language: 'English',
    timezone: 'America/New_York'
  };

  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];

  timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' }
  ];

  isEditing = false;
  tempProfile: AdminProfile = { ...this.profile };

  constructor() { }

  ngOnInit(): void {
    // In a real application, this would load the profile data from an API
  }

  startEditing(): void {
    this.tempProfile = { ...this.profile };
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

  saveProfile(): void {
    this.profile = { ...this.tempProfile };
    this.isEditing = false;
    // In a real application, this would save the profile data to an API
  }

  updateAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.tempProfile.avatar = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  formatDateTime(dateTime: string): string {
    return new Date(dateTime).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
} 