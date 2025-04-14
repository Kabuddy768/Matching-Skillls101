import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  status: 'active' | 'inactive';
}

interface Industry {
  id: string;
  name: string;
  description: string;
  count: number;
  status: 'active' | 'inactive';
}

interface Location {
  id: string;
  city: string;
  country: string;
  count: number;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-content-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  activeTab: 'categories' | 'industries' | 'locations' = 'categories';
  tabs: ('categories' | 'industries' | 'locations')[] = ['categories', 'industries', 'locations'];
  setActiveTab(tab: 'categories' | 'industries' | 'locations'): void {
    this.activeTab = tab}
  categories: Category[] = [];
  industries: Industry[] = [];
  locations: Location[] = [];

  newCategory: Partial<Category> = {};
  newIndustry: Partial<Industry> = {};
  newLocation: Partial<Location> = {};

  constructor() { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadIndustries();
    this.loadLocations();
  }

  loadCategories(): void {
    // In a real application, this would come from an API
    this.categories = [
      {
        id: '1',
        name: 'Software Development',
        description: 'Jobs related to software development and programming',
        count: 245,
        status: 'active'
      },
      {
        id: '2',
        name: 'Design',
        description: 'Jobs related to UI/UX and graphic design',
        count: 156,
        status: 'active'
      },
      {
        id: '3',
        name: 'Marketing',
        description: 'Jobs related to digital and traditional marketing',
        count: 189,
        status: 'active'
      }
    ];
  }

  loadIndustries(): void {
    // In a real application, this would come from an API
    this.industries = [
      {
        id: '1',
        name: 'Technology',
        description: 'Technology and software companies',
        count: 342,
        status: 'active'
      },
      {
        id: '2',
        name: 'Healthcare',
        description: 'Healthcare and medical companies',
        count: 256,
        status: 'active'
      },
      {
        id: '3',
        name: 'Finance',
        description: 'Financial services and banking',
        count: 198,
        status: 'active'
      }
    ];
  }

  loadLocations(): void {
    // In a real application, this would come from an API
    this.locations = [
      {
        id: '1',
        city: 'New York',
        country: 'United States',
        count: 432,
        status: 'active'
      },
      {
        id: '2',
        city: 'London',
        country: 'United Kingdom',
        count: 387,
        status: 'active'
      },
      {
        id: '3',
        city: 'Tokyo',
        country: 'Japan',
        count: 298,
        status: 'active'
      }
    ];
  }

  addCategory(): void {
    if (this.newCategory.name && this.newCategory.description) {
      const category: Category = {
        id: Date.now().toString(),
        name: this.newCategory.name,
        description: this.newCategory.description,
        count: 0,
        status: 'active'
      };
      this.categories.push(category);
      this.newCategory = {};
    }
  }

  addIndustry(): void {
    if (this.newIndustry.name && this.newIndustry.description) {
      const industry: Industry = {
        id: Date.now().toString(),
        name: this.newIndustry.name,
        description: this.newIndustry.description,
        count: 0,
        status: 'active'
      };
      this.industries.push(industry);
      this.newIndustry = {};
    }
  }

  addLocation(): void {
    if (this.newLocation.city && this.newLocation.country) {
      const location: Location = {
        id: Date.now().toString(),
        city: this.newLocation.city,
        country: this.newLocation.country,
        count: 0,
        status: 'active'
      };
      this.locations.push(location);
      this.newLocation = {};
    }
  }

  toggleStatus(item: Category | Industry | Location): void {
    item.status = item.status === 'active' ? 'inactive' : 'active';
  }

  deleteItem(items: any[], id: string): void {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

  getStatusColor(status: 'active' | 'inactive'): string {
    return status === 'active' ? 'text-green-500' : 'text-red-500';
  }
} 