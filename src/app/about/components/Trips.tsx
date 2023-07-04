import { prisma } from '@/lib/prisma';
import React from 'react';

const getTrips = async () => await prisma.trip.findMany({});

const Trips = async () => {
  const data = await getTrips();

  console.log({ data });

  return (
    <div>
      {data.map((i: any) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </div>
  );
};

export default Trips;
