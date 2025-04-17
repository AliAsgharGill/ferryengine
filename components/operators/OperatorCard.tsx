"use client";

import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Operator } from '@/types/operators';

interface OperatorCardProps extends Operator { }

export const OperatorCard = ({
  name,
  logo,
  rating,
  customerCount,
  operatesIn,
  vesselCount,
  ferryTypes,
  description,
  popularVessels,
}: OperatorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 flex flex-col">
          {/* Logo */}
          <div className="aspect-[5/1] relative mb-2">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>

          {/* Details under logo */}
          <div className="text-sm space-y-2">
            <div>
              <div className="font-medium text-gray-700">Operates in</div>
              <div className="flex flex-wrap items-center gap-1">
                {operatesIn.map((country) => (
                  <span key={country.code} className="flex items-center gap-1">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      className="w-4 h-4 rounded-sm"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-600">{country.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium text-gray-700">Vessels number: {vesselCount}</div>
            </div>

            <div>
              <div className="font-medium text-gray-700">Ferry types: {ferryTypes}</div>
            </div>

            <div>
              <div className="font-medium text-gray-700">Popular vessels:</div>
              <div className="text-[#00b6d6]">
                {popularVessels.map((vessel, index) => (
                  <span key={vessel}>
                    <Link href={`/vessels/${vessel.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                      {vessel}
                    </Link>
                    {index < popularVessels.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Title and rating */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <div className="flex flex-col items-end">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                by {customerCount.toLocaleString()} customers
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6">{description}</p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:space-y-2 items-center justify-between">
            <Button
              variant="link"
              className="text-[#00b6d6] hover:text-[#00b6d6] p-0 h-auto font-normal flex items-center space-y-2"
            >
              More about {name}
              <span className="ml-1">▶</span>
            </Button>
            <Button
              variant="default"
              className="bg-[#00b6d6] text-white hover:text-white border[#00b6d6] hover:bg-[#00b6d6] transition-colors mt-2 mg:mt-0"
            >
              View routes & prices
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};