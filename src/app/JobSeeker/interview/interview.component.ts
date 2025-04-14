import { Component, OnInit } from '@angular/core';

interface Interview {
  id: number;
  date: {
    day: number;
    month: string;
  };
  position: string;
  company: string;
  time?: string;
  location?: string;
  type?: 'technical' | 'cultural';
  status?: 'completed' | 'rescheduled' | null;
}

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-interview',
  imports: [],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss'
})
export class InterviewComponent1 implements OnInit {
  
  upcomingInterviews: Interview[] = [
    {
      id: 1,
      date: { day: 15, month: 'MAR' },
      position: 'Senior Frontend Developer',
      company: 'TechCorp',
      time: '10:00 AM',
      location: 'Remote',
      type: 'technical'
    },
    {
      id: 2,
      date: { day: 18, month: 'MAR' },
      position: 'Full Stack Engineer',
      company: 'InnovateTech',
      time: '2:30 PM',
      location: 'On-site',
      type: 'cultural'
    }
  ];

  pastInterviews: Interview[] = [
    {
      id: 3,
      date: { day: 10, month: 'MAR' },
      position: 'UX Designer',
      company: 'DesignHub',
      status: 'completed'
    },
    {
      id: 4,
      date: { day: 8, month: 'MAR' },
      position: 'Frontend Developer',
      company: 'WebTech',
      status: 'rescheduled'
    }
  ];

  checklistItems: ChecklistItem[] = [
    { id: 'research', label: 'Research the company', checked: true },
    { id: 'jobdesc', label: 'Review job description', checked: true },
    { id: 'coding', label: 'Practice coding challenges', checked: true },
    { id: 'tech', label: 'Test your tech setup', checked: false },
    { id: 'questions', label: 'Prepare questions to ask', checked: false },
    { id: 'portfolio', label: 'Review your portfolio', checked: false },
    { id: 'location', label: 'Check interview location/link', checked: false }
  ];

  activeView: 'list' | 'calendar' = 'list';

  constructor() { }

  ngOnInit(): void {
  }

  setView(view: 'list' | 'calendar'): void {
    this.activeView = view;
  }

  prepareForInterview(interviewId: number): void {
    console.log(`Preparing for interview ${interviewId}`);
    // Implementation for preparation logic
  }

  rescheduleInterview(interviewId: number): void {
    console.log(`Rescheduling interview ${interviewId}`);
    // Implementation for rescheduling logic
  }

  toggleChecklistItem(itemId: string): void {
    const item = this.checklistItems.find(item => item.id === itemId);
    if (item) {
      item.checked = !item.checked;
    }
  }
}
