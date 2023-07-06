'use client';

import { useSession } from 'next-auth/react';
import TripSerach from './components/TripSearch';

export default function Home() {
  return (
    <div>
      <TripSerach />
    </div>
  );
}
