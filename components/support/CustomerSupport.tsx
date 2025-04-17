"use client";

import { Phone, Mail, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export const CustomerSupport = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Support</h2>
          <p className="text-gray-600">
            Don&apos;t hesitate to contact us! We offer an awesome service rated ⭐⭐⭐⭐⭐ by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center  ">
          <div className="order-2 md:order-1 flex justify-end">
            <Image
              src="/images/customer-support.png"
              alt="Customer Support"
              width={500}
              height={500}
              className="w-full max-w-md"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8 md:ms-32">
            <div className="flex items-start gap-4">
              <div className="bg-[#00b6d6] p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
                <Image
                  src="/images/headphone.png"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                  className="absolute top-0 left-0 opacity-0"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Toll Free Customer Care</h3>
                <p className="text-[#00b6d6]">+1 (123) 456 7890</p>
                <p className="text-sm text-gray-600">Available hours in France: 07:00 to 22:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#00b6d6] p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Send us an email</h3>
                <a href="mailto:info@ferrytickets.com" className="text-[#00b6d6] hover:underline">
                  info@ferrytickets.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#00b6d6] p-3 rounded-full">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                <a href="/faq" className="text-[#00b6d6] hover:underline">
                  Find the answers to your questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};