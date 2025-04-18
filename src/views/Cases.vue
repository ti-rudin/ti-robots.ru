<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <section class="space-y-6 text-gray-700 dark:text-gray-300">
      <article>
        <p>{{ translations.case1[currentLanguage] }}</p>
      </article>
      <article>
        <p>{{ translations.case2[currentLanguage] }}</p>
      </article>
      <article>
        <h2 class="text-2xl font-semibold mb-2">
          <router-link to="/case-binance-tsl" class="text-blue-600 hover:underline">
            {{ translations.caseBinanceTitle[currentLanguage] }}
          </router-link>
        </h2>
      </article>
    </section>
  </div>
</template>

<script>
import { currentLanguage } from '../stores/language';

export default {
  name: 'Cases',
  setup() {
    const translations = {
      title: {
        ru: 'Кейсы',
        en: 'Cases',
      },
      case1: {
        ru: '«Для транспортной компании мы автоматизировали обработку накладных. Робот сократил время с 4 часов до 20 минут в день.»',
        en: '“For a transport company, we automated the processing of invoices. The robot reduced the time from 4 hours to 20 minutes per day.”',
      },
      case2: {
        ru: '«Внедрили RPA в банке для проверки клиентов. Точность — 99%, экономия — 200 часов в месяц.»',
        en: '“Implemented RPA in a bank for client verification. Accuracy — 99%, savings — 200 hours per month.”',
      },
      caseBinanceTitle: {
        ru: 'Кейс: Binance Trailing Stop Bot',
        en: 'Case: Binance Trailing Stop Bot',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};
</script>
