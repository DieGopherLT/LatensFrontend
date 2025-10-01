'use client';

import { useCallback, useEffect, useState } from 'react';

import { AwakeningPhase, AwakeningState, SleepLevel } from '../types/awakening';
import { AWAKENING_PHASE_TEMPLATES, PHASE_DURATION_MS } from '../constants/phases';
import { MOCK_SELF_CHAT } from '../constants/messages';

interface UseAwakeningOrchestratorProps {
  sleepScore: number;
  sleepLevel: SleepLevel;
}

/**
 * Hook to orchestrate the awakening animation sequence
 *
 * BACKEND INTEGRATION POINTS:
 * 1. Replace mock phases with WebSocket/SSE connection
 * 2. Listen for real-time phase updates from backend
 * 3. Update phase status and progress based on backend events
 * 4. Replace MOCK_SELF_CHAT with actual AI-generated content
 *
 * Example WebSocket integration:
 * ```typescript
 * const { lastMessage } = useWebSocket('ws://backend/awakening');
 *
 * useEffect(() => {
 *   if (lastMessage) {
 *     const update = JSON.parse(lastMessage.data);
 *     handlePhaseUpdate(update);
 *   }
 * }, [lastMessage]);
 * ```
 */
export const useAwakeningOrchestrator = ({
  sleepScore,
  sleepLevel,
}: UseAwakeningOrchestratorProps) => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [awakeningState, setAwakeningState] = useState<AwakeningState>({
    currentPhase: 0,
    phases: [],
    selfChat: null,
    isComplete: false,
  });

  // Initialize phases based on sleep level
  useEffect(() => {
    const phaseTemplates = AWAKENING_PHASE_TEMPLATES[sleepLevel];
    const initialPhases: AwakeningPhase[] = phaseTemplates.map((title, index) => ({
      id: `phase-${index}`,
      title,
      message: 'Preparing...',
      status: index === 0 ? 'in_progress' : 'pending',
      progress: index === 0 ? 0 : 0,
    }));

    setAwakeningState((prev) => ({
      ...prev,
      phases: initialPhases,
    }));
  }, [sleepLevel]);

  // Start curtain animation on mount
  useEffect(() => {
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 500);

    return () => clearTimeout(curtainTimer);
  }, []);

  // Show loader after curtain opens
  const handleCurtainComplete = useCallback(() => {
    setShowLoader(true);
  }, []);

  // Simulate phase progression (replace with real backend updates)
  useEffect(() => {
    if (!showLoader || awakeningState.isComplete) return;

    const phaseDuration = PHASE_DURATION_MS[sleepLevel];
    const { currentPhase, phases } = awakeningState;

    if (currentPhase >= phases.length) {
      // All phases complete - show self chat
      setAwakeningState((prev) => ({
        ...prev,
        selfChat: MOCK_SELF_CHAT,
        isComplete: true,
      }));
      return;
    }

    // Simulate progress for current phase
    const progressInterval = setInterval(() => {
      setAwakeningState((prev) => {
        const updatedPhases = [...prev.phases];
        const current = updatedPhases[prev.currentPhase];

        if (!current) return prev;

        if (current.progress < 100) {
          current.progress = Math.min(current.progress + 10, 100);
          return { ...prev, phases: updatedPhases };
        }

        return prev;
      });
    }, phaseDuration / 10);

    // Move to next phase after duration
    const phaseTimer = setTimeout(() => {
      setAwakeningState((prev) => {
        const updatedPhases = [...prev.phases];

        // Mark current phase as completed
        if (updatedPhases[prev.currentPhase]) {
          updatedPhases[prev.currentPhase].status = 'completed';
          updatedPhases[prev.currentPhase].progress = 100;
        }

        // Mark next phase as in progress
        const nextPhase = prev.currentPhase + 1;
        if (updatedPhases[nextPhase]) {
          updatedPhases[nextPhase].status = 'in_progress';
          updatedPhases[nextPhase].progress = 0;
        }

        return {
          ...prev,
          currentPhase: nextPhase,
          phases: updatedPhases,
        };
      });
    }, phaseDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimer);
    };
  }, [showLoader, awakeningState.currentPhase, awakeningState.phases.length, awakeningState.isComplete, sleepLevel]);

  return {
    curtainOpen,
    showLoader,
    awakeningState,
    handleCurtainComplete,
  };
};
