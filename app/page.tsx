'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Scene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-jarvis-dark" />,
});

const ChatWindow = dynamic(() => import('@/components/chat/ChatWindow'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-gradient-to-br from-jarvis-dark via-blue-950 to-jarvis-dark">
      <Suspense fallback={<div className="w-full h-screen bg-jarvis-dark" />}>
        <Scene />
      </Suspense>
      <Suspense fallback={null}>
        <ChatWindow />
      </Suspense>
    </main>
  );
}
