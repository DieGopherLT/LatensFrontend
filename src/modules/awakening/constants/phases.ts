import { SleepLevel } from '../types/awakening';

/**
 * Default awakening phase templates based on sleep level
 * Backend will provide real-time updates, these are placeholders
 */
export const AWAKENING_PHASE_TEMPLATES: Record<SleepLevel, string[]> = {
  light: [
    'Checking recent activity...',
    'Analyzing code changes...',
    'Reviewing open issues...',
    'Preparing workspace...',
    'Ready to resume!',
  ],
  standard: [
    'Waking up the repository...',
    'Scanning commit history...',
    'Analyzing branch state...',
    'Reviewing pending work...',
    'Refreshing context...',
    'Almost ready...',
  ],
  deep: [
    'Beginning deep awakening process...',
    'Reconstructing repository state...',
    'Analyzing dormant branches...',
    'Reviewing historical context...',
    'Identifying abandoned work...',
    'Reconnecting dependencies...',
    'Preparing comprehensive summary...',
    'Awakening complete!',
  ],
};

/**
 * Phase duration in milliseconds based on sleep level
 * These are placeholder values - backend will control actual timing
 */
export const PHASE_DURATION_MS: Record<SleepLevel, number> = {
  light: 1500,
  standard: 2000,
  deep: 2500,
};

/**
 * Total expected phases by sleep level
 */
export const EXPECTED_PHASE_COUNT: Record<SleepLevel, number> = {
  light: 5,
  standard: 6,
  deep: 8,
};
