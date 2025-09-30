import {
  Bed,
  BookOpen,
  Brain,
  FolderGit2,
  Github,
  Moon,
  Shield,
  Sun,
  Target,
  Zap,
} from 'lucide-react';

export const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Sleep Score Analysis',
    description:
      "Intelligent assessment of your project's dormancy level using commit patterns, issue activity, and development momentum.",
    highlight: 'AI-Powered',
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Latens Recovery',
    description:
      'Comprehensive memory reconstruction that captures where you left off, including pending tasks, recent changes, and development context.',
    highlight: 'Context-Aware',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Instant Awakening',
    description:
      'Get back to productive development in minutes with prioritized task suggestions and contextual reminders.',
    highlight: 'Lightning Fast',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Smart Recommendations',
    description:
      "Actionable next steps based on your project's current state, dependencies, and development history.",
    highlight: 'Personalized',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Privacy First',
    description:
      'All analysis happens securely. Your code stays on GitHub, we only access public metadata and repository insights.',
    highlight: 'Secure',
  },
  {
    icon: <FolderGit2 className="h-8 w-8" />,
    title: 'Multi-Repository Support',
    description:
      'Manage multiple sleeping projects from a unified dashboard with cross-project insights and dependencies tracking.',
    highlight: 'Scalable',
  },
];

export const steps = [
  {
    step: '01',
    title: 'Connect Repository',
    description:
      'Authenticate with GitHub and select the repository you want to analyze. Latens securely accesses only the metadata needed for analysis.',
    icon: <Github className="h-8 w-8" />,
    color: 'aurora',
  },
  {
    step: '02',
    title: 'Sleep Analysis',
    description:
      "Our AI analyzes commit patterns, issue activity, PR status, and development momentum to calculate your project's Sleep Score.",
    icon: <Brain className="h-8 w-8" />,
    color: 'blue',
  },
  {
    step: '03',
    title: 'Memory Recovery',
    description:
      'Latens reconstructs your development context including recent changes, open issues, pending tasks, and architectural decisions.',
    icon: <BookOpen className="h-8 w-8" />,
    color: 'gold',
  },
  {
    step: '04',
    title: 'Smart Awakening',
    description:
      "Get personalized recommendations for next steps, priority tasks, and development paths based on your project's current state.",
    icon: <Zap className="h-8 w-8" />,
    color: 'success',
  },
];

export const sleepStates = [
  {
    name: 'Light Sleep',
    range: '0-30',
    color: 'sleep-light',
    description: 'Recent active development with regular commits and activity.',
    characteristics: [
      'Last commit within 1-2 weeks',
      'Active issue discussions',
      'Recent PR activity',
      'Dependencies up to date',
    ],
    awakening: 'Quick refresh - review recent changes and continue development.',
    icon: <Sun className="h-12 w-12" />,
  },
  {
    name: 'Standard Sleep',
    range: '31-60',
    color: 'sleep-standard',
    description: 'Moderate pause in development with some dormancy indicators.',
    characteristics: [
      'Last commit 3-8 weeks ago',
      'Some stale issues or PRs',
      'Minor dependency drift',
      'Partial context loss',
    ],
    awakening: 'Context recovery - analyze recent state and prioritize next steps.',
    icon: <Moon className="h-12 w-12" />,
  },
  {
    name: 'Deep Sleep',
    range: '61-100',
    color: 'sleep-deep',
    description: 'Extended dormancy requiring comprehensive awakening process.',
    characteristics: [
      'Last commit 2+ months ago',
      'Stale dependencies & security alerts',
      'Forgotten architectural decisions',
      'Significant context reconstruction needed',
    ],
    awakening: 'Full recovery - comprehensive analysis and gradual reengagement.',
    icon: <Bed className="h-12 w-12" />,
  },
];
