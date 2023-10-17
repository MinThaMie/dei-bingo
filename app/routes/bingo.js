import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';

const completedCells = JSON.parse(localStorage.getItem('completed')) ?? [];

const cells = [
  {
    title: 'Ambassador',
    description: 'I took the Ambassador for inclusion Training',
    explanation: '',
  },
  {
    title: 'Photographer',
    description: 'I call out uninclusive images in our marketing materials',
    explanation: '',
  },
  {
    title: 'Advocate',
    description:
      'I encourage fellow persons of privilege to become active allies',
    explanation: '',
  },
  {
    title: 'Bookworm',
    description: 'I read a book about DE&I',
    explanation: '',
  },
  {
    title: 'Decider',
    description: 'I seek out diverse perspectives in decision-making',
    explanation: '',
  },
  {
    title: 'Volunteer',
    description: 'Volunteer for a D&I initiative.',
    explanation: '',
  },
  {
    title: 'Listener',
    description:
      "I don't interrupt underrepresented people when they are speaking",
    explanation: '',
  },
  {
    title: 'Speaker',
    description: 'I spread the D&I message within our company',
    explanation: '',
  },
  {
    title: 'Celebrator',
    description: 'Celebrate a cultural holiday or heritage month.',
    explanation: '',
  },
  {
    title: 'Inspector',
    description:
      'I identify and address accessibility issues in our products and workplace',
    explanation: '',
  },
  {
    title: 'Wordsmith',
    description: 'I make sure that our messaging is inclusive',
    explanation: '',
  },
  {
    title: 'Sharer',
    description: 'I share D&I resources with colleagues',
    explanation: '',
  },
  {
    title: 'Ally',
    description: 'I strive to be an ally',
    explanation: '',
  },
  {
    title: 'Protector',
    description: 'I speak up when I see discrimination or exclusion',
    explanation: '',
  },
  {
    title: 'Facilitator',
    description: 'I create a safe space for people to share and collaborate',
    explanation: '',
  },
  {
    title: 'Accountant',
    description:
      'I hold my managers accountable for implementing and spearheading our D&I story',
    explanation: '',
  },
  {
    title: 'Mentor',
    description: 'I mentor somebody from an underrepresented group',
    explanation: '',
  },
  {
    title: 'Recruiter',
    description: 'I make my hiring procress inclusive and objective',
    explanation: '',
  },
  {
    title: 'Encourager',
    description: 'I share appreciation for doing the D&I work',
    explanation: '',
  },
  {
    title: 'Inquisitor',
    description:
      'I ask uncomfortable questions when it comes to the status quo',
    explanation: '',
  },
  {
    title: 'Sponsor',
    description:
      'I identify rising diverse talent and open doors for deserving candidates',
    explanation: '',
  },
  {
    title: 'Brainiac',
    description:
      'I promote mental health awareness and reduce the stigma surrounding this topic',
    explanation: '',
  },
  {
    title: 'Joiner',
    description: 'I attend D&I community events',
    explanation: '',
  },
  {
    title: 'Student',
    description: 'I am learning more and more about unconsious bias',
    explanation: '',
  },
  {
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
