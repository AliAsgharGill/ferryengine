import Link from 'next/link';
import { Instagram, Facebook, Twitter, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#00b6d6] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-bold">ferryengine</span>
              <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
            </div>
          </div>


          <div className="flex flex-col md:flex-row justify-between flex-grow">

            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white/80">About us</Link></li>
                <li><Link href="/careers" className="hover:text-white/80">Careers</Link></li>
                <li><Link href="/press" className="hover:text-white/80">Press</Link></li>
              </ul>
            </div>


            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/manage-booking" className="hover:text-white/80">Manage booking</Link></li>
                <li><Link href="/contact" className="hover:text-white/80">Contact</Link></li>
                <li><Link href="/legal" className="hover:text-white/80">Legal Notice</Link></li>
                <li><Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white/80">Terms & Conditons</Link></li>
              </ul>
            </div>


            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">Become a partner</h3>
              <ul className="space-y-2">
                <li><Link href="/affiliate" className="hover:text-white/80">Affiliate Programs</Link></li>
                <li><Link href="/travel-agencies" className="hover:text-white/80">Travel Agencies</Link></li>
                <li><Link href="/bloggers" className="hover:text-white/80">Bloggers</Link></li>
                <li><Link href="/api" className="hover:text-white/80">Get the API</Link></li>
              </ul>
            </div>


            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">Get Updates and Special Offers</h3>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full px-4 py-3 rounded-md outline-none text-gray-800 pr-24"
                />
                <Button
                  className="absolute right-0 top-0 h-full bg-white text-[#00b6d6] hover:bg-white/90 rounded-r-md font-medium px-4"
                >
                  Subscribe
                </Button>
              </div>


              <div className="mt-8 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Get our Apps</h3>
                  <div className="flex space-x-4 mb-6">
                    <Link href="#" className="hover:text-white/80"><Apple size={24} /></Link>
                    <Link href="#" className="hover:text-white/80"><Play size={24} /></Link>
                  </div>
                </div>
                <div>

                  <h3 className="font-semibold text-lg mb-4">Follow-us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="hover:text-white/80 text-black"><Instagram size={24} /></Link>
                    <Link href="#" className="hover:text-white/80 text-black"><Facebook size={24} /></Link>
                    <Link href="#" className="hover:text-white/80 text-black"><Twitter size={24} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};