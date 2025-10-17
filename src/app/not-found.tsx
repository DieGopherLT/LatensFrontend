'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />

      {/* Floating sleep elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-sleep-drift absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/10 blur-xl" />
        <div
          className="animate-sleep-drift absolute top-3/4 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="animate-sleep-drift absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-secondary/10 blur-lg"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="mx-auto max-w-2xl text-center">
          {/* Sleep state badge */}
          <div className="animate-sleep-awaken my-8 inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <div className="animate-sleep-pulse mr-2 h-2 w-2 rounded-full bg-violet-600" />
            Deep Sleep Detected
          </div>

          {/* 404 number with sleep theme */}
          <div className="animate-sleep-awaken stagger-100 mb-6">
            <div className="mb-4 text-8xl font-bold text-foreground md:text-9xl">
              4
              <span className="inline-block animate-sleep-pulse bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                0
              </span>
              4
            </div>
          </div>

          {/* Main heading */}
          <h1 className="animate-sleep-awaken stagger-200 mb-6 text-3xl leading-tight font-bold text-foreground md:text-5xl">
            This Page is in{' '}
            <span className="bg-gradient-to-r from-violet-600 to-accent bg-clip-text text-transparent">
              Deep Sleep
            </span>
          </h1>

          {/* Description */}
          <p className="animate-sleep-awaken stagger-300 mx-auto mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s wake up somewhere
            more productive.
          </p>

          {/* Action buttons */}
          <div className="animate-sleep-awaken stagger-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="interactive-glow group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              href="/"
            >
              <Home className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Back to Home
            </Link>

            <button
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/70 hover:shadow-lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Go Back
            </button>
          </div>

          {/* Sleep score visualization */}
          <div className="animate-sleep-awaken stagger-500 animate-sleep-pulse mx-auto mt-16 max-w-md rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 text-sm text-muted-foreground">404-error</div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-foreground">Sleep Score</span>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-violet-600" />
                <span className="text-2xl font-bold text-violet-600">100</span>
              </div>
            </div>
            <div className="mb-2 h-2 w-full rounded-full bg-muted/30">
              <div className="h-2 rounded-full bg-violet-600" style={{ width: '100%' }} />
            </div>
            <div className="text-xs text-muted-foreground">
              Deep Sleep • This page never existed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
