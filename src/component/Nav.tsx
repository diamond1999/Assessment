import React from 'react';

type NavLink = {
  name: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
];

const Nav: React.FC = () => {
  return (
    <header className="text-[#0A2640] font-medium">
      <nav className="flex items-center justify-between">
        
        <ul className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-200 transition duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <button className="hover:text-gray-100 transition duration-300 mx-8 border-2 border-[#0A2640] rounded-full px-4 w-32 h-10 font-medium" type="button">
            Log In
          </button>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-white focus:outline-none focus:ring-2 focus:ring-white" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
