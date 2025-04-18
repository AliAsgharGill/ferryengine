import Link from 'next/link';
import { Instagram, Facebook, Twitter, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#00b6d6] text-white py-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">ferryengine</span>
              <Image src="/images/logo.png" alt="Logo" width={28} height={28} />
            </div>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(3,_minmax(0,_1fr))_1px_minmax(0,_1.5fr)] gap-10 flex-grow items-start">
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/press">Press</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/manage-booking">Manage booking</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/legal">Legal Notice</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Become a partner */}
            <div>
              <h3 className="font-semibold mb-3">Become a partner</h3>
              <ul className="space-y-2">
                <li><Link href="/affiliate">Affiliate Programs</Link></li>
                <li><Link href="/travel-agencies">Travel Agencies</Link></li>
                <li><Link href="/bloggers">Bloggers</Link></li>
                <li><Link href="/api">Get the API</Link></li>
              </ul>
            </div>

            {/* Vertical line */}
            <div className="hidden lg:block w-px bg-white/50 h-full mx-auto" />

            {/* Get Updates */}
            <div>
              <h3 className="font-semibold mb-3">Get Updates and Special Offers</h3>
              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full px-4 py-2 rounded-md text-black outline-none pr-28"
                />
                <Button className="absolute right-0 top-0 h-full bg-white text-[#00b6d6] hover:bg-white font-medium rounded-r-md px-4">
                  Subscribe
                </Button>
              </div>

              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold mb-2">Get our Apps</h4>
                  <div className="flex gap-4">
                    <Link href="#"><Apple size={20} /></Link>
                    <Link href="#"><Play size={20} /></Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Follow-us</h4>
                  <div className="flex gap-4 text-black">
                    <Link href="#"><Instagram size={20} /></Link>
                    <Link href="#"><Facebook size={20} /></Link>
                    <Link href="#"><Twitter size={20} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/40" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>© 2023, Ferryengine.com, All rights reserved</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Image src="/images/visa.png" alt="Visa" width={40} height={20} />
            <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={20} />
            <Image src="/images/paypal.png" alt="PayPal" width={40} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
