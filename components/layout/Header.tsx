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
      <div className="w-full bg-white border-b border-white/20 text-[#00b6d6] hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} color="#00b6d6" />
            <span>+30 212 000 3000</span>
            <span className="text-[#00b6d6]/70">Available hours in France: 07:00 to 22:00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1">
              <Globe size={16} color="#00b6d6" />
              <span>English</span>
            </button>
            <span>€ Euro</span>
            <Button variant="ghost" className="text-[#00b6d6] hover:text-[#00b6d6]/80">
              Login • Manage bookings
            </Button>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
        <nav className="py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl font-bold">ferryengine</span>
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
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
