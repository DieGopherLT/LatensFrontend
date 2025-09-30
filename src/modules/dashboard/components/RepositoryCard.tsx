'use client';

import { formatDistanceToNow } from 'date-fns';
import {
  ExternalLink,
  Lock,
  Unlock,
  GitFork,
  Star,
  GitBranch,
  FileText,
  AlertTriangle,
  Archive
} from 'lucide-react';
import { GitHubRepository } from '../types/repository';

interface RepositoryCardProps {
  repository: GitHubRepository;
  onCardClick?: (repository: GitHubRepository) => void;
}

const RepositoryCard = ({ repository, onCardClick }: RepositoryCardProps) => {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(repository);
    }
  };

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(repository.url, '_blank', 'noopener,noreferrer');
  };

  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch {
      return 'Unknown';
    }
  };

  const getStatusColor = () => {
    if (repository.is_archived) return 'text-muted-foreground';
    if (repository.is_disabled) return 'text-destructive';
    return 'text-foreground';
  };

  const getStatusIcon = () => {
    if (repository.is_archived) return <Archive className="h-4 w-4" />;
    if (repository.is_disabled) return <AlertTriangle className="h-4 w-4" />;
    return null;
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        group relative overflow-hidden rounded-xl border border-border bg-card p-6
        transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1
        ${onCardClick ? 'cursor-pointer' : ''}
        ${repository.is_archived ? 'opacity-75' : ''}
        ${repository.is_disabled ? 'opacity-60' : ''}
      `}
    >
      {/* Status indicators */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {repository.is_private ? (
          <Lock className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Unlock className="h-4 w-4 text-muted-foreground" />
        )}
        {repository.is_fork && (
          <GitFork className="h-4 w-4 text-muted-foreground" />
        )}
        {getStatusIcon()}
      </div>

      {/* External link button */}
      <button
        onClick={handleExternalLinkClick}
        className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted"
        title="Open in GitHub"
      >
        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
      </button>

      {/* Header */}
      <div className="mb-4">
        <h3 className={`text-lg font-semibold truncate pr-16 ${getStatusColor()}`}>
          {repository.name}
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          {repository.full_name}
        </p>
      </div>

      {/* Description */}
      {repository.description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
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
        <div className="mb-4 flex items-center space-x-2">
          <div
            className="h-3 w-3 rounded-full border border-border"
            style={{ backgroundColor: repository.primary_language.color || '#gray' }}
          />
          <span className="text-sm text-muted-foreground">
            {repository.primary_language.name}
          </span>
        </div>
      )}

      {/* Stats */}
      <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
        {repository.issues_count > 0 && (
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>{repository.issues_count}</span>
          </div>
        )}
        {repository.pull_requests_count > 0 && (
          <div className="flex items-center space-x-1">
            <GitBranch className="h-4 w-4" />
            <span>{repository.pull_requests_count}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <span>Updated</span>
          <span>{formatDate(repository.updated_at)}</span>
        </div>
        {repository.license && (
          <span className="truncate max-w-20" title={repository.license}>
            {repository.license}
          </span>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default RepositoryCard;