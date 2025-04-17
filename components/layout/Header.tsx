"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeColor = "#00b6d6";

  return (
    <header className="bg-[#00b6d6] text-white">
      <div className="w-full bg-white border-b border-white/20 text-black hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/images/headphone.png"
              alt="Logo"
              width={16}
              height={16}
              className="w-8 h-8 md:w-[16px] md:h-[16px]"
            />
            <span className='text-[#00b6d6]'>+30 212 000 3000</span>
            <span className="text-black/70">Available hours in France: 07:00 to 22:00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1">
              <Image src={'/images/flags/usa.png'} width={16} height={16} alt="USA Flag" className="" />
              <span>English</span>
            </button>
            <span>€ Euro</span>
            <Button variant="ghost" className="text-black hover:text-[#00b6d6]/80">
              Login • Manage bookings
            </Button>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
        <nav className="py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-4xl font-bold">ferryengine</span>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-[40px] md:h-[40px]"
            />
          </Link>


          <div className="hidden md:flex items-center gap-6">
            <Link href="/destinations" className="hover:text-white/80">Destinations</Link>
            <Link href="/companies" className="hover:text-white/80">Companies</Link>
            <Link href="/routes" className="hover:text-white/80">Routes</Link>
            <Link href="/reviews" className="hover:text-white/80">Reviews</Link>
            <Link href="/about" className="hover:text-white/80">About us</Link>
            <Link href="/support" className="hover:text-white/80">Support</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} color="white" />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/destinations" className="block hover:text-white/80">Destinations</Link>
            <Link href="/companies" className="block hover:text-white/80">Companies</Link>
            <Link href="/routes" className="block hover:text-white/80">Routes</Link>
            <Link href="/reviews" className="block hover:text-white/80">Reviews</Link>
            <Link href="/about" className="block hover:text-white/80">About us</Link>
            <Link href="/support" className="block hover:text-white/80">Support</Link>
          </div>
        )}
      </div>
    </header>
  );
};
