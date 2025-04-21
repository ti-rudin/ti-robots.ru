<template>
  <div class="max-w-6xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-700 dark:text-gray-300">
    <!-- Hero Section -->
    <section class="mb-16 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in-down">
        {{ translations.title[currentLanguage] }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ translations.subtitle[currentLanguage] }}
      </p>
    </section>

    <!-- Featured Article -->
    <section class="mb-16">
      <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
        <div class="md:flex">
          <div class="md:w-1/3 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center p-8">
            <span class="text-6xl text-indigo-600 dark:text-indigo-300">📌</span>
          </div>
          <div class="md:w-2/3 p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                {{ translations.featuredTag[currentLanguage] }}
              </span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {{ translations.tags.automation[currentLanguage] }}
              </span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ translations.featuredArticle.title[currentLanguage] }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ translations.featuredArticle.excerpt[currentLanguage] }}
            </p>
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span class="mr-4">{{ translations.featuredArticle.date[currentLanguage] }}</span>
              <span>{{ translations.featuredArticle.readTime[currentLanguage] }}</span>
            </div>
            <router-link to="/article" class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
              {{ translations.readMore[currentLanguage] }}
              <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Tags Cloud -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        {{ translations.tagsTitle[currentLanguage] }}
      </h2>
      <div class="flex flex-wrap justify-center gap-3">
        <router-link 
          v-for="(tag, key) in translations.tags" 
          :key="key"
          to="#"
          class="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          :class="{
            'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200': key === 'featured',
            'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200': key !== 'featured'
          }">
          {{ tag[currentLanguage] }}
        </router-link>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
        {{ translations.latestArticles[currentLanguage] }}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(article, index) in articles" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span class="text-5xl">{{ article.emoji }}</span>
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="(tag, tagIndex) in article.tags" 
                :key="tagIndex"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">
                {{ translations.tags[tag][currentLanguage] }}
              </span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ article.title[currentLanguage] }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ article.excerpt[currentLanguage] }}
            </p>
            <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{{ article.date[currentLanguage] }}</span>
              <span>{{ article.readTime[currentLanguage] }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pagination -->
    <section class="flex justify-center">
      <nav class="flex items-center space-x-2">
        <button 
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors">
          &laquo;
        </button>
        <button 
          v-for="page in 3" 
          :key="page"
          class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          :class="{
            'bg-indigo-600 text-white': page === 1,
            'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': page !== 1
          }">
          {{ page }}
        </button>
        <button 
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors">
          &raquo;
        </button>
      </nav>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { currentLanguage } from '../stores/language';

export default {
  name: 'BlogPage',
  setup() {
    const translations = {
      title: {
        ru: 'Блог',
        en: 'Blog'
      },
      subtitle: {
        ru: 'Полезные статьи и новости о наших продуктах и технологиях',
        en: 'Helpful articles and news about our products and technologies'
      },
      featuredTag: {
        ru: 'Рекомендуем',
        en: 'Featured'
      },
      featuredArticle: {
        title: {
          ru: 'Как автоматизация торговли может увеличить вашу прибыль',
          en: 'How trading automation can increase your profits'
        },
        excerpt: {
          ru: 'Подробный разбор методов автоматизации торговли и их влияния на доходность инвестиционного портфеля.',
          en: 'Detailed analysis of trading automation methods and their impact on investment portfolio returns.'
        },
        date: {
          ru: '15 мая 2023',
          en: 'May 15, 2023'
        },
        readTime: {
          ru: '5 мин чтения',
          en: '5 min read'
        }
      },
      tagsTitle: {
        ru: 'Облако тегов',
        en: 'Tags Cloud'
      },
      latestArticles: {
        ru: 'Последние статьи',
        en: 'Latest Articles'
      },
      readMore: {
        ru: 'Читать далее',
        en: 'Read more'
      },
      tags: {
        featured: {
          ru: 'Рекомендуем',
          en: 'Featured'
        },
        automation: {
          ru: 'Автоматизация',
          en: 'Automation'
        },
        trading: {
          ru: 'Трейдинг',
          en: 'Trading'
        },
        smartHome: {
          ru: 'Умный дом',
          en: 'Smart Home'
        },
        events: {
          ru: 'Мероприятия',
          en: 'Events'
        },
        openSource: {
          ru: 'Open Source',
          en: 'Open Source'
        },
        algorithms: {
          ru: 'Алгоритмы',
          en: 'Algorithms'
        },
        caseStudy: {
          ru: 'Кейсы',
          en: 'Case Studies'
        }
      }
    };

    const articles = [
      {
        emoji: '📈',
        tags: ['trading', 'algorithms'],
        title: {
          ru: 'Оптимизация TSL бота для Binance',
          en: 'Optimizing TSL Bot for Binance'
        },
        excerpt: {
          ru: 'Как мы улучшили производительность нашего торгового бота на 37%.',
          en: 'How we improved our trading bot performance by 37%.'
        },
        date: {
          ru: '10 мая 2023',
          en: 'May 10, 2023'
        },
        readTime: {
          ru: '4 мин чтения',
          en: '4 min read'
        }
      },
      {
        emoji: '🏠',
        tags: ['smartHome', 'automation'],
        title: {
          ru: 'WirenBoard: полное руководство',
          en: 'WirenBoard: Complete Guide'
        },
        excerpt: {
          ru: 'Все что нужно знать о настройке умного дома на WirenBoard.',
          en: 'Everything you need to know about setting up a smart home on WirenBoard.'
        },
        date: {
          ru: '5 мая 2023',
          en: 'May 5, 2023'
        },
        readTime: {
          ru: '7 мин чтения',
          en: '7 min read'
        }
      },
      {
        emoji: '🎤',
        tags: ['events', 'caseStudy'],
        title: {
          ru: 'Организация фестиваля с нашим софтом',
          en: 'Organizing a Festival with Our Software'
        },
        excerpt: {
          ru: 'Как мы автоматизировали все процессы на крупном музыкальном фестивале.',
          en: 'How we automated all processes at a major music festival.'
        },
        date: {
          ru: '28 апреля 2023',
          en: 'April 28, 2023'
        },
        readTime: {
          ru: '6 мин чтения',
          en: '6 min read'
        }
      },
      {
        emoji: '💻',
        tags: ['openSource', 'automation'],
        title: {
          ru: 'Почему мы выбрали Open Source',
          en: 'Why We Chose Open Source'
        },
        excerpt: {
          ru: 'Наш опыт работы с открытым кодом и преимущества этого подхода.',
          en: 'Our experience with open source and the benefits of this approach.'
        },
        date: {
          ru: '20 апреля 2023',
          en: 'April 20, 2023'
        },
        readTime: {
          ru: '5 мин чтения',
          en: '5 min read'
        }
      }
    ];

    return {
      currentLanguage,
      translations,
      articles
    };
  }
}
</script>

<style>
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>