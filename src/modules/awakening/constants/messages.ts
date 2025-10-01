/**
 * Mock self-chat messages for demonstration
 * In production, these will come from backend AI analysis
 */
export const MOCK_SELF_CHAT = {
  yesterday: [
    'I was working on implementing the user authentication flow',
    'Made progress on the database schema migrations',
    'Fixed several bugs in the API endpoints',
    'Started refactoring the component architecture',
  ],
  today: [
    'Continue refactoring components to use the new design system',
    'Write tests for the authentication service',
    'Review and merge pending pull requests',
    'Update documentation for the new API endpoints',
  ],
};

/**
 * Loading messages displayed during phase transitions
 */
export const LOADING_MESSAGES = [
  'Analyzing repository state...',
  'Processing commit history...',
  'Evaluating code changes...',
  'Generating insights...',
];
