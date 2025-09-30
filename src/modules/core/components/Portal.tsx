'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

/**
 * Portal component that renders children into a DOM node outside the parent hierarchy
 * Handles SSR safely by waiting for client-side mount
 */
export const Portal = ({ children, containerId = 'portal-root' }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    let portalContainer = document.getElementById(containerId);

    // Create container if it doesn't exist
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = containerId;
      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);

    return () => {
      // Cleanup: remove container if empty
      if (portalContainer && portalContainer.childNodes.length === 0) {
        portalContainer.remove();
      }
    };
  }, [containerId]);

  if (!mounted || !container) {
    return null;
  }

  return createPortal(children, container);
};