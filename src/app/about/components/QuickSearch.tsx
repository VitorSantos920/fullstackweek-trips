import Image from 'next/image';
import React from 'react';
import {} from 'react-icons';

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h1 className="font-medium text-grayPrimary whitespace-nowrap px-3">
          Tente pesquisar por
        </h1>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image height={25} width={25} src="/hotel-icon.png" alt="hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image height={25} width={25} src="/farm-icon.png" alt="fazenda" />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image height={25} width={25} src="/cottage-icon.png" alt="chalé" />
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image height={25} width={25} src="/inn-icon.png" alt="pousada" />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
