'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';
import {
  ExternalLink,
  Lock,
  Unlock,
  GitFork,
  GitBranch,
  FileText,
  AlertTriangle,
  Archive
} from 'lucide-react';

import { GitHubRepository } from '../../types/repository';
import styles from './RepositoryCard.module.css';

interface RepositoryCardProps {
  repository: GitHubRepository;
  onCardClick?: (repository: GitHubRepository) => void;
}

const formatDate = (dateString: string) => {
  try {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  } catch {
    return 'Unknown';
  }
};

const getStatusColor = (repository: GitHubRepository) => {
  if (repository.is_archived) return 'text-muted-foreground';
  if (repository.is_disabled) return 'text-destructive';
  return 'text-foreground';
};

const getStatusIcon = (repository: GitHubRepository) => {
  if (repository.is_archived) return <Archive className="h-4 w-4" />;
  if (repository.is_disabled) return <AlertTriangle className="h-4 w-4" />;
  return null;
};

const getSleepState = (score: number) => {
  if (score <= 30) {
    return {
      label: 'Light Sleep',
      className: styles.lightSleep,
      borderColorDawn: '#f59e0b',
      glowColorDawn: 'rgba(245, 158, 11, 0.3)',
      gradientColorDawn: 'rgba(245, 158, 11, 0.05)',
      borderColorMidnight: '#f97316',
      glowColorMidnight: 'rgba(249, 115, 22, 0.4)',
      gradientColorMidnight: 'rgba(249, 115, 22, 0.05)',
      icon: '☀️',
      badgeBg: 'bg-sleep-light/10',
      badgeText: 'text-sleep-light',
      iconBg: 'bg-sleep-light/10'
    };
  }
  if (score <= 60) {
    return {
      label: 'Standard Sleep',
      className: styles.standardSleep,
      borderColorDawn: '#8b5cf6',
      glowColorDawn: 'rgba(139, 92, 246, 0.3)',
      gradientColorDawn: 'rgba(139, 92, 246, 0.05)',
      borderColorMidnight: '#a855f7',
      glowColorMidnight: 'rgba(168, 85, 247, 0.4)',
      gradientColorMidnight: 'rgba(168, 85, 247, 0.05)',
      icon: '🌙',
      badgeBg: 'bg-sleep-standard/10',
      badgeText: 'text-sleep-standard',
      iconBg: 'bg-sleep-standard/10'
    };
  }
  return {
    label: 'Deep Sleep',
    className: styles.deepSleep,
    borderColorDawn: '#a855f7',
    glowColorDawn: 'rgba(168, 85, 247, 0.3)',
    gradientColorDawn: 'rgba(168, 85, 247, 0.05)',
    borderColorMidnight: '#7c3aed',
    glowColorMidnight: 'rgba(124, 58, 237, 0.4)',
    gradientColorMidnight: 'rgba(124, 58, 237, 0.05)',
    icon: '🛏️',
    badgeBg: 'bg-sleep-deep/10',
    badgeText: 'text-sleep-deep',
    iconBg: 'bg-sleep-deep/10'
  };
};

const RepositoryCard = ({ repository, onCardClick }: RepositoryCardProps) => {
  const [theme, setTheme] = useState<'dawn' | 'midnight'>('dawn');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dawn' | 'midnight' || 'dawn';
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'dawn' | 'midnight' || 'dawn';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(repository);
    }
  };

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(repository.url, '_blank', 'noopener,noreferrer');
  };

  const sleepState = getSleepState(repository.sleep_score);
  const isMidnight = theme === 'midnight';

  return (
    <div
      className={clsx(
        'group',
        styles.card,
        sleepState.className,
        onCardClick && 'cursor-pointer',
        repository.is_archived && 'opacity-75',
        repository.is_disabled && 'opacity-60'
      )}
      style={{
        ['--border-color' as string]: isMidnight ? sleepState.borderColorMidnight : sleepState.borderColorDawn,
        ['--glow-color' as string]: isMidnight ? sleepState.glowColorMidnight : sleepState.glowColorDawn,
        ['--gradient-color' as string]: isMidnight ? sleepState.gradientColorMidnight : sleepState.gradientColorDawn,
        ['--card-bg' as string]: 'var(--color-card)'
      }}
      onClick={handleCardClick}
    >
      {/* Sleep icon decoration */}
      <div className={clsx(
        'absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg opacity-70',
        sleepState.iconBg
      )}>
        <span className="text-base">{sleepState.icon}</span>
      </div>

      {/* Status indicators */}
      <div className="absolute top-16 right-4 flex flex-col items-end gap-1">
        {repository.is_private ? (
          <Lock className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Unlock className="h-4 w-4 text-muted-foreground" />
        )}
        {repository.is_fork && <GitFork className="h-4 w-4 text-muted-foreground" />}
        {getStatusIcon(repository)}
      </div>

      {/* External link button */}
      <button
        className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted"
        title="Open in GitHub"
        onClick={handleExternalLinkClick}
      >
        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
      </button>

      {/* Header */}
      <div className="mb-4">
        <h3 className={clsx('text-lg font-semibold truncate pr-20', getStatusColor(repository))}>
          {repository.name}
        </h3>
        <p className="text-xs text-muted-foreground/60 truncate">
          {repository.full_name}
        </p>
      </div>

      {/* Description */}
      {repository.description && (
        <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-2 leading-relaxed">
          {repository.description}
        </p>
      )}

      {/* Topics */}
      {repository.topics && repository.topics.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1">
          {repository.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {topic}
            </span>
          ))}
          {repository.topics.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              +{repository.topics.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Language */}
      {repository.primary_language.name && (
        <div className="mb-4 flex items-center gap-2 text-sm">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: repository.primary_language.color || '#gray' }}
          />
          <span className="text-muted-foreground">
            {repository.primary_language.name}
          </span>
        </div>
      )}

      {/* Sleep Score Badge */}
      <div className={clsx('mb-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5', sleepState.badgeBg)}>
        <span className="text-xs font-medium text-muted-foreground">Sleep Score</span>
        <span className={clsx('text-base font-semibold', sleepState.badgeText)}>
          {repository.sleep_score}
        </span>
      </div>

      {/* Stats */}
      {(repository.issues_count > 0 || repository.pull_requests_count > 0) && (
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          {repository.issues_count > 0 && (
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>{repository.issues_count}</span>
            </div>
          )}
          {repository.pull_requests_count > 0 && (
            <div className="flex items-center gap-1">
              <GitBranch className="h-4 w-4" />
              <span>{repository.pull_requests_count}</span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground/60">
        <span>Updated {formatDate(repository.updated_at)}</span>
        {repository.license && (
          <span className="truncate max-w-20" title={repository.license}>
            {repository.license}
          </span>
        )}
      </div>
    </div>
  );
};

export default RepositoryCard;
