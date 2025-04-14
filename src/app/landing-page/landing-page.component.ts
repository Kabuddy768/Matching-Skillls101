// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-landing-page',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './landing-page.component.html',
//   styleUrl: './landing-page.component.scss'
// })
// export class LandingPageComponent {

// }
// landing-page.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  testimonials = [
    {
      quote: "SkillMatch AI helped us find candidates we would have otherwise missed using traditional recruiting methods.",
      name: "Sarah Chen",
      title: "HR Director at TechForward",
      image: "assets/images/testimonials/sarah-chen.jpg"
    },
    {
      quote: "I was able to transition careers because SkillMatch focused on my transferable skills rather than my job titles.",
      name: "Marcus Johnson",
      title: "Software Developer",
      image: "assets/images/testimonials/marcus-johnson.jpg"
    },
    {
      quote: "This platform is revolutionizing how we think about talent acquisition and career development.",
      name: "Dr. Alisha Patel",
      title: "Future of Work Institute",
      image: "assets/images/testimonials/alisha-patel.jpg"
    }
  ];

  features = [
    {
      title: "AI-Powered Matching",
      description: "Our algorithm understands the nuances of skills and matches talent to opportunities with precision",
      icon: "assets/images/icons/ai-powered.svg"
    },
    {
      title: "Skill-First Approach",
      description: "Focus on abilities and potential rather than just credentials",
      icon: "assets/images/icons/skill-first.svg"
    },
    {
      title: "Career Pathway Guidance",
      description: "Discover personalized career paths based on your unique skill profile",
      icon: "assets/images/icons/career-pathway.svg"
    },
    {
      title: "Real-Time Engagement",
      description: "Connect directly with opportunities that match your skills",
      icon: "assets/images/icons/real-time.svg"
    }
  ];

  footerLinks = {
    company: [
      { title: "About", url: "/about" },
      { title: "Team", url: "/team" },
      { title: "Careers", url: "/careers" },
      { title: "Press", url: "/press" }
    ],
    product: [
      { title: "Features", url: "/features" },
      { title: "Pricing", url: "/pricing" },
      { title: "Roadmap", url: "/roadmap" },
      { title: "Success Stories", url: "/success-stories" }
    ],
    resources: [
      { title: "Blog", url: "/blog" },
      { title: "Guides", url: "/guides" },
      { title: "Skill Library", url: "/skill-library" },
      { title: "Webinars", url: "/webinars" }
    ],
    legal: [
      { title: "Terms of Service", url: "/terms" },
      { title: "Privacy Policy", url: "/privacy" },
      { title: "Accessibility", url: "/accessibility" }
    ],
    connect: [
      { title: "Twitter", url: "https://twitter.com/skillmatchai" },
      { title: "LinkedIn", url: "https://linkedin.com/company/skillmatchai" },
      { title: "Facebook", url: "https://facebook.com/skillmatchai" },
      { title: "Instagram", url: "https://instagram.com/skillmatchai" }
    ]
  };
}