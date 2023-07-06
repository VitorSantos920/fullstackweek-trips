'use client';

import { useSession } from 'next-auth/react';
import TripSerach from './components/TripSearch';
import QuickSearch from './about/components/QuickSearch';

export default function Home() {
  return (
    <div>
      <TripSerach />
      <QuickSearch />
    </div>
  );
}
