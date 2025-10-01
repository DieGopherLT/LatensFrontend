'use client';

import { RepositoryWithSleepScore } from '../types/awakening';
import { getSleepLevel } from '../utils/sleep';
import { useAwakeningOrchestrator } from '../hooks/useAwakeningOrchestrator';

import TheatricalCurtain from './TheatricalCurtain';
import SleepLoader from './SleepLoader';
import AwakeningPhases from './AwakeningPhases';
import RepositorySelfChat from './RepositorySelfChat';

interface AwakeningExperienceProps {
  repository: RepositoryWithSleepScore;
}

const AwakeningExperience = ({ repository }: AwakeningExperienceProps) => {
  const sleepLevel = getSleepLevel(repository.sleep_score);

  const {
    curtainOpen,
    showLoader,
    awakeningState,
    handleCurtainComplete,
  } = useAwakeningOrchestrator({
    sleepScore: repository.sleep_score,
    sleepLevel,
  });

  const { phases, selfChat, isComplete } = awakeningState;

  return (
    <div className="min-h-screen bg-background">
      {/* Theatrical curtain animation */}
      <TheatricalCurtain
        isOpen={curtainOpen}
        duration={1200}
        onAnimationComplete={handleCurtainComplete}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        {/* Repository header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {repository.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            Sleep Score: {repository.sleep_score} ({sleepLevel} sleep)
          </p>
        </div>

        {/* Content based on state */}
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {!showLoader && (
            <div className="text-center">
              <p className="text-lg text-muted-foreground animate-pulse">
                Preparing awakening experience...
              </p>
            </div>
          )}

          {showLoader && !isComplete && (
            <div className="space-y-12 w-full flex flex-col items-center">
              {/* Sleep loader */}
              <SleepLoader
                sleepLevel={sleepLevel}
                message={`Awakening ${repository.name}...`}
              />

              {/* Phases display */}
              {phases.length > 0 && (
                <AwakeningPhases
                  phases={phases}
                  currentPhase={awakeningState.currentPhase}
                />
              )}
            </div>
          )}

          {isComplete && selfChat && (
            <div className="animate-scale-in">
              <RepositorySelfChat
                selfChat={selfChat}
                repositoryName={repository.name}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AwakeningExperience;
