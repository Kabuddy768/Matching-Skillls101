import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  value: '7d' | '30d' | '90d' | '1y';
}

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  Math = Math;
  metrics: Metric[] = [];
  applicationsChart: ChartData = {
    labels: [],
    datasets: []
  };
  candidateStatusChart: ChartData = {
    labels: [],
    datasets: []
  };
  timeRanges: TimeRange[] = [
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Last 90 Days', value: '90d' },
    { label: 'Last Year', value: '1y' }
  ];
  selectedTimeRange: TimeRange = this.timeRanges[1];
  topSkills: { name: string; count: number }[] = [];
  recentActivity: { type: string; description: string; date: Date }[] = [];

  ngOnInit() {
    this.loadMetrics();
    this.loadCharts();
    this.loadTopSkills();
    this.loadRecentActivity();
  }

  loadMetrics() {
    this.metrics = [
      {
        title: 'Total Applications',
        value: 245,
        change: 12,
        trend: 'up'
      },
      {
        title: 'Interview Rate',
        value: 35,
        change: -5,
        trend: 'down'
      },
      {
        title: 'Average Time to Hire',
        value: 14,
        change: -2,
        trend: 'up'
      },
      {
        title: 'Offer Acceptance Rate',
        value: 85,
        change: 3,
        trend: 'up'
      }
    ];
  }

  loadCharts() {
    // Applications over time chart
    this.applicationsChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Applications',
          data: [45, 60, 75, 50, 65, 80],
          backgroundColor: '#2563eb'
        }
      ]
    };

    // Candidate status distribution chart
    this.candidateStatusChart = {
      labels: ['New', 'Reviewed', 'Shortlisted', 'Interviewed', 'Offered', 'Hired', 'Rejected'],
      datasets: [
        {
          label: 'Candidates',
          data: [25, 30, 20, 15, 10, 5, 15],
          backgroundColor: '#4e73df'
          // backgroundColor: [
          //   '#3b82f6',
          //   '#60a5fa',
          //   '#93c5fd',
          //   '#bfdbfe',
          //   '#dbeafe',
          //   '#eff6ff',
          //   '#f3f4f6'
          // ]
        }
      ]
    };
  }

  loadTopSkills() {
    this.topSkills = [
      { name: 'JavaScript', count: 45 },
      { name: 'React', count: 38 },
      { name: 'Node.js', count: 32 },
      { name: 'TypeScript', count: 28 },
      { name: 'Angular', count: 25 }
    ];
  }

  loadRecentActivity() {
    this.recentActivity = [
      {
        type: 'application',
        description: 'New application received for Senior Frontend Developer',
        date: new Date()
      },
      {
        type: 'interview',
        description: 'Interview scheduled with John Doe',
        date: new Date(Date.now() - 86400000)
      },
      {
        type: 'offer',
        description: 'Offer sent to Jane Smith',
        date: new Date(Date.now() - 172800000)
      },
      {
        type: 'hire',
        description: 'Michael Johnson accepted the offer',
        date: new Date(Date.now() - 259200000)
      }
    ];
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getTrendIcon(trend: 'up' | 'down'): string {
    return trend === 'up' ? '↑' : '↓';
  }

  getTrendColor(trend: 'up' | 'down'): string {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  }
} 