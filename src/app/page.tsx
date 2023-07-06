'use client';

import { useSession } from 'next-auth/react';
import TripSerach from './components/TripSearch';
import QuickSearch from './components/QuickSearch';
import RecommendedTrips from './components/RecommendedTrips';

export default function Home() {
  return (
    <div>
      <TripSerach />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
