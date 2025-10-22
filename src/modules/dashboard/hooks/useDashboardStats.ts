import { useMemo } from 'react';
import { GitHubRepository } from '../types/repository';

const getSleepStateFromScore = (score: number): 'light' | 'standard' | 'deep' => {
  if (score <= 30) return 'light';
  if (score <= 60) return 'standard';
  return 'deep';
};

export const useDashboardStats = (repositories: GitHubRepository[]) => {
  return useMemo(() => {
    const total = repositories.length;

    if (total === 0) {
      return {
        total: 0,
        lightSleep: { count: 0, percentage: 0 },
        standardSleep: { count: 0, percentage: 0 },
        deepSleep: { count: 0, percentage: 0 },
        dominantState: 'light' as const,
        recentRepositories: [],
        atRiskRepositories: [],
      };
    }

    const lightSleep = repositories.filter((r) => r.sleep_score <= 30);
    const standardSleep = repositories.filter((r) => r.sleep_score > 30 && r.sleep_score <= 60);
    const deepSleep = repositories.filter((r) => r.sleep_score > 60);

    const lightPercentage = (lightSleep.length / total) * 100;
    const standardPercentage = (standardSleep.length / total) * 100;
    const deepPercentage = (deepSleep.length / total) * 100;

    // Determine dominant state
    let dominantState: 'light' | 'standard' | 'deep' = 'standard';
    if (lightPercentage > standardPercentage && lightPercentage > deepPercentage) {
      dominantState = 'light';
    } else if (deepPercentage > standardPercentage && deepPercentage > lightPercentage) {
      dominantState = 'deep';
    }

    // Recent repositories (sorted by updated_at, top 5)
    const recentRepositories = [...repositories]
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 5);

    // At-risk repositories (deep sleep, sorted by score desc, top 6)
    const atRiskRepositories = deepSleep
      .sort((a, b) => b.sleep_score - a.sleep_score)
      .slice(0, 6);

    return {
      total,
      lightSleep: {
        count: lightSleep.length,
        percentage: lightPercentage,
      },
      standardSleep: {
        count: standardSleep.length,
        percentage: standardPercentage,
      },
      deepSleep: {
        count: deepSleep.length,
        percentage: deepPercentage,
      },
      dominantState,
      recentRepositories,
      atRiskRepositories,
    };
  }, [repositories]);
};
