import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';

const completedCells = JSON.parse(localStorage.getItem('completed')) ?? [];

const cells = [
  {
    icon: 'bullhorn',
    title: 'Ambassador',
    description: 'I took the Ambassador for inclusion Training',
    explanation: '',
  },
  {
    icon: 'camera-retro',
    title: 'Photographer',
    description: 'I call out uninclusive images in our marketing materials',
    explanation: '',
  },
  {
    icon: 'thumbs-up',
    title: 'Advocate',
    description:
      'I encourage fellow persons of privilege to become active allies',
    explanation: '',
  },
  {
    icon: 'book',
    title: 'Bookworm',
    description: 'I read a book about DE&I',
    explanation: '',
  },
  {
    icon: 'gavel',
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
    icon: 'ear-listen',
    title: 'Listener',
    description:
      "I don't interrupt underrepresented people when they are speaking",
    explanation: '',
  },
  {
    icon: 'envelope-open',
    title: 'Speaker',
    description: 'I spread the D&I message within our company',
    explanation: '',
  },
  {
    icon: 'hands-clapping',
    title: 'Celebrator',
    description: 'Celebrate a cultural holiday or heritage month.',
    explanation: '',
  },
  {
    icon: 'magnifying-glass',
    title: 'Inspector',
    description:
      'I identify and address accessibility issues in our products and workplace',
    explanation: '',
  },
  {
    icon: 'pen-nib',
    title: 'Wordsmith',
    description: 'I make sure that our messaging is inclusive',
    explanation: '',
  },
  {
    icon: 'share-nodes',
    title: 'Sharer',
    description: 'I share D&I resources with colleagues',
    explanation: '',
  },
  {
    icon: 'hand-holding-heart',
    title: 'Ally',
    description: 'I strive to be an ally',
    explanation: '',
  },
  {
    icon: 'shield-heart',
    title: 'Protector',
    description: 'I speak up when I see discrimination or exclusion',
    explanation: '',
  },
  {
    icon: 'comments',
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
    icon: 'user-group',
    title: 'Mentor',
    description: 'I mentor somebody from an underrepresented group',
    explanation: '',
  },
  {
    icon: 'file-contract',
    title: 'Recruiter',
    description: 'I make my hiring procress inclusive and objective',
    explanation: '',
  },
  {
    icon: 'comment-medical',
    title: 'Encourager',
    description: 'I share appreciation for doing the D&I work',
    explanation: '',
  },
  {
    icon: 'clipboard-question',
    title: 'Inquisitor',
    description:
      'I ask uncomfortable questions when it comes to the status quo',
    explanation: '',
  },
  {
    icon: 'stairs',
    title: 'Sponsor',
    description:
      'I identify rising diverse talent and open doors for deserving candidates',
    explanation: '',
  },
  {
    icon: 'brain',
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
    icon: 'school',
    title: 'Student',
    description: 'I am learning more and more about unconsious bias',
    explanation: '',
  },
  {
    icon: 'globe',
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
