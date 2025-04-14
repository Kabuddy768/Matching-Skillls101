import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  candidate = {
    name: 'Jane Doe',
    position: 'Software Engineer',
    matchPercentage: 85
  };

  interview = {
    type: 'Video',
    date: '04/22/2024',
    time: '10:00 AM',
    timeZone: 'Pacific Time',
    duration: '1 hour',
    interviewers: ['John Smith'],
    link: 'https://m.eet.example.com/abc',
    location: '',
    notes: '',
    sendInvite: true
  };

  stages = [
    {
      name: 'Scheduled',
      status: 'completed',
      date: 'Apr 22, 2024, 10:00 AM',
      type: 'Video'
    },
    {
      name: 'Completed',
      status: 'completed',
      date: 'Apr 18, 2024, 1:00 PM',
      type: 'Video'
    },
    {
      name: 'Feedback',
      status: 'current',
      comments: ''
    },
    {
      name: 'Outcome',
      status: 'pending',
      selectedOutcome: 'Move to next round',
      outcomes: ['Move to next round', 'Reject', 'On hold']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendInterviewInvite(): void {
    // Implement the logic to send the interview invite
    console.log('Sending interview invite...');
  }

  updateOutcome(outcome: string): void {
    // Update the selected outcome
    this.stages[3].selectedOutcome = outcome;
  }

  switchTab(tab: string): void {
    // Implement tab switching logic
    console.log(`Switching to ${tab} tab`);
  }
}