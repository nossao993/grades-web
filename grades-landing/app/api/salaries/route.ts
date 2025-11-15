import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    // Try to fetch from external API
    try {
      const response = await fetch('https://app.getgrade.ru/api/salaries', {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        let data = await response.json();

        // Filter by category if provided
        if (category && category !== 'Все') {
          data = data.filter((item: any) => item.category === category);
        }

        // Filter by search if provided
        if (search) {
          const searchLower = search.toLowerCase();
          data = data.filter((item: any) =>
            item.company?.toLowerCase().includes(searchLower) ||
            item.position?.toLowerCase().includes(searchLower) ||
            item.location?.toLowerCase().includes(searchLower)
          );
        }

        return NextResponse.json(data);
      }
    } catch (apiError) {
      console.error('External API error:', apiError);
    }

    // Fallback to mock data if API fails
    const mockData = [
      {
        id: 1,
        company: 'ГК Иннотех',
        logo: '/images/hvIrhmiJm0hcFi1OR0pazBumYGA.png',
        salary: '320 000 ₽/мес',
        position: 'Руководитель разработки',
        location: 'Москва, Удаленка РФ 🇷🇺',
        timeAgo: '18ч назад',
        category: 'Разработка',
      },
      {
        id: 2,
        company: 'Сбербанк',
        logo: '/images/l4V2KeKj6boug2OAXGGl6AtDOM.png',
        salary: '450 000 ₽/мес',
        position: 'Senior Backend разработчик',
        location: 'Москва 🇷🇺',
        timeAgo: '1д назад',
        category: 'Разработка',
      },
      {
        id: 3,
        company: 'Яндекс',
        logo: '/images/OnPcB9KKPMS2NksxuA6FRAXRQ.png',
        salary: '380 000 ₽/мес',
        position: 'Senior Frontend разработчик',
        location: 'Москва, Санкт-Петербург 🇷🇺',
        timeAgo: '2д назад',
        category: 'Разработка',
      },
      {
        id: 4,
        company: 'Тинькoff',
        logo: '/images/AZDkz9UI55WUgtxhashJIIMfSn8.png',
        salary: '300 000 ₽/мес',
        position: 'Product Designer',
        location: 'Москва, Удаленка РФ 🇷🇺',
        timeAgo: '3д назад',
        category: 'Дизайн',
      },
      {
        id: 5,
        company: 'Авито',
        logo: '/images/HNeEnXv89LJBmhpkbsVr6EzlD4.png',
        salary: '250 000 ₽/мес',
        position: 'Product Manager',
        location: 'Москва 🇷🇺',
        timeAgo: '4д назад',
        category: 'Менеджмент',
      },
      {
        id: 6,
        company: 'VK',
        logo: '/images/dY74bnukjNNL7DdkQt1S94rJzrE.png',
        salary: '280 000 ₽/мес',
        position: 'Data Analyst',
        location: 'Москва, Санкт-Петербург 🇷🇺',
        timeAgo: '5д назад',
        category: 'Аналитика',
      },
      {
        id: 7,
        company: 'Ozon',
        logo: '/images/SqitEn9AVNcYlpfftKLzFSoNqR4.png',
        salary: '220 000 ₽/мес',
        position: 'Marketing Manager',
        location: 'Москва, Удаленка РФ 🇷🇺',
        timeAgo: '6д назад',
        category: 'Маркетинг',
      },
      {
        id: 8,
        company: 'Сбербанк',
        logo: '/images/l4V2KeKj6boug2OAXGGl6AtDOM.png',
        salary: '340 000 ₽/мес',
        position: 'iOS разработчик',
        location: 'Москва 🇷🇺',
        timeAgo: '1нед назад',
        category: 'Разработка',
      },
      {
        id: 9,
        company: 'Яндекс',
        logo: '/images/OnPcB9KKPMS2NksxuA6FRAXRQ.png',
        salary: '420 000 ₽/мес',
        position: 'Android разработчик',
        location: 'Москва, Санкт-Петербург 🇷🇺',
        timeAgo: '2нед назад',
        category: 'Разработка',
      },
      {
        id: 10,
        company: 'VK',
        logo: '/images/dY74bnukjNNL7DdkQt1S94rJzrE.png',
        salary: '310 000 ₽/мес',
        position: 'UX/UI Designer',
        location: 'Москва 🇷🇺',
        timeAgo: '2нед назад',
        category: 'Дизайн',
      },
    ];

    let filteredData = mockData;

    if (category && category !== 'Все') {
      filteredData = filteredData.filter(item => item.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.company.toLowerCase().includes(searchLower) ||
        item.position.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower)
      );
    }

    return NextResponse.json(filteredData);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch salaries' }, { status: 500 });
  }
}
