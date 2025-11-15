'use client';

import Image from 'next/image';

interface SalaryCardProps {
  company: string;
  logo: string;
  salary: string;
  position: string;
  location: string;
  timeAgo: string;
}

export default function SalaryCard({ company, logo, salary, position, location, timeAgo }: SalaryCardProps) {
  return (
    <div className="bg-[#f4f4f4] rounded-[10px] p-5 flex flex-col gap-4 min-w-[280px] h-full">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
            <Image
              src={logo}
              alt={company}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm font-medium">{company}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[17px] font-semibold">{salary}</p>
          <p className="text-[17px] opacity-50">{position}</p>
        </div>

        <p className="text-xs text-[#919191]">{location}</p>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-300">
        <p className="text-xs text-[#adadad]">{timeAgo}</p>
      </div>
    </div>
  );
}
