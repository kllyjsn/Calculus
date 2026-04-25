import { foundationsTopics } from './foundations';
import { derivativesTopics } from './derivatives';
import { integralsTopics } from './integrals';
import { seriesTopics } from './series';
import { multivariableTopics } from './multivariable';
import { masteryTopics } from './mastery';
import type { Topic } from '../types';

export const allTopics: Topic[] = [
  ...foundationsTopics,
  ...derivativesTopics,
  ...integralsTopics,
  ...seriesTopics,
  ...multivariableTopics,
  ...masteryTopics,
];

export function getTopicByDay(day: number): Topic | undefined {
  return allTopics.find(t => t.day === day);
}

export function getTopicsByPhase(phaseId: string): Topic[] {
  return allTopics.filter(t => t.phase === phaseId);
}

export { foundationsTopics, derivativesTopics, integralsTopics, seriesTopics, multivariableTopics, masteryTopics };
