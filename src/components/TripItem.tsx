import { Trip } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface TipItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TipItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={trip.coverImage}
          fill
          alt={trip.name}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <h3 className="text-primaryDarker font-medium text-sm mt-2">
        {trip.name}
      </h3>
      <div className="flex items-center gap-1 my-1 ">
        <ReactCountryFlag svg countryCode={trip.countryCode} />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>
      <p className="text-xs text-grayPrimary">
        R$
        <span className="text-primary font-medium">
          {trip.pricePerDay.toString()}
        </span>{' '}
        por dia
      </p>
    </div>
  );
};

export default TripItem;
