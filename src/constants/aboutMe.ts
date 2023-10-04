type contactDataType = Array<{start: string, end: string, organization: string, description: string, additionalNotes: Array<string>}>

export const contactData: contactDataType = [
  {
    start: '2004',
    end: '2016',
    organization: 'OOEHS, Sharjah, UAE',
    description: 'Graduated High School',
    additionalNotes: [],
  },
  {
    start: '2016',
    end: '2020',
    organization: 'FISAT, Kerala, India',
    description: "Obtained a Bachelor of Technology Degree in Computer Science & Engineering",
    additionalNotes: [],
  },
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

export default contactData