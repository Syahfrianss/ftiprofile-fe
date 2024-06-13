import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type DropdownMenuProps = {
  label: string;
  items: { href: string; text: string }[];
  fontSize?: string;
};

const DropdownMenu = ({ label, items, fontSize }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseLeftArea, setMouseLeftArea] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event: MouseEvent) => {
    const target = event.relatedTarget as Node;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
    ) {
      setMouseLeftArea(false);
      setTimeout(() => {
        if (!mouseLeftArea) {
          setIsOpen(false);
          setMouseLeftArea(true);
        }
      }, 0.5); // Delay in milliseconds before closing the dropdown
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        className={`mx-6 hover:text-black text-xs tracking-wide focus:outline-none ${fontSize}`}
      >
        {label}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 bg-white text-gray-600 text-xs hover:text-black py-2 w-48 shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <Link key={index} href={item.href} className={`block px-4 py-2 text-xs hover:bg-gray-200 text-gray-600 hover:text-black ${fontSize}`}>
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
