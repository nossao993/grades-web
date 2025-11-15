'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Grades"
            width={111}
            height={24}
            className="h-6 w-auto"
          />
        </a>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-[15px] font-normal hover:opacity-70 transition-opacity"
            >
              Зарплаты
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <path d="M3 5.5L7 9.5L11 5.5" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <a href="#contact" className="text-[15px] font-normal hover:opacity-70 transition-opacity">
            Контакты
          </a>

          <a
            href="https://t.me/gradesTrackerBot/grades?startapp=landingmainup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2.5 rounded-[10px] text-[15px] font-normal flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
              <path d="M1.137 5.371C5.593 3.619 8.56 2.455 10.05 1.89C14.29 0.288 15.181 0.012 15.754 0C15.881 0 16.162 0.023 16.352 0.161C16.505 0.277 16.544 0.426 16.569 0.542C16.594 0.657 16.62 0.899 16.594 1.083C16.365 3.273 15.372 8.587 14.863 11.03C14.646 12.068 14.226 12.414 13.819 12.448C12.927 12.517 12.253 11.918 11.399 11.411C10.05 10.616 9.299 10.12 7.987 9.336C6.472 8.437 7.452 7.942 8.318 7.135C8.547 6.927 12.456 3.7 12.533 3.412C12.545 3.377 12.545 3.239 12.456 3.17C12.367 3.101 12.24 3.124 12.138 3.147C11.998 3.17 9.859 4.461 5.695 7.008C5.084 7.388 4.537 7.573 4.04 7.561C3.492 7.55 2.448 7.285 1.659 7.054C0.704 6.777 -0.06 6.628 0.004 6.143C0.042 5.89 0.424 5.636 1.137 5.371Z" fill="white"/>
            </svg>
            Смотреть зарплаты
          </a>
        </div>
      </nav>
    </header>
  );
}
