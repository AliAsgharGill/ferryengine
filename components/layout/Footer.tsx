import Link from 'next/link';
import { Facebook, Twitter, Instagram, Apple, PlayCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-[#00b6d6] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <span className="text-2xl font-bold">ferryengine</span>
            <div className="w-6 h-6 bg-yellow-400 transform rotate-12" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white/80">About us</Link></li>
                <li><Link href="/careers" className="hover:text-white/80">Careers</Link></li>
                <li><Link href="/press" className="hover:text-white/80">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/manage-booking" className="hover:text-white/80">Manage booking</Link></li>
                <li><Link href="/contact" className="hover:text-white/80">Contact</Link></li>
                <li><Link href="/legal" className="hover:text-white/80">Legal Notice</Link></li>
                <li><Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white/80">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Become a partner</h3>
              <ul className="space-y-2">
                <li><Link href="/affiliate" className="hover:text-white/80">Affiliate Programs</Link></li>
                <li><Link href="/travel-agencies" className="hover:text-white/80">Travel Agencies</Link></li>
                <li><Link href="/bloggers" className="hover:text-white/80">Bloggers</Link></li>
                <li><Link href="/api" className="hover:text-white/80">Get the API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get Updates and Special Offers</h3>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Type your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-white text-[#00b6d6] hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2023, Ferryengine.com, All rights reserved
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white/80"><Instagram size={20} /></Link>
                <Link href="#" className="hover:text-white/80"><Facebook size={20} /></Link>
                <Link href="#" className="hover:text-white/80"><Twitter size={20} /></Link>
              </div>
              
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white/80"><Apple size={20} /></Link>
                <Link href="#" className="hover:text-white/80"><PlayCircle size={20} /></Link>
              </div>
              
              <div className="flex gap-2">
                <img src="/images/visa.png" alt="Visa" className="h-6" />
                <img src="/images/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="/images/paypal.png" alt="PayPal" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};