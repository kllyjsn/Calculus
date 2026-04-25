import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      {/* Desktop: sidebar offset. Mobile: top header + bottom nav padding */}
      <main className="md:ml-64 min-h-screen pt-14 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-5xl mx-auto px-4 py-4 md:px-8 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
