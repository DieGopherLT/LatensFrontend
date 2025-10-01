import { SleepLevel } from '../types/awakening';

/**
 * Determines sleep level based on sleep score (0-100)
 * - Light Sleep: 0-30 (recently active)
 * - Standard Sleep: 31-60 (moderate pause)
 * - Deep Sleep: 61-100 (deep sleep)
 */
export const getSleepLevel = (sleepScore: number): SleepLevel => {
  if (sleepScore <= 30) return 'light';
  if (sleepScore <= 60) return 'standard';
  return 'deep';
};

/**
 * Gets the color classes for a given sleep level
 * Supports both Dawn and Midnight themes via CSS variables
 */
export const getSleepColorClasses = (level: SleepLevel): string => {
  const colorMap: Record<SleepLevel, string> = {
    light: 'text-sleep-light',
    standard: 'text-sleep-standard',
    deep: 'text-sleep-deep',
  };
  return colorMap[level];
};

/**
 * Gets the background color classes for a given sleep level
 */
export const getSleepBgColorClasses = (level: SleepLevel): string => {
  const bgMap: Record<SleepLevel, string> = {
    light: 'bg-sleep-light',
    standard: 'bg-sleep-standard',
    deep: 'bg-sleep-deep',
  };
  return bgMap[level];
};

/**
 * Gets animation duration based on sleep level
 * Deeper sleep = longer, more dramatic animations
 */
export const getAnimationDuration = (level: SleepLevel): number => {
  const durationMap: Record<SleepLevel, number> = {
    light: 800,
    standard: 1200,
    deep: 1600,
  };
  return durationMap[level];
};

/**
 * Gets animation intensity multiplier based on sleep level
 */
export const getAnimationIntensity = (level: SleepLevel): number => {
  const intensityMap: Record<SleepLevel, number> = {
    light: 1,
    standard: 1.5,
    deep: 2,
  };
  return intensityMap[level];
};
