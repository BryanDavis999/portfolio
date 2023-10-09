export interface eventRecordType {start: string, end: string, organization: string, description: string, additionalNotes?: Array<string>}
type eventHistoryType = Array<eventRecordType>

export const educationData: eventHistoryType = [
  {
    start: '2004',
    end: '2016',
    organization: 'OOEHS, Sharjah, UAE',
    description: 'Graduated High School'
  },
  {
    start: '2016',
    end: '2020',
    organization: 'FISAT, Kerala, India',
    description: "Obtained a Bachelor of Technology Degree in Computer Science & Engineering"
  }
]

export const employmentData: eventHistoryType = [
  {
    start: '2021',
    end: '2023',
    organization: 'BigBinary Software Ltd.',
    description: 'Worked for 2 years as a full stack web developer.',
    additionalNotes: [
      'Built Web Apps using Ruby on Rails mixed with React JS'
    ]
  }
]