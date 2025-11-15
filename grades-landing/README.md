# Grades - Зарплаты в IT 2025

Self-hosted landing page для просмотра зарплат в IT, воссоздающий дизайн оригинального сайта getgrade.ru.

## Особенности

- ✅ Максимально похожий дизайн на оригинал
- ✅ Шрифт Golos Text
- ✅ Адаптивная верстка (mobile, tablet, desktop)
- ✅ Навигация по категориям (Разработка, Дизайн, Менеджмент, Аналитика, Маркетинг)
- ✅ Поиск по компаниям, должностям и локациям
- ✅ API интеграция с app.getgrade.ru/api/salaries
- ✅ Fallback на моковые данные если API недоступен
- ✅ Анимированный счетчик зарплат
- ✅ Loading состояния

## Технологии

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Golos Text font

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev сервер:
```bash
npm run dev
```

3. Откройте в браузере:
```
http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Структура проекта

```
grades-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Шапка сайта
│   │   ├── CategoryNav.tsx     # Навигация по категориям
│   │   ├── SalaryCard.tsx      # Карточка зарплаты
│   │   └── SearchBar.tsx       # Поиск
│   ├── api/
│   │   └── salaries/
│   │       └── route.ts        # API endpoint
│   ├── layout.tsx              # Главный layout
│   ├── page.tsx                # Главная страница
│   └── globals.css             # Глобальные стили
├── public/
│   └── images/                 # Логотипы компаний
└── package.json
```

## API

Landing использует API endpoint `/api/salaries` который:
1. Пытается загрузить данные с `app.getgrade.ru/api/salaries`
2. Если API недоступен, использует моковые данные
3. Поддерживает фильтрацию по категориям и поиск

## Параметры API

- `category` - фильтр по категории (Разработка, Дизайн, и т.д.)
- `search` - поисковый запрос

Пример:
```
/api/salaries?category=Разработка&search=Яндекс
```

## Деплой

Landing можно задеплоить на:
- Vercel (рекомендуется)
- Netlify
- Любой хостинг с поддержкой Node.js

## Визуальное сходство с оригиналом

- ✅ Идентичная цветовая схема
- ✅ Тот же шрифт (Golos Text)
- ✅ Похожие карточки зарплат
- ✅ Аналогичная навигация
- ✅ Тот же header с логотипом и кнопками
- ✅ Footer с ссылками
- ✅ Telegram CTA кнопка

## Лицензия

MIT
