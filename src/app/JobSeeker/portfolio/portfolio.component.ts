import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  developer = {
    name: 'Ben-Isaac',
    title: 'Fullstack Developer',
    description: 'Passionate about building scalable web and mobile applications. Experienced in modern web technologies and cloud architecture.',
    socialLinks: [
      { name: 'LinkedIn', icon: 'linkedin', url: '#' },
      { name: 'Email', icon: 'email', url: '#' },
      { name: 'GitHub', icon: 'github', url: '#' },
      { name: 'Website', icon: 'language', url: '#' }
    ]
  };

  featuredProjects = [
    {
      title: 'Personal Finance App',
      description: 'A web app to manage personal finances, built with React and Firebase',
      technologies: ['React', 'Firebase', 'Tailwind'],
      imageUrl: 'assets/images/finance-app.jpg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration',
      technologies: ['Next.js', 'MongoDB', 'Stripe'],
      imageUrl: 'assets/images/ecommerce.jpg',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  skills = [
    {
      category: 'Frontend Development',
      icon: 'code',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      icon: 'server',
      technologies: ['Node.js', 'Python', 'Java', 'RESTful APIs']
    },
    {
      category: 'Database & Cloud',
      icon: 'database',
      technologies: ['MongoDB', 'PostgreSQL', 'AWS', 'Firebase']
    }
  ];

  certifications = [
    {
      title: 'Certified Virtual Assistant',
      issuer: 'ALX',
      date: 'Issued Mar 2024',
      iconUrl: 'assets/images/cert-icon.jpg'
    },
    // Additional certifications can be added here
  ];

  currentYear = new Date().getFullYear();
}