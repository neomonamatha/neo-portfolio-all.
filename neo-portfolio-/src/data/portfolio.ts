export type Project = {
  name: string
  category: string
  description: string
  problem: string
  solution: string
  targetUsers: string
  status: string
  highlights: string[]
  technologies: string[]
  architecture?: string
  keyFeatures?: string[]
  repositoryUrl: string
  demoUrl?: string
  documentationUrl?: string
}

export type Certification = {
  name: string
  provider: string
  detail: string
  credentialUrl?: string
  verificationUrl?: string
}

export const profile = {
  name: 'Neo Monamatha',
  githubUrl: 'https://github.com/neomonamatha',
  linkedinUrl: '',
  email: '',
  cvPath: '/cv.pdf',
  cvAvailable: false,
}

export const certifications: Certification[] = [
  { name: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', detail: 'Learning / date to be added' },
  { name: 'FNB App Academy', provider: 'FNB', detail: 'Learning journey / date to be added' },
  { name: 'Generative AI certification', provider: 'Provider to be added', detail: 'Credential to be added' },
  { name: 'Blockchain / Web3 training', provider: 'Provider to be added', detail: 'Learning journey / date to be added' },
]

export const projects: Project[] = [
  {
    name: 'SYNARI Smart Asset Tracker',
    category: 'Information Systems / Full Stack',
    description: 'A smart campus asset tracking concept designed to improve visibility, accountability and management of institutional equipment.',
    problem: 'Institutional equipment can be difficult to locate, assign and account for across campus workflows.',
    solution: 'A structured asset-tracking concept centred on visibility, accountability and practical management workflows.',
    targetUsers: 'Campus operations and asset management teams',
    status: 'Academic / Planning',
    highlights: ['Asset management', 'Business requirements', 'Process modelling', 'Data management'],
    technologies: ['React', 'TypeScript', 'SQL', 'Systems analysis'],
    repositoryUrl: '',
  },
  {
    name: 'Emergency & Health App',
    category: 'Digital Health / Full Stack',
    description: 'A technology solution focused on improving access to emergency and health-related services through clear service workflows.',
    problem: 'People may struggle to find and navigate emergency or health-related services quickly.',
    solution: 'A service workflow concept that organises information and user journeys around clearer access to support.',
    targetUsers: 'People seeking emergency and health-related services',
    status: 'Academic / In progress',
    highlights: ['Requirements analysis', 'System design', 'User experience', 'Service workflows'],
    technologies: ['JavaScript', 'React', 'Data modelling', 'UX'],
    repositoryUrl: '',
  },
  {
    name: 'Blockchain / Web3 Learning Lab',
    category: 'Blockchain',
    description: 'A collection of blockchain learning projects exploring token development and smart-contract fundamentals.',
    problem: 'Blockchain concepts are easier to understand when explored through small, testable experiments.',
    solution: 'A learning lab for exploring token development and smart-contract fundamentals without claiming production deployment.',
    targetUsers: 'Learners exploring blockchain fundamentals',
    status: 'Learning / Experimental',
    highlights: ['Solidity', 'ERC-20 concepts', 'Smart contracts', 'Testing fundamentals'],
    technologies: ['Solidity', 'JavaScript', 'Blockchain'],
    repositoryUrl: '',
  },
]

export const skillGroups = [
  { label: 'Software development', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML / CSS', 'SQL'] },
  { label: 'Data & intelligence', skills: ['SQL', 'Excel', 'Data analysis', 'Business intelligence', 'Data visualisation'] },
  { label: 'Cloud & infrastructure', skills: ['AWS', 'Microsoft Azure', 'Cloud fundamentals', 'Docker', 'CI/CD'] },
  { label: 'Business & systems', skills: ['Business analysis', 'Requirements engineering', 'Systems analysis', 'Process modelling', 'Information systems', 'IT risk'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Figma', 'Postman'] },
]

export const journey = [
  ['2026', 'Final-year Bachelor of Information Technology', 'Business Information Technology · Business Information Systems'],
  ['2026', 'FNB App Academy', 'Learning journey'],
  ['2026', 'AWS Cloud Practitioner learning', 'Cloud foundations'],
  ['2026', 'Blockchain / Web3 learning', 'Smart-contract fundamentals'],
  ['2026', 'Generative AI learning', 'Emerging technology'],
]