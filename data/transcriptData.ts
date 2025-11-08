export interface Transcript {
  id: string;
  title: string;
  status: 'In Progress' | 'Ongoing' | 'Completed';
  lastUpdated: string;
  summary: string;
}

export const transcripts: Transcript[] = [
  {
    id: '1',
    title: 'Outgoing call to SF Homes',
    status: 'In Progress',
    lastUpdated: '2025-11-06',
    summary: 'Began conversation to set up a meeting with SF Homes',
  },
  {
    id: '2',
    title: 'UX Research Session: Navigation Feedback',
    status: 'Ongoing',
    lastUpdated: '2025-11-04',
    summary:
      'Participants provided feedback on the new navigation layout. Further interviews scheduled for next week.',
  },
  {
    id: '3',
    title: 'Team Sync: Q4 Design Goals',
    status: 'Completed',
    lastUpdated: '2025-11-01',
    summary:
      'Reviewed upcoming Q4 design initiatives and finalized timeline for homepage redesign.',
  },
  {
    id: '4',
    title: 'Client Call: Brand Refresh Discussion',
    status: 'In Progress',
    lastUpdated: '2025-11-05',
    summary: "Outlined visual direction and next steps for the client's new branding assets.",
  },
  {
    id: '5',
    title: 'Engineering Review: API Integration',
    status: 'Ongoing',
    lastUpdated: '2025-11-03',
    summary: 'Investigated issues with endpoint authentication. Patch scheduled for next sprint.',
  },
];
