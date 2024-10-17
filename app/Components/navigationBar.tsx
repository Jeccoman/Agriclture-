
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import { Dropdown } from "flowbite-react";

  

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/path/to/logo.png" alt="Logo" className="h-8 mr-2" />
        <span className="text-blue-600 font-semibold text-lg">Jumlajumla</span>
      </div>

      {/* Right Side Elements */}
      <div className="flex items-center space-x-4">
        {/* Catalog Button */}
        <Button className="bg-blue-600 text-yellow-500 rounded flex items-center">
          <Image src="/path/to/catalog-icon.png" alt="Catalog" className="h-5 mr-1" />
          Catalog
        </Button>

        {/* Search Input */}
        <Input
          placeholder="Search products"
          className="border border-gray-300 rounded px-2 py-1"
        />

        {/* Search Button */}
        <Button className="bg-blue-600 rounded flex items-center">
          <Image src="/path/to/search-icon.png" alt="Search" className="h-5 text-yellow-500" />
        </Button>

        {/* Currency Dropdown */}
        <Dropdown className="flex items-center">
          <Image src="/path/to/currency-icon.png" alt="Currency" className="h-5 mr-1" />
          <span>TZS</span>
        </Dropdown>

        {/* Language Dropdown */}
        <Dropdown className="flex items-center">
          <Image src="/path/to/globe-icon.png" alt="Language" className="h-5 mr-1" />
          <span>English</span>
        </Dropdown>

        {/* Icons */}
        <div className="flex space-x-2">
          <Image src="/path/to/sun-icon.png" alt="Sun" className="h-5" />
          <Image src="/path/to/user-icon.png" alt="User" className="h-5" />
          <Image src="/path/to/location-icon.png" alt="Location" className="h-5" />
          <Image src="/path/to/heart-icon.png" alt="Heart" className="h-5" />
          <Image src="/path/to/bell-icon.png" alt="Bell" className="h-5" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;