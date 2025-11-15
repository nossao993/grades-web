'use client';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'Все',
  'Разработка',
  'Дизайн',
  'Менеджмент',
  'Аналитика',
  'Маркетинг',
];

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-full text-[15px] font-medium whitespace-nowrap transition-all ${
            activeCategory === category
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
