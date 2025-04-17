"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#00b6d6] text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-white/20">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+30 212 000 3000</span>
            <span className="text-white/70">Available hours in France: 07:00 to 22:00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1">
              <Globe size={16} />
              <span>English</span>
            </button>
            <span>€ Euro</span>
            <Button variant="ghost" className="text-white hover:text-white/80">
              Login • Manage bookings
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl font-bold">ferryengine</span>
            <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/destinations" className="hover:text-white/80">Destinations</Link>
            <Link href="/companies" className="hover:text-white/80">Companies</Link>
            <Link href="/routes" className="hover:text-white/80">Routes</Link>
            <Link href="/reviews" className="hover:text-white/80">Reviews</Link>
            <Link href="/about" className="hover:text-white/80">About us</Link>
            <Link href="/support" className="hover:text-white/80">Support</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Navigation */}
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