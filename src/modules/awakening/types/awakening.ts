import { GitHubRepository } from '@/modules/dashboard/types/repository';

export type SleepLevel = 'light' | 'standard' | 'deep';

export interface RepositoryWithSleepScore extends GitHubRepository {
  sleep_score: number;
}

export interface AwakeningPhase {
  id: string;
  title: string;
  message: string;
  status: 'pending' | 'in_progress' | 'completed';
  progress: number;
}

export interface SelfChatContent {
  yesterday: string[];
  today: string[];
}

export interface AwakeningState {
  currentPhase: number;
  phases: AwakeningPhase[];
  selfChat: SelfChatContent | null;
  isComplete: boolean;
}

export interface AwakeningAnimationConfig {
  sleepLevel: SleepLevel;
  duration: number;
  intensity: number;
}
