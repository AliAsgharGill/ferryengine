"use client";

import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Operator } from '@/types/operators';

interface OperatorCardProps extends Operator {}

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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row px-4 sm:py-3 border-b border-gray-100 sm:gap-0 md:items-center md:justify-between">
        {/* Logo */}
        <div className="relative h-24 w-full md:h-16 md:w-1/3">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain object-left w-full"
          />
        </div>

        {/* Name and Rating */}
        <div className="flex flex-col md:items-end items-start w-full md:w-2/3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 md:text-right">
            {name}
          </h3>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              by {customerCount.toLocaleString()} customers
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Info */}
        <div className="w-full md:w-1/3 p-4">
          <div className="text-sm space-y-3">
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
              <div className="font-medium text-gray-700">
                Vessels number: {vesselCount}
              </div>
              <div className="text-gray-600">
                Ferry types: {ferryTypes}
              </div>
            </div>

            <div>
              <div className="font-medium text-gray-700">Popular vessels:</div>
              <div className="text-[#00b6d6]">
                {popularVessels.map((vessel, index) => (
                  <span key={vessel}>
                    <Link
                      href={`/vessels/${vessel.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:underline"
                    >
                      {vessel}
                    </Link>
                    {index < popularVessels.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="flex-1 p-4">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 p-2 flex justify-end">
        <Button
          variant="link"
          className="text-[#00b6d6] hover:text-[#00b6d6] h-auto font-medium text-base flex items-center p-2"
        >
          More about {name}
          <div className="ml-1 bg-[#00b6d6] text-white rounded-full w-5 h-5 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Button>
      </div>
    </div>
  );
};
