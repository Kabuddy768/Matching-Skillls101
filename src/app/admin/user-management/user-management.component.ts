import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'online' | 'offline' | 'away';
  image: string;
}

@Component({
  selector: 'app-user-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  selectedFilter: string = 'All';

  constructor() { }

  ngOnInit(): void {
    // Mock data based on the image
    this.users = [
      {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        role: 'Job Seeker',
        status: 'online',
        image: 'assets/images/sarah.jpg'
      },
      {
        id: 2,
        name: 'Michael Chen',
        email: 'm.chen@example.com',
        role: 'Recruiter',
        status: 'online',
        image: 'assets/images/michael.jpg'
      },
      {
        id: 3,
        name: 'Emily Davis',
        email: 'emily.d@example.com',
        role: 'Admin',
        status: 'offline',
        image: 'assets/images/emily.jpg'
      },
      {
        id: 4,
        name: 'James Wilson',
        email: 'j.wilson@example.com',
        role: 'Job Seeker',
        status: 'away',
        image: 'assets/images/james.jpg'
      },
      {
        id: 5,
        name: 'Lisa Anderson',
        email: 'l.anderson@example.com',
        role: 'Recruiter',
        status: 'online',
        image: 'assets/images/lisa.jpg'
      }
    ];
    
    this.filterUsers('All');
  }

  filterUsers(filter: string): void {
    this.selectedFilter = filter;
    
    if (filter === 'All') {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user => 
        user.role === filter || user.role === filter.slice(0, -1) // Handle plural/singular
      );
    }
  }

  searchUsers(): void {
    if (!this.searchQuery.trim()) {
      this.filterUsers(this.selectedFilter);
      return;
    }
    
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query)
    );
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'online': return 'green';
      case 'offline': return 'red';
      case 'away': return 'orange';
      default: return 'gray';
    }
  }
}