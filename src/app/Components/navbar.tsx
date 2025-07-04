"use client";
import 'boxicons/css/boxicons.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null); // Default to null to avoid mismatch

  useEffect(() => {
    // Set the active link based on the current URL after the component has mounted
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update the active link
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <div>
      {/* Main Navigation Section */}
      <nav className="bg-[#113045] p-4 h-auto">
        <div className="container mx-auto flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="text-white text-xl font-bold md:mt-0">
            <Link href="/">
              <Image
                src="/logo_trim-removebg-preview.png"
                alt="Innovyasa Logo"
                width={280} // Default width
                height={72} // Default height
                className="w-[180px] h-[50px] sm:w-[220px] sm:h-[60px] md:w-[240px] md:h-[68px]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links and Sign In Button for Larger Screens */}
          <div className="hidden md:flex items-center space-x-4 w-full md:w-auto ml-auto">
            {/* Navigation Links */}
            {[
              { href: '/', label: 'Home' },
              { href: '/Internship', label: 'Internship' },
              { href: '/Courses', label: 'Courses' },
              { href: '/Devsol', label: 'Devsol' },
              { href: '/Community', label: 'Community' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block mt-4 md:text-[26px] md:mt-15 md:inline-block md:text-white relative group ${
                  activeLink === link.href ? 'text-orange-400' : ''
                }`}
              >
                <p className="text-[24px] pb-2 pr-2 pl-2 group-hover:rounded-t-lg transition-all">
                  {link.label}
                </p>
                <span
                  className={`absolute rounded bottom-0 left-0 h-[4px] bg-[#FF7D03] transition-all ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}

            {/* Vertical Line */}
            <div className="hidden md:mt-7 md:block h-[60px] border-l md:ml-5 md:mr-10 border-gray-400 mx-4"></div>

            {/* Sign In Button */}
            <div className="ml-auto">
              <Link
                href="/signin"
                className="bg-[#FF7D03] md:mt-7 text-white text-center block text-[25px] px-5 py-2 rounded hover:bg-orange-500 transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Toggle Menu for Small Screens */}
      {isOpen && (
        <div className="bg-white text-black p-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/Internship', label: 'Internship' },
            { href: '/Courses', label: 'Courses' },
            { href: '/Devsol', label: 'Devsol' },
            { href: '/Community', label: 'Community' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`block mt-4 text-black relative group ${
                activeLink === link.href ? 'text-orange-400' : ''
              }`}
            >
              <p className="text-[25px] pb-2 pr-2 pl-2 group-hover:rounded-t-lg transition-all">
                {link.label}
              </p>
              <span
                className={`absolute rounded bottom-0 left-0 h-[4px] bg-[#FF7D03] transition-all ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}

          {/* Sign In Button for Small Screens */}
          <div className="mt-4">
            <Link
              href="/signin"
              className="bg-[#FF7D03] text-white text-center block text-[32px] px-4 py-2 rounded hover:bg-orange-500 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;