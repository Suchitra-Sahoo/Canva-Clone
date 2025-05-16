'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import { PaintBucket } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-400 flex flex-col items-center justify-center px-4 relative text-white">
      
      {/* User menu top-right */}
      <div className="fixed top-4 right-4 z-50">
        <UserButton />
      </div>

      {/* Logo */}
      <Image
        src="/Logo.png"
        alt="Coffee and Canvas Logo"
        width={600}
        height={600}
        priority
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mt-8 mb-4 drop-shadow">
        Brew Creativity & Paint Your Ideas
      </h1>

      {/* Description */}
      <p className="text-lg mb-8 text-white/90 max-w-xl text-center">
        Sip inspiration and bring your visions to life in a cozy workspace crafted for creators who love coffee and art.
      </p>

      {/* Button */}
      <Button
        onClick={() => router.push('/workspace')}
        className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      >
       <PaintBucket className="text-black text-3xl" />
       Open Workspace
      </Button>
    </div>
  );
}
