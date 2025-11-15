'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import SalaryCard from './components/SalaryCard';
import SearchBar from './components/SearchBar';

interface Salary {
  id: number;
  company: string;
  logo: string;
  salary: string;
  position: string;
  location: string;
  timeAgo: string;
  category: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [salaries, setSalaries] = useState<Salary[]>([]);
  const [filteredSalaries, setFilteredSalaries] = useState<Salary[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [salaryCount, setSalaryCount] = useState(1590);
  const [loading, setLoading] = useState(true);

  // Fetch salaries from API
  useEffect(() => {
    const fetchSalaries = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (activeCategory !== 'Все') {
          params.append('category', activeCategory);
        }
        if (searchQuery) {
          params.append('search', searchQuery);
        }

        const response = await fetch(`/api/salaries?${params.toString()}`);
        const data = await response.json();
        setSalaries(data);
        setFilteredSalaries(data);
      } catch (error) {
        console.error('Failed to fetch salaries:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchSalaries();
    }, 300);

    return () => clearTimeout(debounce);
  }, [activeCategory, searchQuery]);

  // Animated counter
  useEffect(() => {
    let start = 0;
    const end = 1590;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setSalaryCount(end);
        clearInterval(timer);
      } else {
        setSalaryCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Зарплаты в IT 2025
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-gray-700">
                Узнай, сколько зарабатывают твои коллеги в IT и Digital.
              </h2>

              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-lg font-medium">
                  {salaryCount.toLocaleString('ru-RU')} зарплат
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex-1 w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p className="text-center">
                  Карта с зарплатами<br/>
                  <span className="text-sm">(требуется интеграция карты)</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salaries Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Зарплаты недели</h2>

          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="mb-6">
            <CategoryNav
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
          )}

          {/* Salary Cards Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSalaries.map((salary) => (
                <SalaryCard
                  key={salary.id}
                  company={salary.company}
                  logo={salary.logo}
                  salary={salary.salary}
                  position={salary.position}
                  location={salary.location}
                  timeAgo={salary.timeAgo}
                />
              ))}
            </div>
          )}

          {!loading && filteredSalaries.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Нет данных для выбранной категории или поискового запроса
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Хотите узнать больше?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Смотрите все зарплаты в нашем Telegram боте
            </p>
            <a
              href="https://t.me/gradesTrackerBot/grades?startapp=landingmainup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg width="20" height="16" viewBox="0 0 17 13" fill="none">
                <path d="M1.137 5.371C5.593 3.619 8.56 2.455 10.05 1.89C14.29 0.288 15.181 0.012 15.754 0C15.881 0 16.162 0.023 16.352 0.161C16.505 0.277 16.544 0.426 16.569 0.542C16.594 0.657 16.62 0.899 16.594 1.083C16.365 3.273 15.372 8.587 14.863 11.03C14.646 12.068 14.226 12.414 13.819 12.448C12.927 12.517 12.253 11.918 11.399 11.411C10.05 10.616 9.299 10.12 7.987 9.336C6.472 8.437 7.452 7.942 8.318 7.135C8.547 6.927 12.456 3.7 12.533 3.412C12.545 3.377 12.545 3.239 12.456 3.17C12.367 3.101 12.24 3.124 12.138 3.147C11.998 3.17 9.859 4.461 5.695 7.008C5.084 7.388 4.537 7.573 4.04 7.561C3.492 7.55 2.448 7.285 1.659 7.054C0.704 6.777 -0.06 6.628 0.004 6.143C0.042 5.89 0.424 5.636 1.137 5.371Z" fill="white"/>
              </svg>
              Открыть в Telegram
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Grades. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Контакты
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
