export interface DefaultBranch {
  name: string;
  committed_date: string;
  author: string;
}

export interface PrimaryLanguage {
  name: string;
  color: string;
}

export interface GitHubRepository {
  id?: string;
  github_id: string;
  name: string;
  full_name: string;
  description: string;
  is_private: boolean;
  is_fork: boolean;
  is_disabled: boolean;
  is_archived: boolean;
  is_hidden: boolean;
  url: string;
  default_branch: DefaultBranch;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  issues_count: number;
  pull_requests_count: number;
  primary_language: PrimaryLanguage;
  license: string;
  sleep_score: number;
}