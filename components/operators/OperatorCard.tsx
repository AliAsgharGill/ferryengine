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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="aspect-[2/1] relative">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">{name}</h3>
            <div className="flex items-center gap-2">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-sm">
              <div className="font-medium text-gray-700 mb-1">Operates in</div>
              <div className="flex flex-wrap items-center gap-2">
                {operatesIn.map((country) => (
                  <span key={country.code} className="flex items-center gap-1">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-4 h-4 rounded-sm"
                    />
                    <span className="text-gray-600">{country.name}</span>
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-sm">
              <div className="font-medium text-gray-700 mb-1">Vessels number</div>
              <div className="text-gray-600">{vesselCount}</div>
            </div>
            
            <div className="text-sm">
              <div className="font-medium text-gray-700 mb-1">Ferry types</div>
              <div className="text-gray-600">{ferryTypes}</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="font-medium text-gray-700 mb-1 text-sm">Popular vessels:</div>
            <div className="text-[#00b6d6] text-sm">
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
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Button variant="link" className="text-[#00b6d6] hover:text-[#008ca3] p-0 h-auto font-normal">
              More about {name}
            </Button>
            <Button 
              variant="outline" 
              className="text-[#00b6d6] border-[#00b6d6] hover:bg-[#00b6d6] hover:text-white transition-colors"
            >
              View routes & prices
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};