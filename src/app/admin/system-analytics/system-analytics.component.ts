import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Metric {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface TimeRange {
  label: string;
  value: string;
}

@Component({
  selector: 'app-system-analytics',
  imports: [CommonModule,FormsModule],
  templateUrl: './system-analytics.component.html',
  styleUrls: ['./system-analytics.component.scss']
})
export class SystemAnalyticsComponent implements OnInit {
  metrics: Metric[] = [];
  userGrowthChart: ChartData = {
    labels: [],
    datasets: []
  };
  jobPostingChart: ChartData = {
    labels: [],
    datasets: []
  };
  applicationChart: ChartData = {
    labels: [],
    datasets: []
  };
  timeRanges: TimeRange[] = [
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Last 90 Days', value: '90d' },
    { label: 'Last Year', value: '1y' }
  ];
  selectedTimeRange: string = '30d';

  constructor() { }

  ngOnInit(): void {
    this.loadMetrics();
    this.loadCharts();
  }

  loadMetrics(): void {
    // In a real application, this would come from an API
    this.metrics = [
      {
        title: 'Total Users',
        value: 1250,
        change: 12.5,
        trend: 'up'
      },
      {
        title: 'Active Jobs',
        value: 342,
        change: 8.2,
        trend: 'up'
      },
      {
        title: 'Total Applications',
        value: 2456,
        change: -3.1,
        trend: 'down'
      },
      {
        title: 'Conversion Rate',
        value: 24.5,
        change: 2.3,
        trend: 'up'
      }
    ];
  }

  loadCharts(): void {
    // In a real application, this would come from an API
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    this.userGrowthChart = {
      labels,
      datasets: [{
        label: 'New Users',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: '#3b82f6'
      }]
    };

    this.jobPostingChart = {
      labels,
      datasets: [{
        label: 'Job Postings',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: '#10b981'
      }]
    };

    this.applicationChart = {
      labels,
      datasets: [{
        label: 'Applications',
        data: [180, 240, 320, 280, 360, 420],
        backgroundColor: '#8b5cf6'
      }]
    };
  }

  onTimeRangeChange(range: string): void {
    this.selectedTimeRange = range;
    // In a real application, this would trigger a new API call
    this.loadCharts();
  }

  getTrendIcon(trend: 'up' | 'down'): string {
    return trend === 'up' ? '↑' : '↓';
  }

  getTrendColor(trend: 'up' | 'down'): string {
    return trend === 'up' ? 'text-green-500' : 'text-red-500';
  }
} 