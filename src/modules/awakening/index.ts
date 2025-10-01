// Components
export { default as AwakeningExperience } from './components/AwakeningExperience';
export { default as AwakeningPhases } from './components/AwakeningPhases';
export { default as RepositorySelfChat } from './components/RepositorySelfChat';
export { default as SleepLoader } from './components/SleepLoader';
export { default as TheatricalCurtain } from './components/TheatricalCurtain';

// Hooks
export { useAwakeningOrchestrator } from './hooks/useAwakeningOrchestrator';

// Types
export type {
  AwakeningAnimationConfig,
  AwakeningPhase,
  AwakeningState,
  SelfChatContent,
  RepositoryWithSleepScore,
  SleepLevel,
} from './types/awakening';

// Utils
export {
  getAnimationDuration,
  getAnimationIntensity,
  getSleepBgColorClasses,
  getSleepColorClasses,
  getSleepLevel,
} from './utils/sleep';

// Constants
export {
  AWAKENING_PHASE_TEMPLATES,
  EXPECTED_PHASE_COUNT,
  PHASE_DURATION_MS,
} from './constants/phases';
export { LOADING_MESSAGES, MOCK_SELF_CHAT } from './constants/messages';
