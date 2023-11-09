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
    description: 'I took the Ambassador for inclusion Training',
    explanation: '',
  },
  {
    icon: 'photographer',
    title: 'Photographer',
    description: 'I call out uninclusive images in our marketing materials',
    explanation: '',
  },
  {
    icon: 'together',
    title: 'Advocate',
    description:
      'I encourage fellow persons of privilege to become active allies',
    explanation: '',
  },
  {
    icon: 'bookworm',
    title: 'Bookworm',
    description: 'I read a book about DE&I',
    explanation: '',
  },
  {
    icon: 'decider',
    title: 'Decider',
    description: 'I seek out diverse perspectives in decision-making',
    explanation: '',
  },
  {
    icon: 'handshake-angle',
    title: 'Volunteer',
    description: 'Volunteer for a D&I initiative.',
    explanation: '',
  },
  {
    icon: 'listener',
    title: 'Listener',
    description:
      "I don't interrupt underrepresented people when they are speaking",
    explanation: '',
  },
  {
    icon: 'speaker',
    title: 'Speaker',
    description: 'I spread the D&I message within our company',
    explanation: '',
  },
  {
    icon: 'celebrator',
    title: 'Celebrator',
    description: 'Celebrate a cultural holiday or heritage month.',
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
    description: 'I share D&I resources with colleagues',
    explanation: '',
  },
  {
    icon: 'ally',
    title: 'Ally',
    description: 'I strive to be an ally',
    explanation: '',
  },
  {
    icon: 'protector',
    title: 'Protector',
    description: 'I speak up when I see discrimination or exclusion',
    explanation: '',
  },
  {
    icon: 'facilitator',
    title: 'Facilitator',
    description: 'I create a safe space for people to share and collaborate',
    explanation: '',
  },
  {
    icon: 'receipt',
    title: 'Accountant',
    description:
      'I hold my managers accountable for implementing and spearheading our D&I story',
    explanation: '',
  },
  {
    icon: 'together',
    title: 'Mentor',
    description: 'I mentor somebody from an underrepresented group',
    explanation: '',
  },
  {
    icon: 'recruiter',
    title: 'Recruiter',
    description: 'I make my hiring procress inclusive and objective',
    explanation: '',
  },
  {
    icon: 'encourager',
    title: 'Encourager',
    description: 'I share appreciation for doing the D&I work',
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
    description:
      'I identify rising diverse talent and open doors for deserving candidates',
    explanation: '',
  },
  {
    icon: 'brainiac',
    title: 'Brainiac',
    description:
      'I promote mental health awareness and reduce the stigma surrounding this topic',
    explanation: '',
  },
  {
    icon: 'ticket',
    title: 'Joiner',
    description: 'I attend D&I community events',
    explanation: '',
  },
  {
    icon: 'bookworm',
    title: 'Student',
    description: 'I am learning more and more about unconsious bias',
    explanation: '',
  },
  {
    icon: 'globetrotter',
    title: 'Globetrotter',
    description:
      'I speak with colleagues all over the world about how they experience life',
    explanation: '',
  },
].map((i) => tracked({ ...i, completed: completedCells.includes(i.title) }));

export default class BingoRoute extends Route {
  model() {
    return cells;
  }
}
