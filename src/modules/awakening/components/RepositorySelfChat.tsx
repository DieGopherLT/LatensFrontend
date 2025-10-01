'use client';

import { ArrowRight } from 'lucide-react';

import { SelfChatContent } from '../types/awakening';

interface RepositorySelfChatProps {
  selfChat: SelfChatContent;
  repositoryName: string;
}

const RepositorySelfChat = ({
  selfChat,
  repositoryName,
}: RepositorySelfChatProps) => {
  return (
    <div className="w-full max-w-4xl space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">
          {repositoryName} is ready to continue
        </h2>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what the repository remembers
        </p>
      </div>

      {/* Chat bubbles container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Yesterday section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue flex items-center justify-center">
              <span className="text-xs font-semibold text-white">Y</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              What I was doing
            </h3>
          </div>

          <div className="space-y-3">
            {selfChat.yesterday.map((message, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-4 rounded-lg bg-blue/10 border border-blue/20">
                  <p className="text-sm text-foreground leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-aurora flex items-center justify-center">
              <span className="text-xs font-semibold text-white">T</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              What I should do next
            </h3>
          </div>

          <div className="space-y-3">
            {selfChat.today.map((message, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{
                  animationDelay: `${(selfChat.yesterday.length + index) * 150}ms`,
                }}
              >
                <div className="p-4 rounded-lg bg-aurora/10 border border-aurora/20">
                  <p className="text-sm text-foreground leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connection arrow (hidden on mobile) */}
      <div className="hidden lg:flex justify-center -mt-4">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <div className="h-px w-16 bg-border" />
          <ArrowRight className="h-5 w-5" />
          <div className="h-px w-16 bg-border" />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button className="btn-primary w-full sm:w-auto">
          Open in Editor
        </button>
        <button className="btn-ghost w-full sm:w-auto">
          View Full Analysis
        </button>
      </div>
    </div>
  );
};

export default RepositorySelfChat;
