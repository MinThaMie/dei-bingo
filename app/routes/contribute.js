import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';

let completedCells = [];

try {
  completedCells = JSON.parse(localStorage.getItem('completed')) ?? [];
} catch (e) {
  localStorage.setItem('completed', []);
}

const cells = [
  {
    icon: 'ambassador',
    title: 'Ambassador',
    description: 'I took the Ambassador for Inclusion Training and promote DEI',
    explanation: '',
  },
  {
    icon: 'photographer',
    title: 'Photographer',
    description: 'I call out uninclusive images in our marketing materials',
    explanation: '',
  },
  {
    icon: 'advocate',
    title: 'Advocate',
    description: 'I encourage my colleagues to become active allies',
    explanation: '',
  },
  {
    icon: 'bookworm',
    title: 'Bookworm',
    description: 'I read books about DEI',
    explanation: '',
  },
  {
    icon: 'decider',
    title: 'Decider',
    description: 'I seek out diverse perspectives in decision-making',
    explanation: '',
  },
  {
    icon: 'volunteer',
    title: 'Volunteer',
    description: 'I volunteer for a DEI initiative in or outside the workplace',
    explanation: '',
  },
  {
    icon: 'listener',
    title: 'Listener',
    description: 'I actively seek to understand others',
    explanation: '',
  },
  {
    icon: 'speaker',
    title: 'Speaker',
    description: 'I spread the DEI message within our company',
    explanation: '',
  },
  {
    icon: 'celebrator',
    title: 'Celebrator',
    description: 'I participate in celebrating cultural holidays or heritage',
    explanation: '',
  },
  {
    icon: 'inspector',
    title: 'Inspector',
    description:
      'I identify and address accessibility issues in our products and workplace',
    explanation: '',
  },
  {
    icon: 'wordsmith',
    title: 'Wordsmith',
    description: 'I make sure that our messaging is inclusive',
    explanation: '',
  },
  {
    icon: 'sharer',
    title: 'Sharer',
    description: 'I share DEI resources with colleagues',
    explanation: '',
  },
  {
    icon: 'ally',
    title: 'Ally',
    description: 'I actively amplify underrepresented voices',
    explanation: '',
  },
  {
    icon: 'protector',
    title: 'Protector',
    description:
      'I speak up and speak out when I notice exclusion or disrespectful behavior',
    explanation: '',
  },
  {
    icon: 'facilitator',
    title: 'Facilitator',
    description: 'I create a safe space for people to share and collaborate',
    explanation: '',
  },
  {
    icon: 'accountant',
    title: 'Accountant',
    description: 'I hold leadership accountable for living our DEI story',
    explanation: '',
  },
  {
    icon: 'mentor',
    title: 'Mentor',
    description: 'I support and mentor diverse talent',
    explanation: '',
  },
  {
    icon: 'recruiter',
    title: 'Recruiter',
    description: 'I use an inclusive and objective hiring procress',
    explanation: '',
  },
  {
    icon: 'encourager',
    title: 'Encourager',
    description: 'I share appreciation for doing the DEI work',
    explanation: '',
  },
  {
    icon: 'inquisitor',
    title: 'Inquisitor',
    description:
      'I ask uncomfortable questions when it comes to the status quo',
    explanation: '',
  },
  {
    icon: 'together',
    title: 'Sponsor',
    description: 'I identify and actively support and promote diverse talent',
    explanation: '',
  },
  {
    icon: 'brainiac',
    title: 'Brainiac',
    description: 'I raise mental health awareness and practices',
    explanation: '',
  },
  {
    icon: 'joiner',
    title: 'Joiner',
    description: 'I attend DEI community events',
    explanation: '',
  },
  {
    icon: 'bookworm',
    title: 'Student',
    description: "I am learning more about unconsious bias and it's impact",
    explanation: '',
  },
  {
    icon: 'globetrotter',
    title: 'Globetrotter',
    description:
      'I engage with international colleagues and am curious about their perspective',
    explanation: '',
  },
].map((i) => tracked({ ...i, completed: completedCells.includes(i.title) }));

export default class ContributeRoute extends Route {
  model() {
    return cells;
  }
}
