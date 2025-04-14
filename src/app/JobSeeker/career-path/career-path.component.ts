import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-path',
  imports: [],
  templateUrl: './career-path.component.html',
  styleUrl: './career-path.component.scss'
})
export class CareerPathComponent implements OnInit {
  recommendedRoles = [
    {
      title: 'Data Analyst',
      description: 'Based on your SQL & Excel skills',
      matchPercentage: 85
    },
    {
      title: 'Product Analyst',
      description: 'Matches your business background',
      matchPercentage: 78
    }
  ];

  skills = [
    {
      name: 'SQL',
      progress: 90,
      checked: true,
      learnable: false
    },
    {
      name: 'Data Visualization',
      progress: 85,
      checked: true,
      learnable: false
    },
    {
      name: 'Python',
      progress: 40,
      checked: false,
      learnable: true
    },
    {
      name: 'Machine Learning',
      progress: 20,
      checked: false,
      learnable: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
