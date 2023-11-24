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
    title: 'contribute.roles.ambassador.title',
    description: 'contribute.roles.ambassador.description',
    explanation: 'contribute.roles.ambassador.explanation',
  },
  {
    icon: 'photographer',
    title: 'contribute.roles.photographer.title',
    description: 'contribute.roles.photographer.description',
    explanation: 'contribute.roles.photographer.explanation',
  },
  {
    icon: 'advocate',
    title: 'contribute.roles.advocate.title',
    description: 'contribute.roles.advocate.description',
    explanation: 'contribute.roles.advocate.explanation',
  },
  {
    icon: 'bookworm',
    title: 'contribute.roles.bookworm.title',
    description: 'contribute.roles.bookworm.description',
    explanation: 'contribute.roles.bookworm.explanation',
  },
  {
    icon: 'decider',
    title: 'contribute.roles.decider.title',
    description: 'contribute.roles.decider.description',
    explanation: 'contribute.roles.decider.explanation',
  },
  {
    icon: 'volunteer',
    title: 'contribute.roles.volunteer.title',
    description: 'contribute.roles.volunteer.description',
    explanation: 'contribute.roles.volunteer.explanation',
  },
  {
    icon: 'listener',
    title: 'contribute.roles.listener.title',
    description: 'contribute.roles.listener.description',
    explanation: 'contribute.roles.listener.explanation',
  },
  {
    icon: 'speaker',
    title: 'contribute.roles.speaker.title',
    description: 'contribute.roles.speaker.description',
    explanation: 'contribute.roles.speaker.explanation',
  },
  {
    icon: 'celebrator',
    title: 'contribute.roles.celebrator.title',
    description: 'contribute.roles.celebrator.description',
    explanation: 'contribute.roles.celebrator.explanation',
  },
  {
    icon: 'inspector',
    title: 'contribute.roles.inspector.title',
    description: 'contribute.roles.inspector.description',
    explanation: 'contribute.roles.inspector.explanation',
  },
  {
    icon: 'wordsmith',
    title: 'contribute.roles.wordsmith.title',
    description: 'contribute.roles.wordsmith.description',
    explanation: 'contribute.roles.wordsmith.explanation',
  },
  {
    icon: 'sharer',
    title: 'contribute.roles.sharer.title',
    description: 'contribute.roles.sharer.description',
    explanation: 'contribute.roles.sharer.explanation',
  },
  {
    icon: 'ally',
    title: 'contribute.roles.ally.title',
    description: 'contribute.roles.ally.description',
    explanation: 'contribute.roles.ally.explanation',
  },
  {
    icon: 'protector',
    title: 'contribute.roles.protector.title',
    description: 'contribute.roles.protector.description',
    explanation: 'contribute.roles.protector.explanation',
  },
  {
    icon: 'facilitator',
    title: 'contribute.roles.facilitator.title',
    description: 'contribute.roles.facilitator.description',
    explanation: 'contribute.roles.facilitator.explanation',
  },
  {
    icon: 'accountant',
    title: 'contribute.roles.accountant.title',
    description: 'contribute.roles.accountant.description',
    explanation: 'contribute.roles.accountant.explanation',
  },
  {
    icon: 'mentor',
    title: 'contribute.roles.mentor.title',
    description: 'contribute.roles.mentor.description',
    explanation: 'contribute.roles.mentor.explanation',
  },
  {
    icon: 'recruiter',
    title: 'contribute.roles.recruiter.title',
    description: 'contribute.roles.recruiter.description',
    explanation: 'contribute.roles.recruiter.explanation',
  },
  {
    icon: 'encourager',
    title: 'contribute.roles.encourager.title',
    description: 'contribute.roles.encourager.description',
    explanation: 'contribute.roles.encourager.explanation',
  },
  {
    icon: 'inquisitor',
    title: 'contribute.roles.inquisitor.title',
    description: 'contribute.roles.inquisitor.description',
    explanation: 'contribute.roles.inquisitor.explanation',
  },
  {
    icon: 'together',
    title: 'contribute.roles.sponsor.title',
    description: 'contribute.roles.sponsor.description',
    explanation: 'contribute.roles.sponsor.explanation',
  },
  {
    icon: 'brainiac',
    title: 'contribute.roles.brainiac.title',
    description: 'contribute.roles.brainiac.description',
    explanation: 'contribute.roles.brainiac.explanation',
  },
  {
    icon: 'joiner',
    title: 'contribute.roles.joiner.title',
    description: 'contribute.roles.joiner.description',
    explanation: 'contribute.roles.joiner.explanation',
  },
  {
    icon: 'bookworm',
    title: 'contribute.roles.student.title',
    description: 'contribute.roles.student.description',
    explanation: 'contribute.roles.student.explanation',
  },
  {
    icon: 'globetrotter',
    title: 'contribute.roles.globetrotter.title',
    description: 'contribute.roles.globetrotter.description',
    explanation: 'contribute.roles.globetrotter.explanation',
  },
].map((i) => tracked({ ...i, completed: completedCells.includes(i.title) }));

export default class ContributeRoute extends Route {
  model() {
    return cells;
  }
}
